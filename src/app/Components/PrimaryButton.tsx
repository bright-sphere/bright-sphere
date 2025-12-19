import Link from "next/link";
interface PrimaryButtonProps {
    children: React.ReactNode;
    className?: string;

}

export default function PrimaryButton({ children, className }: PrimaryButtonProps) {
    const url = "https://pages.razorpay.com/ai-course"

    return (

        <button className={`${className} px-5 py-3 md:px-11 md:py-4 text-sm md:text-base xxl:text-lg text-white font-open-sans font-semibold rounded-full primary cursor-pointer`}><Link href={url}>{children}</Link></button>

    );
}   