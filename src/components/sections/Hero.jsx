import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, MapPin, Code, Coffee } from 'lucide-react';
import Button from '../common/Button';

const Hero = () => {
    const [currentRole, setCurrentRole] = useState(0);

    const roles = ['Full Stack Developer', 'Frontend Developer', 'Backend Developer', 'Product-minded Coder'];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2800);
        return () => clearInterval(interval);
    }, [roles.length]);

    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_20%_20%,#dbeafe,transparent_36%),radial-gradient(circle_at_80%_0%,#dcfce7,transparent_34%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] pt-24 dark:bg-[radial-gradient(circle_at_20%_20%,#0c4a6e40,transparent_36%),radial-gradient(circle_at_80%_0%,#14532d40,transparent_34%),linear-gradient(to_bottom,#020617,#0f172a)]"
        >
            <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
                <div>
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/80 px-4 py-1 text-sm font-medium text-slate-700 backdrop-blur dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
                        <MapPin className="h-4 w-4 text-sky-600 dark:text-sky-400" /> Viet Nam
                    </div>

                    <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-5xl dark:text-white">
                        Xin chao, tôi là <span className="text-sky-600 dark:text-sky-400">Nguyễn Tấn Cao Hào</span>
                    </h1>

                    <div className="mt-4 h-8 overflow-hidden text-lg font-medium text-slate-600 sm:text-2xl dark:text-slate-300">
                        <div className="transition-transform duration-500" style={{ transform: `translateY(-${currentRole * 32}px)` }}>
                            {roles.map((role) => (
                                <p key={role} className="h-8">
                                    {role}
                                </p>
                            ))}
                        </div>
                    </div>

                    <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                        Tôi xây ứng dụng web nhanh, đẹp và bền vững. Tiếp cận theo hướng sản phẩm,
                        tôi tối ưu trải nghiệm người dùng và khả năng mở rộng trong từng sprint.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <Button href="#projects" size="lg">
                            Xem dự án
                        </Button>
                        <Button href="#contact" variant="outline" size="lg">
                            Liên hệ ngay
                        </Button>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-8 text-sm">
                        <div>
                            <p className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
                                <Code className="h-6 w-6 text-sky-600 dark:text-sky-400" /> 50+
                            </p>
                            <p className="text-slate-600 dark:text-slate-300">Dự án</p>
                        </div>
                        <div>
                            <p className="flex items-center gap-2 text-2xl font-bold text-slate-900 dark:text-white">
                                <Coffee className="h-6 w-6 text-sky-600 dark:text-sky-400" /> 1000+
                            </p>
                            <p className="text-slate-600 dark:text-slate-300">Số giờ code</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-slate-900 dark:text-white">+</p>
                            <p className="text-slate-600 dark:text-slate-300">Năm kinh nghiệm</p>
                        </div>
                    </div>

                    <div className="mt-8 flex items-center gap-4">
                        {[{ icon: Github, href: '#' }, { icon: Linkedin, href: '#' }, { icon: Mail, href: '#' }].map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="rounded-full border border-slate-300 bg-white p-3 text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-500 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-400"
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-md">
                    <div className="aspect-square rounded-3xl bg-[linear-gradient(140deg,#0ea5e9,#22c55e)] p-[2px] shadow-xl shadow-sky-500/20">
                        <div className="flex h-full items-center justify-center rounded-3xl bg-slate-100 text-7xl font-bold text-slate-400 dark:bg-slate-900 dark:text-slate-600">
                            YC
                        </div>
                    </div>
                    <div className="absolute -right-5 -top-5 h-20 w-30 rounded-2xl bg-white p-4 shadow-lg dark:bg-slate-900">
                        <p className="text-xs text-slate-500 dark:text-slate-400">Stack</p>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">React + Node</p>
                    </div>
                </div>
            </div>

            <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 dark:text-slate-400">
                <ChevronDown className="h-6 w-6 animate-bounce" />
            </a>
        </section>
    );
};

export default Hero;