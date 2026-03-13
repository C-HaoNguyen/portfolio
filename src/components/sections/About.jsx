import { User, Target, Award, Heart } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: User,
            title: 'Tác phong',
            description: 'Làm việc rõ ràng, đúng deadline và communication minh bạch.',
        },
        {
            icon: Target,
            title: 'Tập trung kết quả',
            description: 'Mỗi sprint đều có metric (số liệu) và mục tiêu cụ thể.',
        },
        {
            icon: Award,
            title: 'Chất lượng code',
            description: 'Tối ưu hiệu năng, dễ maintain và dễ mở rộng.',
        },
        {
            icon: Heart,
            title: 'Đam mê công nghệ',
            description: 'Liên tục cập nhật xu hướng công nghệ và kỹ thuật mới.',
        },
    ];

    return (
        <section id="about" className="bg-white py-24 dark:bg-slate-950">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">
                        Gioi thieu ve <span className="text-sky-600 dark:text-sky-400">ban than</span>
                    </h2>
                    <p className="mt-4 text-base text-slate-600 sm:text-lg dark:text-slate-300">
                        Hanh trinh tu y tuong den san pham, tu prototyping den production.
                    </p>
                </div>

                <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
                    <div className="space-y-5 text-slate-600 dark:text-slate-300">
                        <p className="text-lg leading-relaxed">
                            Toi la Full Stack Developer voi {new Date().getFullYear() - 2020}+ nam kinh nghiem,
                            tap trung vao React, Node.js va toi uu hieu nang frontend.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Dieu quan trong voi toi la xay dung mot san pham can bang giua code quality, toc do release
                            va trai nghiem nguoi dung.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Ngoai gio lam, toi nghien cuu cong nghe moi, doc tai lieu he thong va chia se kinh nghiem
                            qua cac buoi mentoring.
                        </p>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Thong tin nhanh</h3>
                            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                                <p><span className="text-slate-500">Dia diem:</span> Viet Nam</p>
                                <p><span className="text-slate-500">Kinh nghiem:</span> {new Date().getFullYear() - 2020}+ nam</p>
                                <p><span className="text-slate-500">Email:</span> your.email@domain.com</p>
                                <p><span className="text-slate-500">Ngon ngu:</span> Vietnamese, English</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {highlights.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <article
                                    key={item.title}
                                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-400 dark:border-slate-800 dark:bg-slate-900"
                                >
                                    <IconComponent className="h-6 w-6 text-sky-600 dark:text-sky-400" />
                                    <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.description}</p>
                                </article>
                            );
                        })}

                        <article className="rounded-2xl bg-gradient-to-br from-sky-600 to-emerald-500 p-6 text-white sm:col-span-2">
                            <h3 className="text-lg font-semibold">Thanh tuu</h3>
                            <ul className="mt-3 space-y-2 text-sm">
                                <li>50+ du an da trien khai.</li>
                                <li>Khach hang quay lai sau moi release lon.</li>
                                <li>Dong gop open source va chia se noi bo dinh ky.</li>
                            </ul>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;