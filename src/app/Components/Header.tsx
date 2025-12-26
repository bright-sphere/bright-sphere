import PrimaryButton from "./PrimaryButton";
import Image from "next/image";
export default function Header() {
    return (
        <header className="absolute top-0 left-0 right-0 z-50 w-full fpx pt-5 max-container">
            <div className="flex justify-between items-center  pl-6 pr-3 py-3 bg-white rounded-full ">
                {/* <div className="text-base mlg:text-lg md:text-2xl xxl:text-3xl gradient-text font-semibold font-general-sans">Bright Sphere</div> */}
                <span className="relative tm-2 w-[45%] mlg:w-[40%] sm:w-[30%] md:w-[25%] lg:w-[20%] xl:w-[16%] xxl:w-[15%]">
                    <Image src="/icons/logo-2.svg" alt="logo" width={925.14} height={181.18} />
                </span>
                <PrimaryButton>Enroll Now</PrimaryButton>
            </div>
        </header>
    );
}