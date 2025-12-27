import CheckListItem from "./CheckListItem";
import Image from "next/image";
export default function Who() {

    const checkListItems = [
        "Are curious about technology",
        "Want to use AI meaningfully",
        "Need structured guidance",
        "Want to build confidence in speaking",
        "Enjoy hands-on creative projects",
        "Want to learn from industry experts",
    ]
    return (
        <section className="relative w-full flex flex-col fp pb-0 sm:fpb gap-5 bg-[#E198A0] overflow-hidden">

            <div className="w-full flex flex-col gap-4 max-container text-white">
                <h2 className="text-2xl sm:text-3xl lg:text-[32px] xl:text-4xl xxl:text-[42px] font-semibold font-general-sans">Who This Program Is For</h2>
                <p className="text-white">Students who:</p>
                <ul className="flex flex-col gap-4 mt-3 md:mt-6">
                    {checkListItems.map((item, index) => (
                        <CheckListItem key={index} bgClass="bg-white" svgColor="#e1989f" textColor="text-white" >{item}</CheckListItem>
                    ))}

                </ul>
            </div>
            <div className="w-full flex justify-end sm:absolute sm:bottom-0 sm:right-0 lg:right-20 xl:right-50">
                <Image className="w-full sm:w-[50%] lg:w-[45%] xl:w-[40%]" src="/images/girl-3.webp" alt="girl-3" width={694} height={583} />
            </div>
        </section>
    );
}