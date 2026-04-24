import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-10 mt-10">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo />
        <p className="text-xs text-muted-foreground text-center md:text-right">
          © {new Date().getFullYear()} Neura Pulse AI Health Solutions LLP. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;