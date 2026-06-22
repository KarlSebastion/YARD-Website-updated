import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface SignUpModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignUpModal = ({ open, onOpenChange }: SignUpModalProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      toast({ title: "Please fill in your name and email.", variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const id = crypto.randomUUID();
      const { error } = await supabase.from("sgpt_members" as any).insert({
        id,
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim() || null,
      } as any);

      if (error) throw error;

      // Send welcome email
      await supabase.functions.invoke("send-sgpt-welcome", {
        body: { name: name.trim(), email: email.trim().toLowerCase() },
      });

      setSubmitted(true);
    } catch (err: any) {
      console.error("Signup error:", err);
      toast({
        title: "Something went wrong",
        description: err?.message?.includes("Rate limit")
          ? "Please wait a moment before trying again."
          : "Please try again shortly.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    onOpenChange(false);
    if (submitted) {
      setSubmitted(false);
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <span className="text-5xl block">🔥</span>
            <DialogHeader>
              <DialogTitle className="text-2xl font-medium">
                YOU'RE <span className="text-gradient">IN.</span>
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-base mt-2">
                Check your inbox — we've sent you everything you need to get started at The YARD.
              </DialogDescription>
            </DialogHeader>
            <Button onClick={handleClose} className="mt-4 w-full tracking-wider">
              CLOSE
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <div className="text-primary text-xs tracking-[0.3em] mb-1">SGPT MEMBERSHIP</div>
              <DialogTitle className="text-2xl font-medium">
                CLAIM YOUR <span className="text-gradient">SPACE</span>
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Join the next SGPT group. Limited to 6 per session.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label htmlFor="sgpt-name">Full Name</Label>
                <Input
                  id="sgpt-name"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  required
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sgpt-email">Email</Label>
                <Input
                  id="sgpt-email"
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  maxLength={255}
                  required
                  className="bg-background border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sgpt-phone">Phone <span className="text-muted-foreground text-xs">(optional)</span></Label>
                <Input
                  id="sgpt-phone"
                  type="tel"
                  placeholder="07xxx xxx xxx"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  maxLength={20}
                  className="bg-background border-border"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full tracking-wider text-sm py-5"
              >
                {loading ? "SUBMITTING…" : "JOIN THE YARD — £120/mo"}
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                🔒 We'll send you a welcome pack with next steps.
              </p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SignUpModal;
