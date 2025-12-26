export default function RefundPolicy() {
    return (
        <section className="w-full fp max-container">
            <div className="flex flex-col gap-8 md:gap-10">
                {/* Page Title */}
                <div className="flex flex-col gap-3">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-semibold font-general-sans text-text-dark">
                        Refund Policy — <span className="gradient-text">BrightSphere Learning</span>
                    </h1>
                    <p>
                        Thank you for choosing BrightSphere Learning. We strive to deliver high-quality learning experiences to all our students. Please read our refund policy carefully before enrolling in any course.
                    </p>
                </div>

                {/* Section 1 */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-general-sans text-text-dark">
                        1. Refund Eligibility Period
                    </h2>
                    <ul className="list-disc list-inside flex flex-col gap-2">
                        <li>Refund requests will be considered only if submitted within <strong>7 days</strong> from the date of payment.</li>
                        <li>No refund requests will be accepted after the 7-day period has elapsed.</li>
                    </ul>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-general-sans text-text-dark">
                        2. How to Request a Refund
                    </h2>
                    <p>To request a refund, the learner must:</p>
                    <ul className="list-disc list-inside flex flex-col gap-2">
                        <li>Submit a written request to <a href="mailto:contact@brightsphere.com" className="text-secondary underline hover:no-underline">contact@brightsphere.com</a> within 7 days from the payment date.</li>
                        <li>Include the full name, order/transaction ID, course name, and reason for refund in the request.</li>
                    </ul>
                </div>

                {/* Section 3 */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-general-sans text-text-dark">
                        3. Refund Conditions
                    </h2>
                    <p>Refunds will be processed only under the following conditions:</p>
                    <ol className="list-decimal list-inside flex flex-col gap-2">
                        <li>The refund request is received within the 7-day eligibility period.</li>
                        <li>The learner has not completed more than <strong>20%</strong> of the course content (measured by module/videos watched, assignments submitted, or other criteria determined by BrightSphere Learning).</li>
                        <li>There is no certificate issued for the course.</li>
                        <li>Any complimentary materials, downloads, or digital assets provided as part of the course must not have been fully utilized beyond the 20% threshold.</li>
                        <li>Refunds are subject to verification and approval by the BrightSphere Learning team.</li>
                    </ol>
                </div>

                {/* Section 4 */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-general-sans text-text-dark">
                        4. Non-Refundable Cases
                    </h2>
                    <p>Refunds will <strong>not</strong> be issued in the following cases:</p>
                    <ul className="list-disc list-inside flex flex-col gap-2">
                        <li>Requests made after the 7-day refund period.</li>
                        <li>Learner has completed more than 20% of the course.</li>
                        <li>Learner has received a certificate of completion.</li>
                        <li>Dissatisfaction due to personal reasons such as lack of time, technical difficulties on user devices, or change of mind.</li>
                        <li>Discounted or free courses, unless otherwise specified.</li>
                    </ul>
                </div>

                {/* Section 5 */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-general-sans text-text-dark">
                        5. Refund Processing
                    </h2>
                    <ul className="list-disc list-inside flex flex-col gap-2">
                        <li>Approved refunds will be processed within <strong>7–14 business days</strong> of approval.</li>
                        <li>Refunds will be issued to the original mode of payment.</li>
                        <li>Bank charges, gateway fees, or transaction processing fees may be deducted where applicable.</li>
                    </ul>
                </div>

                {/* Section 6 */}
                <div className="flex flex-col gap-3">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold font-general-sans text-text-dark">
                        6. Support & Dispute Resolution
                    </h2>
                    <p>For any questions or concerns regarding refunds, please contact our support team at:</p>
                    <p className="flex items-center gap-2">
                        <span>📧</span>
                        <a href="mailto:contact@brightsphere.com" className="text-secondary underline hover:no-underline font-medium">
                            contact@brightsphere.com
                        </a>
                    </p>
                    <p>We endeavor to respond to all queries within <strong>48 hours</strong>.</p>
                </div>
            </div>
        </section>
    );
}