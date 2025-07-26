"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useDarkMode } from "../context/darkmodecontext";

export const Header = () => {
    const pathname = usePathname();
    const { darkMode, toggleDarkMode } = useDarkMode();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const menuItems = [
        {
            href: "/",
            label: "Home",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                    className="h-5 w-5 md:h-6 md:w-6"
                >
                    <path d="M15.833 7.258 11.39 3.802a2.222 2.222 0 0 0-2.728 0L4.216 7.258a2.22 2.22 0 0 0-.858 1.754v6a1.667 1.667 0 0 0 1.667 1.667h10a1.667 1.667 0 0 0 1.667-1.666v-6c0-.686-.317-1.334-.859-1.755Z" />
                    <path d="M13.333 12.5c-1.841 1.11-4.826 1.11-6.667 0" />
                </svg>
            )
        },
        {
            href: "/about",
            label: "About",
            icon: (
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                    className="h-5 w-5 md:h-6 md:w-6"
                >
                    <path d="M10.5 10.833a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M10.5 2.5c6 0 7.5 1.5 7.5 7.5s-1.5 7.5-7.5 7.5S3 16 3 10s1.5-7.5 7.5-7.5Z" />
                    <path d="M5.5 16.708v-.041a3.333 3.333 0 0 1 3.333-3.334h3.334a3.333 3.333 0 0 1 3.333 3.334v.041" />
                </svg>
            )
        },
        {
            href: "/services",
            label: "Services",
            icon: (
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.2" 
                    className="h-5 w-5 md:h-6 md:w-6"
                >
                    <path d="M10.5 3.333 3.833 6.667 10.5 10l6.667-3.333L10.5 3.333ZM3.833 10l6.667 3.333L17.167 10M3.833 13.333l6.667 3.334 6.667-3.334" />
                </svg>
            )
        },
        {
            href: "/portfolio",
            label: "Works",
            icon: (
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.2" 
                    className="h-5 w-5 md:h-6 md:w-6"
                >
                    <path d="m3.503 5.998 5.949-2.591a.8.8 0 0 1 1.058.439l4.103 9.918a.834.834 0 0 1-.428 1.087l-5.948 2.59a.8.8 0 0 1-1.059-.438l-4.103-9.92a.833.833 0 0 1 .428-1.085ZM13 3.333h.833a.833.833 0 0 1 .834.834v2.916M17.167 5c.22.093.433.18.64.263a.833.833 0 0 1 .442 1.092l-1.915 4.478" />
                </svg>
            )
        },
        {
            href: "/blog",
            label: "Blog",
            icon: (
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.2" 
                    className="h-5 w-5 md:h-6 md:w-6"
                >
                    <path d="m14.667 9.167 1.25-1.25a2.357 2.357 0 1 0-3.333-3.334l-8.75 8.75v3.334h3.333L8.834 15m2.916-9.583 3.333 3.333m.417 9.583 2.792-2.736a1.785 1.785 0 0 0 .004-2.56 1.87 1.87 0 0 0-2.608-.005l-.186.184-.186-.184a1.869 1.869 0 0 0-2.607-.005 1.787 1.787 0 0 0-.005 2.56l2.796 2.746Z" />
                </svg>
            )
        },
        {
            href: "/contact",
            label: "Contact",
            icon: (
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.2" 
                    className="h-5 w-5 md:h-6 md:w-6"
                >
                    <path d="M6.667 7.5h6.666m-6.666 3.333h5M15 3.333a2.5 2.5 0 0 1 2.5 2.5V12.5A2.5 2.5 0 0 1 15 15h-4.167l-4.166 2.5V15H5a2.5 2.5 0 0 1-2.5-2.5V5.833a2.5 2.5 0 0 1 2.5-2.5h10Z" />
                </svg>
            )
        }
    ];

    return (
        <>
            <header className="sticky top-0 z-50">
                <div className="p-2 md:p-4">
                    <div className="flex items-center justify-between rounded-xl md:rounded-2xl bg-white/95 backdrop-blur-sm p-2 md:p-3 shadow-lg dark:bg-black/95 dark:shadow-dark dark:border-b-primary dark:border-b-[0.5px] dark:border-opacity-50">
                        {/* Logo */}
                        <Link href="/" className="inline-flex items-center gap-2 md:gap-3 px-2 md:px-3 text-lg md:text-2xl font-semibold text-dark dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-5 w-5 md:h-6 md:w-6">
                                <path fill="currentColor" d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z" />
                            </svg>
                            <span className="hidden sm:block">
                                My<span className="text-purple-600 dark:text-purple-400">Folio</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex flex-1 justify-center">
                            <ul className="flex items-center space-x-1">
                                {menuItems.map((item) => (
                                    <li key={item.href} className="group">
                                        <Link
                                            href={item.href}
                                            className={`group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-sm font-medium transition-all duration-200 ${
                                                pathname === item.href
                                                    ? 'text-black bg-gray-100 dark:text-purple-400 dark:bg-gray-800'
                                                    : 'text-gray-600 hover:text-black hover:bg-gray-50 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800'
                                            }`}
                                            onClick={closeMobileMenu}
                                        >
                                            {item.icon}
                                            <span>{item.label}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        {/* Desktop Actions */}
                        <div className="hidden lg:flex items-center gap-3">
                            {/* Fahmi Nabeel Text - Desktop */}
                            <div className="mr-2">
                                <span className="text-lg xl:text-xl font-bold bg-gradient-to-r from-slate-800 via-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-slate-200 dark:via-purple-400 dark:to-blue-400 tracking-wide">
                                    Fahmi Nabeel
                                </span>
                            </div>

                            {/* Dark Mode Toggle */}
                            <button
                                type="button"
                                onClick={toggleDarkMode}
                                className="group flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                                aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                            >
                                {darkMode ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        className="h-5 w-5"
                                    >
                                        <path d="M10 15.833a.833.833 0 0 1 .828.736l.005.098v.833a.833.833 0 0 1-1.66.097l-.006-.097v-.833a.833.833 0 0 1 .833-.834Zm5.26-1.741.08.069.582.583a.833.833 0 0 1-1.1 1.248l-.078-.07-.583-.583a.833.833 0 0 1 1.015-1.306l.085.059Zm-9.42.068a.833.833 0 0 1 .068 1.1l-.069.08-.583.582a.833.833 0 0 1-1.248-1.1l.07-.078.583-.583a.833.833 0 0 1 1.178 0ZM3.333 9.167a.833.833 0 0 1 .098 1.66l-.098.006H2.5a.833.833 0 0 1-.098-1.66l.098-.006h.833Zm14.167 0a.833.833 0 0 1 .098 1.66l-.098.006h-.833a.833.833 0 0 1-.098-1.66l.098-.006h.833ZM5.178 4.008l.078.07.583.583a.833.833 0 0 1-1.1 1.247l-.078-.069-.583-.583A.833.833 0 0 1 5.092 3.95l.086.058Zm10.744.069a.833.833 0 0 1 .07 1.1l-.07.079-.583.583a.833.833 0 0 1-1.247-1.1l.069-.078.583-.584a.833.833 0 0 1 1.178 0ZM10 1.667a.833.833 0 0 1 .828.736l.005.097v.833a.833.833 0 0 1-1.66.098l-.006-.098V2.5A.833.833 0 0 1 10 1.667Zm0 4.166a4.167 4.167 0 1 1-4.163 4.348L5.833 10l.004-.18A4.167 4.167 0 0 1 10 5.832Z" />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        className="h-5 w-5"
                                    >
                                        <path d="M11.8 3a8.656 8.656 0 0 0-4.523 1.28A8.918 8.918 0 0 0 4.04 7.756a9.167 9.167 0 0 0 .44 9.24 8.863 8.863 0 0 0 3.553 3.137 8.633 8.633 0 0 0 4.624.824 8.69 8.69 0 0 0 4.381-1.723 8.973 8.973 0 0 0 2.892-3.78c.3-.738-.419-1.48-1.142-1.179a5.604 5.604 0 0 1-3.892.15 5.74 5.74 0 0 1-3.083-2.431 5.956 5.956 0 0 1-.848-3.886c.17-1.357.8-2.61 1.78-3.541l.069-.072c.485-.567.099-1.488-.668-1.488h-.234l-.06-.005L11.8 3Z" />
                                    </svg>
                                )}
                            </button>

                            {/* CTA Button */}
                            <Link 
                                href="/contact" 
                                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:from-purple-700 hover:to-blue-700 hover:shadow-lg"
                            >
                                <span>Let's Talk</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-4 w-4">
                                    <path d="M17.5 11.667v-5h-5" />
                                    <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
                                </svg>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="flex items-center gap-2 lg:hidden">
                            {/* Fahmi Nabeel Text - Mobile */}
                            <div className="flex-1 text-center sm:text-right">
                                <span className="text-sm sm:text-lg md:text-xl font-bold bg-gradient-to-r from-slate-800 via-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-slate-200 dark:via-purple-400 dark:to-blue-400 tracking-wide">
                                    Fahmi Nabeel
                                </span>
                            </div>

                            {/* Mobile Dark Mode Toggle */}
                            <button
                                type="button"
                                onClick={toggleDarkMode}
                                className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                                aria-label={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                            >
                                {darkMode ? (
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 15.833a.833.833 0 0 1 .828.736l.005.098v.833a.833.833 0 0 1-1.66.097l-.006-.097v-.833a.833.833 0 0 1 .833-.834Z" />
                                    </svg>
                                ) : (
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M11.8 3a8.656 8.656 0 0 0-4.523 1.28A8.918 8.918 0 0 0 4.04 7.756a9.167 9.167 0 0 0 .44 9.24 8.863 8.863 0 0 0 3.553 3.137Z" />
                                    </svg>
                                )}
                            </button>

                            <button
                                type="button"
                                onClick={toggleMobileMenu}
                                className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                                aria-label="Toggle navigation"
                            >
                                {isMobileMenuOpen ? (
                                    <svg className="h-5 w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
                    onClick={closeMobileMenu}
                />
            )}

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 z-50 h-full w-72 transform bg-white/95 backdrop-blur-md shadow-2xl transition-transform duration-300 ease-in-out dark:bg-black/95 lg:hidden ${
                isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className="flex flex-col h-full">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex flex-col">
                            <Link href="/" className="inline-flex items-center gap-2 text-lg font-semibold text-dark dark:text-white" onClick={closeMobileMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-5 w-5">
                                    <path fill="currentColor" d="M0 1.5A1.5 1.5 0 0 1 1.5 0H9a1.5 1.5 0 0 1 1.5 1.5v21A1.5 1.5 0 0 1 9 24H1.5A1.5 1.5 0 0 1 0 22.5v-21Zm13.5 0A1.5 1.5 0 0 1 15 0h7.5A1.5 1.5 0 0 1 24 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9V1.5Zm0 13.5a1.5 1.5 0 0 1 1.5-1.5h7.5A1.5 1.5 0 0 1 24 15v7.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z" />
                                </svg>
                                My<span className="text-purple-600 dark:text-purple-400">Folio</span>
                            </Link>
                            <span className="text-sm font-semibold bg-gradient-to-r from-slate-700 via-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-slate-300 dark:via-purple-400 dark:to-blue-400 mt-1">
                                Fahmi Nabeel
                            </span>
                        </div>
                        <button
                            onClick={closeMobileMenu}
                            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-600 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                        >
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Items */}
                    <nav className="flex-1 p-4">
                        <ul className="space-y-2">
                            {menuItems.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        href={item.href}
                                        className={`flex items-center gap-3 rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 ${
                                            pathname === item.href
                                                ? 'text-purple-600 bg-purple-50 dark:text-purple-400 dark:bg-purple-900/20'
                                                : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50 dark:text-gray-300 dark:hover:text-purple-400 dark:hover:bg-purple-900/20'
                                        }`}
                                        onClick={closeMobileMenu}
                                    >
                                        {item.icon}
                                        <span>{item.label}</span>
                                        {pathname === item.href && (
                                            <div className="ml-auto h-2 w-2 rounded-full bg-purple-600 dark:bg-purple-400" />
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Menu Footer */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                        <Link 
                            href="/contact" 
                            className="flex items-center justify-center gap-2 w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-3 text-base font-semibold text-white transition-all duration-200 hover:from-purple-700 hover:to-blue-700"
                            onClick={closeMobileMenu}
                        >
                            <span>Let's Talk</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" className="h-4 w-4">
                                <path d="M17.5 11.667v-5h-5" />
                                <path d="m17.5 6.667-7.5 7.5-7.5-7.5" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};