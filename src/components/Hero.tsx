export const Hero = () => {
    return (
        <div className="space-y-6">
            {/* Имя и должность */}
            <div className="text-center space-y-2">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-100">
                    Petro Palahin
                </h1>
                <h2 className="text-xl md:text-2xl font-medium text-blue-600 dark:text-blue-400">
                    Frontend Developer
                </h2>
            </div>

            {/* Описание */}
            <div className="relative bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
                {/* Синяя вертикальная полоса слева */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-l-lg"></div>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm md:text-base pl-4">
                    loren ipsum
                </p>
            </div>

            {/* Адрес (отдельным блоком) */}
            <a
                href="https://www.google.com/maps/search/?api=1&query=Odesa%2C%20Ukraine"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
                <span className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center text-white transition-colors group-hover:bg-blue-600">
                    <i className="fa-solid fa-location-dot text-[12px]"></i>
                </span>
                <span className="transition-colors">Ukraine, Odesa (Remote/Office)</span>
            </a>

            {/* Контакты (три колонки) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm md:text-base">
                <a
                    href="#telegram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    <span className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white transition-transform transition-colors group-hover:bg-blue-600 group-hover:scale-105">
                        <i className="fa-brands fa-telegram text-[12px]"></i>
                    </span>
                    <span className="transition-colors">Telegram</span>
                </a>

                <a
                    href="#linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    <span className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white transition-transform transition-colors group-hover:bg-blue-700 group-hover:scale-105">
                        <i className="fa-brands fa-linkedin-in text-[12px]"></i>
                    </span>
                    <span className="transition-colors">LinkedIn</span>
                </a>

                <a
                    href="#github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    <span className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center text-white transition-transform transition-colors group-hover:bg-gray-700 group-hover:scale-105">
                        <i className="fa-brands fa-github text-[12px]"></i>
                    </span>
                    <span className="transition-colors">GitHub</span>
                </a>

                <a
                    href="mailto:petepalagin@gmail.com"
                    className="group flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    <span className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white transition-transform transition-colors group-hover:bg-red-600 group-hover:scale-105">
                        <i className="fa-solid fa-envelope text-[12px]"></i>
                    </span>
                    <span className="transition-colors">petepalagin@gmail.com</span>
                </a>

                <a
                    href="tel:+380959053972"
                    className="group flex items-center space-x-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                    <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white transition-transform transition-colors group-hover:bg-green-600 group-hover:scale-105">
                        <i className="fa-solid fa-phone text-[12px]"></i>
                    </span>
                    <span className="transition-colors">+380 95 905 39 72</span>
                </a>
            </div>
        </div>
    );
};