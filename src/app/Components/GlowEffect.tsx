interface GlowEffectProps {
    width?: string;
    height?: string;
    bgClass?: string;
    opacity?: string;
    className?: string;
}

export default function GlowEffect({ className = "", width = "w-[400px]", height = "h-[400px]", bgClass = "primary", opacity = "opacity-20" }: GlowEffectProps) {
    return (
        <div className={`absolute ${width} ${height} ${bgClass} rounded-full ${opacity} blur-[100px] z-0 ${className}`}></div>
    );
}
