import { useState } from 'react';
import { ExternalLink, Github, Eye, Filter } from 'lucide-react';
import Button from '../common/Button';

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [visibleProjects, setVisibleProjects] = useState(6);

    const projects = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'Ứng dụng thương mại điện tử full-stack với React, Node.js, và MongoDB. Hỗ trợ thanh toán online, quản lý kho, và admin dashboard.',
            image: '/api/placeholder/400/300',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'TailwindCSS'],
            category: 'fullstack',
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/yourusername/project',
            featured: true
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'Ứng dụng quản lý công việc với tính năng real-time collaboration, drag & drop, và notifications.',
            image: '/api/placeholder/400/300',
            technologies: ['Vue.js', 'Express', 'Socket.io', 'PostgreSQL'],
            category: 'frontend',
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/yourusername/project',
            featured: true
        },
        {
            id: 3,
            title: 'Weather Dashboard',
            description: 'Dashboard thời tiết với charts, forecasts, và maps tương tác. Data từ multiple weather APIs.',
            image: '/api/placeholder/400/300',
            technologies: ['Next.js', 'Chart.js', 'OpenWeather API', 'Vercel'],
            category: 'frontend',
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/yourusername/project',
            featured: false
        },
        {
            id: 4,
            title: 'Restaurant Management System',
            description: 'Hệ thống quản lý nhà hàng với POS, inventory management, và customer analytics.',
            image: '/api/placeholder/400/300',
            technologies: ['React', 'Django', 'PostgreSQL', 'Redis'],
            category: 'fullstack',
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/yourusername/project',
            featured: true
        },
        {
            id: 5,
            title: 'Mobile Banking App UI',
            description: 'Thiết kế UI/UX cho ứng dụng banking mobile với focus vào security và user experience.',
            image: '/api/placeholder/400/300',
            technologies: ['React Native', 'Figma', 'Lottie', 'Redux'],
            category: 'mobile',
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/yourusername/project',
            featured: false
        },
        {
            id: 6,
            title: 'AI Chatbot API',
            description: 'RESTful API cho chatbot với natural language processing và machine learning.',
            image: '/api/placeholder/400/300',
            technologies: ['Python', 'FastAPI', 'TensorFlow', 'Docker'],
            category: 'backend',
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/yourusername/project',
            featured: false
        },
        {
            id: 7,
            title: 'Social Media Analytics',
            description: 'Platform phân tích social media với real-time data processing và visualization.',
            image: '/api/placeholder/400/300',
            technologies: ['React', 'D3.js', 'Node.js', 'Elasticsearch'],
            category: 'fullstack',
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/yourusername/project',
            featured: false
        },
        {
            id: 8,
            title: 'IoT Dashboard',
            description: 'Dashboard để monitor và control IoT devices với real-time updates.',
            image: '/api/placeholder/400/300',
            technologies: ['Vue.js', 'MQTT', 'InfluxDB', 'Grafana'],
            category: 'frontend',
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/yourusername/project',
            featured: false
        }
    ];

    const categories = [
        { id: 'all', name: 'Tất cả', count: projects.length },
        { id: 'fullstack', name: 'Full Stack', count: projects.filter(p => p.category === 'fullstack').length },
        { id: 'frontend', name: 'Frontend', count: projects.filter(p => p.category === 'frontend').length },
        { id: 'backend', name: 'Backend', count: projects.filter(p => p.category === 'backend').length },
        { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const ProjectCard = ({ project }) => (
        <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-950">
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-sky-100 to-emerald-100 dark:from-sky-900/40 dark:to-emerald-900/30">
                <div className="flex h-full items-center justify-center text-4xl text-slate-500 dark:text-slate-400">WEB</div>

                {project.featured && (
                    <div className="absolute left-3 top-3 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white dark:bg-sky-500 dark:text-slate-900">
                        Featured
                    </div>
                )}

                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/50 opacity-0 transition group-hover:opacity-100">
                    <a href={project.liveUrl} className="rounded-full bg-white p-3 text-slate-800 transition hover:bg-sky-600 hover:text-white" title="View Live">
                        <ExternalLink className="h-5 w-5" />
                    </a>
                    <a href={project.githubUrl} className="rounded-full bg-white p-3 text-slate-800 transition hover:bg-sky-600 hover:text-white" title="View Code">
                        <Github className="h-5 w-5" />
                    </a>
                </div>
            </div>

            <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 transition group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">
                    {project.title}
                </h3>

                <p className="line-clamp-3 mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex items-center gap-4 text-sm font-medium">
                    <a href={project.liveUrl} className="inline-flex items-center gap-1 text-sky-600 hover:text-sky-700 dark:text-sky-400">
                        <Eye className="h-4 w-4" /> Xem demo
                    </a>
                    <a href={project.githubUrl} className="inline-flex items-center gap-1 text-slate-600 hover:text-sky-600 dark:text-slate-300 dark:hover:text-sky-400">
                        <Github className="h-4 w-4" /> Code
                    </a>
                </div>
            </div>
        </article>
    );

    return (
        <section id="projects" className="bg-white py-24 dark:bg-slate-950">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                        Du an <span className="text-sky-600 dark:text-sky-400">noi bat</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                        Danh sach project tu dashboard noi bo den ung dung public.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center mb-12">
                    <div className="inline-flex flex-wrap justify-center rounded-2xl border border-slate-200 bg-slate-50 p-2 dark:border-slate-800 dark:bg-slate-900">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveFilter(category.id)}
                                className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition ${activeFilter === category.id
                                    ? 'bg-sky-600 text-white'
                                    : 'text-slate-600 hover:bg-white hover:text-sky-600 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-sky-400'
                                    }`}
                            >
                                <span>{category.name}</span>
                                <span className="text-xs bg-black/10 px-2 py-0.5 rounded-full">
                                    {category.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredProjects.slice(0, visibleProjects).map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {visibleProjects < filteredProjects.length && (
                    <div className="text-center">
                        <Button onClick={() => setVisibleProjects(prev => prev + 6)} variant="outline" className="inline-flex">
                            <span>Xem thêm dự án</span>
                            <Filter className="h-4 w-4" />
                        </Button>
                    </div>
                )}

                <div className="mt-16 rounded-2xl bg-gradient-to-r from-sky-600 to-emerald-500 p-8 text-white">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-bold mb-2">{projects.length}+</div>
                            <p className="text-sky-100">Du an hoan thanh</p>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">50+</div>
                            <p className="text-sky-100">Cong nghe su dung</p>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">100%</div>
                            <p className="text-sky-100">Khach hang hai long</p>
                        </div>
                        <div>
                            <div className="text-3xl font-bold mb-2">24/7</div>
                            <p className="text-sky-100">Ho tro du an</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;