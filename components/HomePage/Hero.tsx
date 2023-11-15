export default function Hero()  {
    return (
        <div className="relative overflow-hidden">
            <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
                <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
            </div>

            <div className="relative z-10 py-60">
                <div className="max-w-[85rem] mx-auto my-auto px-4 sm:px-6 lg:px-8 lg:py-16">
                    <div className="max-w-2xl text-center mx-auto">
                        <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                            Films, Séries et animés !
                        </p>

                        <div className="mt-5 max-w-2xl">
                            <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                                Bienvenue sur MyCenter
                            </h1>
                        </div>

                        <div className="mt-5 max-w-3xl mb-5">
                            <p className="text-lg text-gray-600 dark:text-gray-400">MyCenter est un site qui regroupe toute les réferences cinématographique, de séries télévisées et d&apos;animés</p>
                        </div>

                        <input type="text" className="text-center text-white shadow-sm focus:shadow-xl py-3 px-4 block w-full border-slate-300 border-2 rounded-full text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Transformers, Friends, Jujutsu Kaisen, ..." />
                    </div>
                </div>
            </div>
        </div>
        // <div className="bg-slate-900 relative">
        //     <div className="bg-gradient-to-b from-blue-600/[.15] via-transparent">
        //         <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-8">
        //             <div className="flex justify-center">
        //                 <a className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md" href="../figma.html">
        //                     <p className="mr-2 inline-block text-white text-sm">
        //                         Preline UI Figma is live.
        //                     </p>
        //                     <span className="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
        //                         <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
        //                             <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        //                         </svg>
        //                     </span>
        //                 </a>
        //             </div>
        //             <div className="max-w-3xl text-center mx-auto">
        //                 <h1 className="block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        //                     Now its easier than ever to build products
        //                 </h1>
        //             </div>

        //             <div className="max-w-3xl text-center mx-auto">
        //                 <p className="text-lg text-gray-400">Preline is a large open-source project, crafted with Tailwind CSS framework by Hmlstream.</p>
        //             </div>

        //             <div className="text-center">
        //                 <a className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800" href="#">
        //                     Get started
        //                     <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
        //                         <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        //                     </svg>
        //                 </a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}