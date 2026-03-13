import { useState, useEffect } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import Button from '../common/Button';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        setIsDarkMode(document.documentElement.classList.contains('dark'));

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 24);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Trang chủ', href: '#home' },
        { name: 'Giới thiệu', href: '#about' },
        { name: 'Ky nang', href: '#skills' },
        { name: 'Du an', href: '#projects' },
        { name: 'Kinh nghiem', href: '#experience' },
        { name: 'Lien he', href: '#contact' },
    ];

    const toggleDarkMode = () => {
        const next = !isDarkMode;
        setIsDarkMode(next);
        document.documentElement.classList.toggle('dark', next);
    };

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${isScrolled
                ? 'border-slate-200/80 bg-white/85 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/80'
                : 'border-transparent bg-transparent'
                }`}
        >
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
                <a href="#home" className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Port<span className="text-sky-600 dark:text-sky-400">folio</span>
                </a>

                <nav className="hidden items-center gap-7 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-slate-700 transition-colors hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-400"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2 sm:gap-3">
                    <button
                        onClick={toggleDarkMode}
                        className="rounded-xl p-2 text-slate-600 transition hover:bg-slate-200/70 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                        aria-label="Toggle dark mode"
                    >
                        {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    </button>

                    <Button href="/resume.pdf" className="hidden sm:inline-flex" size="sm">
                        <Download className="h-4 w-4" />
                        Tai CV
                    </Button>

                    <button
                        className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-200 md:hidden dark:text-slate-200 dark:hover:bg-slate-800"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label="Toggle mobile menu"
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="border-t border-slate-200 bg-white/95 backdrop-blur md:hidden dark:border-slate-800 dark:bg-slate-950/95">
                    <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6 lg:px-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="rounded-lg px-2 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-sky-600 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-sky-400"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <a href="/resume.pdf" download>
                            <Button className="mt-2 w-full" size="sm">
                                <Download className="h-4 w-4" />
                                Tải CV
                            </Button>
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;