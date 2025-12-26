"use client";

import { useEffect } from "react";
import { usePopup } from "../Context/PopupContext";

export default function PopupForm() {
    const { isOpen, closePopup } = usePopup();

    // Disable background scrolling when popup is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <section className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/60 ">
            <div className="w-[90%] md:w-[70%] lg:w-[60%] xl:w-[45%] flex flex-col gap-5 p-6 md:p-10 bg-white rounded-2xl shadow-lg max-h-[90vh] overflow-y-auto">
                <div className="relative flex flex-col items-center gap-0 md:gap-2">
                    <button onClick={closePopup} type="button" className="absolute -top-3 -right-3 md:-top-5 md:-right-5  text-secondary  cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-8 md:h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <h2 className="text-lg mlg:text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-4xl xxl:text-[42px] font-semibold font-general-sans gradient-text text-center">Student Registration</h2>
                    <p className="text-xs mlg:text-sm sm:text-base text-center">Fill out the form to enroll in our program</p>
                </div>
                <form
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5"
                    action="https://formsubmit.co/contact.brightsphere@gmail.com"
                    method="POST"
                >
                    {/* Hidden fields for redirect and captcha */}
                    <input type="hidden" name="_next" value="https://pages.razorpay.com/aims-course" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />

                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="font-lato font-semibold">Student Name <span className="text-red-500">*</span></label>
                        <input type="text" name="name" placeholder="Student Name" required className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-secondary" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="font-lato font-semibold">Email <span className="text-red-500">*</span></label>
                        <input type="email" name="email" placeholder="Email" required className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-secondary" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="font-lato font-semibold">WhatsApp Number <span className="text-red-500">*</span></label>
                        <input type="number" name="phone" placeholder="WhatsApp Number" required className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-secondary" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="school" className="font-lato font-semibold">Student School <span className="text-red-500">*</span></label>
                        <input type="text" name="school" placeholder="Student School" required className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-secondary" />
                    </div>
                    <div className="flex flex-col gap-2 col-span-1 sm:col-span-2">
                        <label htmlFor="grade" className="font-lato font-semibold">Select Grade <span className="text-red-500">*</span></label>
                        <select className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-secondary bg-white" name="grade" defaultValue="" required>
                            <option value="" disabled>Select Grade</option>
                            <option value="grade-6">Grade 6</option>
                            <option value="grade-7">Grade 7</option>
                            <option value="grade-8">Grade 8</option>
                            <option value="grade-9">Grade 9</option>
                            <option value="grade-10">Grade 10</option>
                            <option value="grade-11">Grade 11</option>
                            <option value="grade-12">Grade 12</option>
                        </select>
                    </div>

                    <button type="submit" className="col-span-1 sm:col-span-2 mt-4 md:mt-2 xxl:mt-4 px-5 py-3 md:px-11 md:py-4 text-sm md:text-base xxl:text-lg text-white font-open-sans font-semibold rounded-full primary cursor-pointer hover:shadow-lg transition-shadow">Next</button>
                </form>
            </div>
        </section>
    );
}