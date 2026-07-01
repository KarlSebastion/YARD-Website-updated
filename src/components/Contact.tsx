import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim()) {
      alert("Please fill in name and email.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const submissionData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        service_interest: formData.service || null,
        message: formData.message.trim() || null
      };

      console.log('Submitting contact form:', submissionData);

      // TODO: Connect to Supabase when client path is verified
      // For now, just log success
      setSubmitStatus("success");

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });

      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] mb-4">CONTACT</p>
          <h2 className="text-3xl md:text-5xl font-medium">
            START YOUR <span className="text-gradient">JOURNEY</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4">GET IN TOUCH</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ready to transform? Drop us a message and we'll get back to you
                within 24 hours to discuss your goals.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-border flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground">Barnet, North London</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-border flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground">info@yardtraining.co.uk</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 border border-border flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground">07595 228722</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitStatus === "success" && (
              <div className="p-4 bg-green-600/10 border border-green-600/20 text-green-600 text-sm rounded">
                ✓ Message sent! We'll contact you within 24 hours.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 bg-red-600/10 border border-red-600/20 text-red-600 text-sm rounded">
                ✗ Something went wrong. Please try again.
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                  Name *
                </label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                  Email *
                </label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" placeholder="your@email.com" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="block text-sm text-muted-foreground mb-2">
                  Phone
                </label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors" placeholder="07XXX XXX XXX" />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm text-muted-foreground mb-2">
                  Interest
                </label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 bg-card border border-border text-foreground focus:border-primary focus:outline-none transition-colors">
                  <option value="">Select service</option>
                  <option value="circuits">YARD Circuits</option>
                  <option value="1-to-1">1-to-1 Personal Training</option>
                  <option value="both">Both</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                Message
              </label>
              <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors resize-none" placeholder="Tell us about your goals..." />
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wider hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
              {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;