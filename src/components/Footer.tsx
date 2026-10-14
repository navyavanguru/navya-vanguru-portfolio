const Footer = () => {
  const socials = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/navyavanguru" },
    { name: "Instagram", href: "https://www.instagram.com/navya_vanguru?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  ];

  return (
    <footer className="py-12 px-6 lg:px-12 border-t border-border bg-[#050505]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-semibold text-foreground">
          Navya<span className="text-muted-foreground">.</span>
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved.
        </p>
        <div className="flex gap-8">
          {socials.map((s) => (
            <a 
              key={s.name} 
              href={s.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:tracking-widest"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
