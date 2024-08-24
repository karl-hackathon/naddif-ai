import { Computer, Network } from "lucide-react";
import { FaBusinessTime } from "react-icons/fa";
import { OrbitingCirclesComponent } from "./orbiting-circles";

const features = [
    {
        name: "Spot errors instantly.",
        description:
            "Catch coding mistakes in real-time with advanced AI analysis. Our tool helps you identify and fix issues as you code, reducing debugging time and boosting productivity.",
        icon: Computer,
    },
    {
        name: "Automate corrections.",
        description:
            "Let AI handle routine fixes and improvements. Our code reviewer automates common corrections and suggests enhancements, so you can focus on writing innovative code.",
        icon: FaBusinessTime,
    },
    {
        name: "Learn as you code.",
        description:
            "Enhance your coding skills with intelligent feedback and explanations. Our reviewer not only fixes mistakes but also teaches you best practices and coding standards.",
        icon: Network,
    },
];

export default function SideBySide() {
    return (
        <div className="overflow-hidden ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <p className="mt-2 text-3xl font-bold tracking-tight  dark:text-white text-gray-900 sm:text-4xl">
                                A smarter way to code
                            </p>
                            <p className="mt-6 text-lg leading-8  text-gray-600 dark:text-gray-400">
                                Elevate your development with our intelligent tool now
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div
                                        key={feature.name}
                                        className="relative pl-9"
                                    >
                                        <dt className="inline font-semibold dark:text-gray-100 text-gray-900">
                                            <feature.icon
                                                className="absolute left-1 top-1 h-5 w-5"
                                                aria-hidden="true"
                                            />
                                            {feature.name}
                                        </dt>{" "}
                                        <dd className="inline dark:text-gray-400">
                                            {feature.description}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <OrbitingCirclesComponent />
                </div>
            </div>
        </div>
    );
}
