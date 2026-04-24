import logo from "@/assets/neurapulse-logo.png";

interface LogoProps {
  size?: number;
  showText?: boolean;
}

const Logo = ({ size = 44, showText = true }: LogoProps) => {
  return (
    <a href="#top" className="flex items-center gap-3 group">
      <div
        className="relative rounded-full overflow-hidden ring-1 ring-primary/40 shadow-glow transition-transform duration-500 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        <img
          src={logo}
          alt="Neura Pulse AI Health Solutions LLP logo"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/0 via-transparent to-accent/20 pointer-events-none" />
      </div>
      {showText && (
        <div className="leading-tight">
          <div className="font-display text-base font-semibold tracking-tight">
            Neura<span className="text-gradient">Pulse</span>
          </div>
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            AI Health Solutions LLP
          </div>
        </div>
      )}
    </a>
  );
};

export default Logo;