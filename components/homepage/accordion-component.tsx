import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionComponent() {
    return (
        <div className="flex flex-col w-[70%] lg:w-[50%]">
            <h2 className="scroll-m-20 pb-[3rem] text-center text-3xl font-semibold tracking-tight lg:text-4xl">
                Frequently Asked Questions (FAQs)
            </h2>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger><span className="text-xl font-semibold">What is Naddif AI?</span></AccordionTrigger>
                    <AccordionContent>
                        <p>Naddif AI is an AI-driven code review platform designed to automatically analyze and review code for quality, security, and best practices. Our AI algorithms provide actionable insights, highlight potential issues, and suggest improvements to enhance your codebase</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger><span className="text-xl font-semibold">How does Naddif AI work?</span></AccordionTrigger>
                    <AccordionContent>
                        <p>Our platform integrates with your development environment or version control system. Once connected, it scans your code for various parameters including style, security vulnerabilities, and performance issues. The AI then generates detailed reports and suggestions to help you refine your code</p>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger><span className="text-xl font-semibold">Is my code secure with Naddif AI?</span></AccordionTrigger>
                    <AccordionContent>
                        <p>Yes, we prioritize the security and confidentiality of your code. Our platform uses industry-standard encryption protocols for data transmission and storage. We also adhere to best practices for data protection to ensure your code remains secure</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}
