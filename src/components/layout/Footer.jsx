import { Heart, ArrowUp, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Trang chủ', href: '#home' },
        { name: 'Giới thiệu', href: '#about' },
        { name: 'Kỹ năng', href: '#skills' },
        { name: 'Dự án', href: '#projects' },
        { name: 'Kinh nghiệm', href: '#experience' },
        { name: 'Liên hệ', href: '#contact' },
    ];

    const socialLinks = [
        { icon: Github, name: 'GitHub', url: 'https://github.com/C-HaoNguyen' },
        { icon: Linkedin, name: 'LinkedIn', url: 'https://www.linkedin.com/in/nguyentancaohao' },
        { icon: Mail, name: 'Email', url: 'haolq0711@gmail.com' },
    ];

    return (
        <footer className="relative border-t border-slate-200 bg-white py-16 dark:border-slate-800 dark:bg-slate-950">
            <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                        Port<span className="text-sky-600 dark:text-sky-400">folio</span>
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        Full Stack Developer tạo ra sản phẩm web tinh gọn, nhanh và dễ scale.
                    </p>
                    <div className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                        <p className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-sky-600 dark:text-sky-400" /> TP. Hồ Chí Minh, Việt Nam
                        </p>
                        <p className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-sky-600 dark:text-sky-400" /> haolq0711@gmail.com
                        </p>
                    </div>
                </div>

                <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Điều hướng</h4>
                    <ul className="mt-4 space-y-2 text-sm">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className="text-slate-600 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Dịch vụ</h4>
                    <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                        <li>Website Development</li>
                        <li>UI/UX Implementation</li>
                        <li>Backend API</li>
                        <li>Performance Tuning</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">Kết nối</h4>
                    <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
                        Sẵn sàng hợp tác với các dự án freelance và full-time.
                    </p>
                    <div className="mt-4 flex gap-3">
                        {socialLinks.map((social) => {
                            const IconComponent = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    title={social.name}
                                    className="rounded-lg border border-slate-300 p-2 text-slate-700 transition hover:border-sky-500 hover:text-sky-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-400"
                                >
                                    <IconComponent className="h-5 w-5" />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="mx-auto mt-10 flex w-full max-w-6xl flex-col items-center justify-between gap-4 border-t border-slate-200 px-4 pt-6 text-sm sm:flex-row sm:px-6 lg:px-8 dark:border-slate-800">
                <p className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
                    © {currentYear} Portfolio. Made with by Nguyen Tan Cao Hao.
                </p>
                <button
                    onClick={scrollToTop}
                    className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-3 py-2 font-medium text-white transition hover:bg-sky-700"
                >
                    <ArrowUp className="h-4 w-4" /> Back to top
                </button>
            </div>
        </footer>
    );
};

export default Footer;