export const Experience = () => {
    return (
        <section className="mt-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
                Professional Experience
            </h2>
            <div className="mt-2 h-0.5 w-full bg-blue-500/80 rounded"></div>

            <div className="mt-6 space-y-2">
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100">
                    Frontend Developer
                </h3>

                <div className="flex flex-wrap items-center gap-x-2 text-blue-700 dark:text-blue-400">
                    <a
                        href="https://example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium hover:underline"
                    >
                        SINT
                    </a>
                    <span>· Full-time</span>
                    <span>· Nov 2024 - Present</span>
                </div>

                <div className="text-gray-600 dark:text-gray-300 italic">
                    Odessa, Ukraine · Remote
                </div>

                <ul className="mt-4 list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
                    <li>

                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                    <li>

                    </li>
                </ul>

                <p className="mt-6 text-gray-700 dark:text-gray-200">
                    <span className="font-semibold">Technologies:</span>{" "}
                    React.js, Redux, TypeScript, Web3.js, MetaMask, WalletConnect, OAuth 2.0, Three.js, Styled
                    Components, Feature‑Sliced Design, GitHub Actions, AWS
                </p>
            </div>
        </section>
    );
};