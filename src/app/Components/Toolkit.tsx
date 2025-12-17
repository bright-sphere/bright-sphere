import Image from "next/image";

export default function Toolkit() {
    const toolkitData = [

        "Writing & Research tools",
        "Presentation helpers",
        "Brainstorming tools",
        "ChatGPT,Gemini, Perplexity",
        "And other safe, student-friendly AI platforms",
        "Helps students turn ideas into polished work."



    ]
    return (
        <section className="w-full ">
            <div className="w-full flex gap-11 fp max-container">
                {/* Left Column */}
                <div className="w-1/2 relative ">
                    <Image className="absolute top-20 left-30" src="/icons/leonardo-2.webp" alt="Leonardo AI" width={155} height={162} />
                    <Image className="absolute top-20 right-30" src="/icons/gemini-2.webp" alt="Gemini AI" width={112} height={44} />
                    <Image className="absolute top-70 left-0" src="/icons/bard-2.webp" alt="Bard AI" width={139} height={104} />
                    <Image className="absolute top-50 right-10" src="/icons/chat-gpt-2.webp" alt="ChatGPT AI" width={137} height={169} />
                    <Image className="absolute bottom-25 left-10" src="/icons/copilot-2.webp" alt="Copilot AI" width={176.8} height={142.4} />
                    <Image className="absolute bottom-20 right-20" src="/icons/gamma-2.webp" alt="Gamma AI" width={137} height={137} />
                    <Image className="absolute bottom-0 left-0" src="/icons/lovable-2.webp" alt="Lovable AI" width={143} height={26} />
                </div>
                {/* End of Left Column */}

                {/* Right Column */}
                <div className="w-1/2 flex flex-col gap-11 items-center ">
                    <h2 className="text-[42px] font-general-sans font-semibold text-text-dark"><span className="gradient-text">AI Toolkit </span>Students Use</h2>


                    <div className="grid grid-cols-2 grid-rows-repeat[3,auto] gap-5 text-center">
                        {toolkitData.map((item, index) => (
                            <div className="flex flex-col justify-center items-center gap-3 bg-white rounded-[15px] p-6">
                                <div className="text-[64px] font-general-sans font-semibold gradient-text leading-none">0{index + 1}</div>
                                <div className="text-[22px] font-lato font-medium">{item}</div>
                            </div>
                        ))}

                    </div>
                </div>
                {/* End of Right Column */}
            </div>
        </section>
    )
}