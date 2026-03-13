import { useState } from 'react';

const Skills = () => {
    const [activeCategory, setActiveCategory] = useState('frontend');

    const skillCategories = {
        frontend: {
            title: 'Frontend',
            skills: [
                { name: 'React', level: 95, icon: '⚛️' },
                { name: 'Vue.js', level: 85, icon: '💚' },
                { name: 'JavaScript/TypeScript', level: 90, icon: '🟨' },
                { name: 'HTML/CSS', level: 95, icon: '🎨' },
                { name: 'TailwindCSS', level: 90, icon: '🌊' },
                { name: 'Next.js', level: 85, icon: '⚡' }
            ]
        },
        backend: {
            title: 'Backend',
            skills: [
                { name: 'Node.js', level: 90, icon: '🟢' },
                { name: 'Express.js', level: 85, icon: '🚀' },
                { name: 'NestJS', level: 80, icon: '🏠' },
                { name: 'Python/Django', level: 75, icon: '🐍' },
                { name: 'PHP/Laravel', level: 70, icon: '🐘' },
                { name: 'GraphQL/REST API', level: 85, icon: '📡' }
            ]
        },
        database: {
            title: 'Database',
            skills: [
                { name: 'MongoDB', level: 85, icon: '🍃' },
                { name: 'MySQL/PostgreSQL', level: 80, icon: '🗄️' },
                { name: 'Redis', level: 75, icon: '⚡' },
                { name: 'Firebase', level: 80, icon: '🔥' },
                { name: 'Prisma ORM', level: 85, icon: '🔷' },
                { name: 'Elasticsearch', level: 70, icon: '🔍' }
            ]
        },
        tools: {
            title: 'Tools & Others',
            skills: [
                { name: 'Git/GitHub', level: 90, icon: '📦' },
                { name: 'Docker', level: 80, icon: '🐳' },
                { name: 'AWS/Cloud', level: 75, icon: '☁️' },
                { name: 'Figma', level: 85, icon: '🎨' },
                { name: 'Jest/Testing', level: 80, icon: '🧪' },
                { name: 'CI/CD', level: 75, icon: '🔄' }
            ]
        }
    };

    const SkillBar = ({ skill }) => (
        <div>
            <div className="mb-2 flex items-center justify-between">
                <p className="flex items-center gap-2 text-sm font-medium text-slate-800 dark:text-slate-100">
                    <span className="text-base">{skill.icon}</span>
                    {skill.name}
                </p>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{skill.level}%</span>
            </div>
            <div className="h-2.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
                <div
                    className="h-full rounded-full bg-gradient-to-r from-sky-600 to-emerald-500"
                    style={{ width: `${skill.level}%` }}
                />
            </div>
        </div>
    );

    return (
        <section id="skills" className="bg-slate-50 py-24 dark:bg-slate-900">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                        Ky nang & <span className="text-sky-600 dark:text-sky-400">Cong nghe</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                        Bo ky nang toi dung de dua y tuong vao san pham production-ready.
                    </p>
                </div>

                <div className="mb-12 flex flex-wrap justify-center rounded-2xl border border-slate-200 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-950">
                    {Object.entries(skillCategories).map(([key, category]) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={`rounded-xl px-5 py-2.5 text-sm font-medium transition ${activeCategory === key
                                ? 'bg-sky-600 text-white'
                                : 'text-slate-600 hover:bg-slate-100 hover:text-sky-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-sky-400'
                                }`}
                        >
                            {category.title}
                        </button>
                    ))}
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950">
                        <h3 className="mb-6 text-2xl font-semibold text-slate-900 dark:text-white">
                            {skillCategories[activeCategory].title}
                        </h3>
                        <div className="space-y-6">
                            {skillCategories[activeCategory].skills.map((skill, index) => (
                                <SkillBar key={`${activeCategory}-${index}`} skill={skill} />
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950">
                        <h3 className="mb-6 text-center text-xl font-semibold text-slate-900 dark:text-white">
                            Tong quan ky nang
                        </h3>

                        <div className="grid grid-cols-2 gap-6">
                            {skillCategories[activeCategory].skills.slice(0, 4).map((skill, index) => (
                                <div key={index} className="text-center">
                                    <div className="relative w-20 h-20 mx-auto mb-3">
                                        <svg className="w-20 h-20 transform -rotate-90" viewBox="0 0 36 36">
                                            <path
                                                d="M18 2.0845
                           a 15.9155 15.9155 0 0 1 0 31.831
                           a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke="#cbd5e1"
                                                strokeWidth="2"
                                                className="dark:stroke-slate-700"
                                                strokeDasharray="100, 100"
                                            />
                                            <path
                                                d="M18 2.0845
                           a 15.9155 15.9155 0 0 1 0 31.831
                           a 15.9155 15.9155 0 0 1 0 -31.831"
                                                fill="none"
                                                stroke="#0284c7"
                                                className="dark:stroke-sky-400"
                                                strokeWidth="2"
                                                strokeDasharray={`${skill.level}, 100`}
                                            />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center text-lg">
                                            {skill.icon}
                                        </div>
                                    </div>
                                    <p className="text-sm font-medium text-slate-900 dark:text-white">
                                        {skill.name}
                                    </p>
                                    <p className="text-xs text-slate-600 dark:text-slate-400">
                                        {skill.level}%
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
                            <h4 className="mb-4 font-semibold text-slate-900 dark:text-white">Thong ke vui</h4>
                            <div className="grid grid-cols-3 gap-4 text-center">
                                <div>
                                    <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">15+</div>
                                    <div className="text-xs text-slate-600 dark:text-slate-400">Cong nghe</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">5+</div>
                                    <div className="text-xs text-slate-600 dark:text-slate-400">Frameworks</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-sky-600 dark:text-sky-400">10+</div>
                                    <div className="text-xs text-slate-600 dark:text-slate-400">Tools</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-950">
                    <h3 className="mb-6 text-center text-2xl font-semibold text-slate-900 dark:text-white">
                        Dang hoc & Chung chi
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="mb-4 text-lg font-medium text-slate-900 dark:text-white">
                                Hien tai dang hoc
                            </h4>
                            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                                <li>Machine Learning voi Python</li>
                                <li>• Microservices Architecture</li>
                                <li>• Web3 & Blockchain Development</li>
                                <li>• Advanced React Patterns</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="mb-4 text-lg font-medium text-slate-900 dark:text-white">
                                Chung chi
                            </h4>
                            <ul className="space-y-2 text-slate-600 dark:text-slate-300">
                                <li>AWS Certified Developer</li>
                                <li>• Google Cloud Professional</li>
                                <li>• MongoDB Certified Developer</li>
                                <li>• Meta React Developer</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;