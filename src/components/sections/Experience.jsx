import { MapPin, Calendar, ExternalLink } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: 'Senior Full Stack Developer',
            company: 'Tech Innovation Corp',
            location: 'TP. Hồ Chí Minh',
            duration: '2023 - Hiện tại',
            type: 'Full-time',
            description: 'Phát triển và maintain các ứng dụng web scale lớn phục vụ hàng triệu users. Chịu trách nhiệm chính trong việc migrate legacy systems sang architecture hiện đại.',
            achievements: [
                'Tăng performance ứng dụng lên 40% thông qua code optimization',
                'Lead team 5 developers trong dự án migration microservices',
                'Implement CI/CD pipeline giảm deployment time 60%',
                'Mentor 3 junior developers và conduct tech interviews'
            ],
            technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL', 'Redis'],
            website: 'https://techinnovation.com'
        },
        {
            id: 2,
            role: 'Full Stack Developer',
            company: 'Digital Solutions Ltd',
            location: 'Hà Nội',
            duration: '2021 - 2023',
            type: 'Full-time',
            description: 'Phát triển các solution tùy chỉnh cho khách hàng enterprise. Tham gia complete project lifecycle từ requirements analysis đến deployment và maintenance.',
            achievements: [
                'Delivered 15+ projects on-time với 100% client satisfaction',
                'Reduce bugs in production 50% thông qua comprehensive testing',
                'Develop custom CMS được sử dụng bởi 20+ clients',
                'Establish best practices cho code review và documentation'
            ],
            technologies: ['Vue.js', 'Laravel', 'MySQL', 'JavaScript', 'TailwindCSS'],
            website: 'https://digitalsolutions.com'
        },
        {
            id: 3,
            role: 'Frontend Developer',
            company: 'Creative Agency Pro',
            location: 'Remote',
            duration: '2020 - 2021',
            type: 'Contract',
            description: 'Chuyên focus vào development các website creative và interactive cho brands lớn. Collaborate chặt chẽ với designers để bring creative visions thành reality.',
            achievements: [
                'Build 25+ responsive websites với perfect pixel accuracy',
                'Implement complex animations tăng user engagement 35%',
                'Optimize websites đạt 95+ Google PageSpeed score',
                'Work với các brands như Nike Vietnam, Samsung, VinGroup'
            ],
            technologies: ['React', 'GSAP', 'Three.js', 'Sass', 'Webpack'],
            website: 'https://creativeagency.com'
        },
        {
            id: 4,
            role: 'Junior Web Developer',
            company: 'StartUp Hub',
            location: 'TP. Hồ Chí Minh',
            duration: '2019 - 2020',
            type: 'Full-time',
            description: 'Bắt đầu career trong startup environment năng động. Learn rất nhiều về agile development, startup culture, và rapid prototyping.',
            achievements: [
                'Contribute vào 8 different products trong startup ecosystem',
                'Build MVP cho 3 products đã raise được Series A funding',
                'Self-taught React và become React specialist của team',
                'Active participant trong tech talks và knowledge sharing sessions'
            ],
            technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Git'],
            website: 'https://startuphub.vn'
        }
    ];

    const education = [
        {
            degree: 'Cử nhân Công nghệ Thông tin (Việt - Nhật)',
            school: 'Trường Đại học Công nghệ Thông tin ĐHQG TP.HCM',
            duration: '2022 - 2026',
            description: 'GPA: 3.0/4.0. Specialized trong Software Engineering và Web Technologies.',
            achievements: [
            ]
        },
        {
            degree: 'Chứng chỉ Chuyên gia',
            school: 'AWS Certified Solutions Architect',
            duration: '2022',
            description: 'Advanced certification trong cloud architecture và deployment strategies.',
            achievements: []
        }
    ];

    const ExperienceCard = ({ experience, index }) => (
        <div className="relative pb-10 pl-8 last:pb-0" style={{ animationDelay: `${index * 90}ms` }}>
            <div className="absolute bottom-0 left-0 top-0 w-px bg-slate-300 dark:bg-slate-700" />
            <div className="absolute left-0 top-2 h-4 w-4 -translate-x-1.5 rounded-full border-2 border-white bg-sky-600 dark:border-slate-950 dark:bg-sky-400" />

            <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">{experience.role}</h3>
                        <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-sky-600 dark:text-sky-400">
                            {experience.company}
                            {experience.website && (
                                <a href={experience.website} className="text-slate-500 transition hover:text-sky-600 dark:text-slate-400 dark:hover:text-sky-400">
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            )}
                        </p>
                    </div>

                    <div className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                        <p className="flex items-center gap-2"><Calendar className="h-4 w-4" /> {experience.duration}</p>
                        <p className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {experience.location}</p>
                        <span className="inline-flex rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                            {experience.type}
                        </span>
                    </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{experience.description}</p>

                <div className="mb-4">
                    <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">Thanh tich chinh</h4>
                    <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-300">
                        {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <span className="mt-1 text-sky-600 dark:text-sky-400">•</span>
                                <span>{achievement}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, idx) => (
                        <span key={idx} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                            {tech}
                        </span>
                    ))}
                </div>
            </article>
        </div>
    );

    return (
        <section id="experience" className="bg-slate-50 py-24 dark:bg-slate-900">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                        Kinh nghiệm <span className="text-sky-600 dark:text-sky-400">thực tế</span>
                    </h2>
                    <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-300">
                        Quá trình học tập, phát triển bản thân và những giá trị đã đóng góp trong từng vai trò.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <h3 className="mb-8 text-2xl font-bold text-slate-900 dark:text-white">
                            Dự án đã tham gia
                        </h3>
                        <div className="relative">
                            {experiences.map((experience, index) => (
                                <ExperienceCard key={experience.id} experience={experience} index={index} />
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                            <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">
                                Hoc van
                            </h3>
                            <div className="space-y-6">
                                {education.map((edu, index) => (
                                    <div key={index} className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0 dark:border-slate-800">
                                        <h4 className="mb-1 font-semibold text-slate-900 dark:text-white">
                                            {edu.degree}
                                        </h4>
                                        <p className="mb-1 text-sky-600 dark:text-sky-400">{edu.school}</p>
                                        <p className="mb-2 text-sm text-slate-600 dark:text-slate-400">{edu.duration}</p>
                                        <p className="mb-2 text-sm text-slate-600 dark:text-slate-300">{edu.description}</p>
                                        {edu.achievements.length > 0 && (
                                            <ul className="space-y-1 text-xs text-slate-600 dark:text-slate-400">
                                                {edu.achievements.map((achievement, idx) => (
                                                    <li key={idx}>• {achievement}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl bg-gradient-to-br from-sky-600 to-emerald-500 p-6 text-white">
                            <h3 className="mb-6 text-xl font-bold">Thống kê</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span>Số năm kinh nghiệm</span>
                                    <span className="font-bold">3+ tháng</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Số công ty đã làm</span>
                                    <span className="font-bold">1 công ty</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Dự án đã tham gia</span>
                                    <span className="font-bold">5 dự án</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span>Team size lớn nhất</span>
                                    <span className="font-bold">5 thành viên</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                            <h3 className="mb-6 text-xl font-bold text-slate-900 dark:text-white">Phát triển kỹ năng</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm text-slate-600 dark:text-slate-400">Technical Leadership</span>
                                        <span className="text-sm font-medium">0%</span>
                                    </div>
                                    <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800">
                                        <div className="h-2 rounded-full bg-sky-600 dark:bg-sky-400" style={{ width: '0%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm text-slate-600 dark:text-slate-400">Project Management</span>
                                        <span className="text-sm font-medium">0%</span>
                                    </div>
                                    <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800">
                                        <div className="h-2 rounded-full bg-sky-600 dark:bg-sky-400" style={{ width: '0%' }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between mb-2">
                                        <span className="text-sm text-slate-600 dark:text-slate-400">Mentoring</span>
                                        <span className="text-sm font-medium">50%</span>
                                    </div>
                                    <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-slate-800">
                                        <div className="h-2 rounded-full bg-sky-600 dark:bg-sky-400" style={{ width: '50%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;