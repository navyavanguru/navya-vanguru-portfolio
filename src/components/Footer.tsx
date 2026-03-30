const Footer = () => (
  <footer className="py-12 px-6 lg:px-12 border-t border-border">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="font-display text-lg font-semibold text-foreground">
        Portfolio<span className="text-primary">.</span>
      </p>
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} All rights reserved.
      </p>
      <div className="flex gap-6">
        {["LinkedIn", "Instagram", "Twitter"].map((s) => (
          <a key={s} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            {s}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
