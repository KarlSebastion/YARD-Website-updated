const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/yard-logo.png" alt="YARD Training" className="h-8 w-auto" />
            <span className="text-sm text-muted-foreground">
              Barnet, North London
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} YARD Training. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
