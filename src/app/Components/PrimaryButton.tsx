"use client";
import { usePopup } from "../Context/PopupContext";


interface PrimaryButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
}

export default function PrimaryButton({
    children,
    className,
    onClick,
    type = "button",
}: PrimaryButtonProps) {
    const { openPopup } = usePopup();




    return (
        <button
            type={type}
            onClick={onClick ?? openPopup}
            className={`
        ${className}
        px-5 py-3 md:px-11 md:py-4
        text-sm md:text-base xxl:text-lg
        text-white font-open-sans font-semibold
        rounded-full primary-button hover:bg-position-[100%_50%] cursor-pointer
      `}
        >
            {children}
        </button>
    );
}
