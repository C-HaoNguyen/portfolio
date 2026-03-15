import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Clock, CheckCircle } from 'lucide-react';
import Button from '../common/Button';
import LoadingSpinner from '../common/LoadingSpinner';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email',
            info: 'haolq0711@gmail.com',
            action: 'mailto:haolq0711@gmail.com'
        },
        {
            icon: Phone,
            title: 'Điện thoại',
            info: '+84 869 066 421',
            action: 'tel:+84869066421'
        },
        {
            icon: MapPin,
            title: 'Địa chỉ',
            info: 'TP. Hồ Chí Minh, Việt Nam',
            action: 'https://maps.google.com'
        },
        {
            icon: Clock,
            title: 'Giờ làm việc',
            info: 'T2 - T6: 9:00 - 18:00',
            action: null
        }
    ];

    const socialLinks = [
        {
            icon: Github,
            name: 'GitHub',
            url: 'https://github.com/yourusername',
            color: 'hover:bg-gray-800'
        },
        {
            icon: Linkedin,
            name: 'LinkedIn',
            url: 'https://linkedin.com/in/yourprofile',
            color: 'hover:bg-blue-600'
        },
        {
            icon: Twitter,
            name: 'Twitter',
            url: 'https://twitter.com/yourusername',
            color: 'hover:bg-blue-400'
        }
    ];

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));

        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });

        // Reset submitted state after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section id="contact" className="bg-white py-24 dark:bg-slate-950">
            <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
                        Thông tin <span className="text-sky-600 dark:text-sky-400">liên hệ</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                        Nếu bạn đang có dự án mới, cần review sản phẩm hoặc muốn hợp tác, hãy gửi cho tôi một tin nhắn.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1 space-y-8">
                        <div className="space-y-4">
                            {contactInfo.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group cursor-pointer rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-sky-400 hover:bg-white dark:border-slate-800 dark:bg-slate-900 dark:hover:border-sky-400 dark:hover:bg-slate-950"
                                        onClick={() => item.action && window.open(item.action, '_blank')}
                                    >
                                        <div className="flex items-center space-x-4">
                                            <div className="rounded-xl bg-sky-600 p-3 text-white transition group-hover:scale-105 dark:bg-sky-500 dark:text-slate-950">
                                                <IconComponent className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className="mb-1 font-semibold text-slate-900 dark:text-white">
                                                    {item.title}
                                                </h3>
                                                <p className="text-slate-600 dark:text-slate-300">
                                                    {item.info}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
                            <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">
                                Theo dõi tôi
                            </h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a
                                            key={index}
                                            href={social.url}
                                            className={`rounded-lg border border-slate-300 bg-white p-3 text-slate-600 transition hover:text-white dark:border-slate-700 dark:bg-slate-950 dark:text-slate-300 ${social.color}`}
                                            title={social.name}
                                        >
                                            <IconComponent className="w-5 h-5" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-6 text-white">
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                <span className="font-semibold">Sẵn sàng nhận dự án mới</span>
                            </div>
                            <p className="text-emerald-100 text-sm">
                                Hiện tại tôi có lịch trình rảnh cho các cơ hội freelance và full-time.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
                            <h3 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                                Gửi tin nhắn cho tôi
                            </h3>

                            {isSubmitted && (
                                <div className="mb-6 flex items-center space-x-2 rounded-lg bg-emerald-100 p-4 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                                    <CheckCircle className="w-5 h-5" />
                                    <span>Cảm ơn bạn. Tin nhắn đã được gửi và tôi sẽ phản hồi sớm nhất có thể.</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Họ và tên *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                                            placeholder="Nhập họ và tên của bạn"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                                            placeholder="your.email@domain.com"
                                            disabled={isSubmitting}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                                        Chủ đề *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                                        placeholder="Dự án website, tư vấn kỹ thuật, partnership..."
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
                                        Tin nhắn *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={6}
                                        className="w-full resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 transition focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                                        placeholder="Hãy mô tả chi tiết về dự án hoặc yêu cầu bạn cần hỗ trợ..."
                                        disabled={isSubmitting}
                                    ></textarea>
                                </div>

                                <Button type="submit" disabled={isSubmitting} className="w-full">
                                    {isSubmitting ? (
                                        <>
                                            <LoadingSpinner size="sm" className="border-white/40 border-t-white" />
                                            <span>Đang gửi...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-4 h-4" />
                                            <span>Gửi</span>
                                        </>
                                    )}
                                </Button>
                            </form>

                            <div className="mt-8 border-t border-slate-200 pt-8 dark:border-slate-800">
                                <p className="mb-4 text-slate-600 dark:text-slate-300">
                                    Hoặc liên hệ trực tiếp qua email hoặc điện thoại nếu bạn muốn phản hồi nhanh hơn hoặc có yêu cầu đặc biệt.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="mailto:your.email@domain.com"
                                        className="inline-flex items-center space-x-2 rounded-lg bg-sky-600 px-4 py-2 text-sm text-white transition hover:bg-sky-700"
                                    >
                                        <Mail className="w-4 h-4" />
                                        <span>Email</span>
                                    </a>
                                    <a
                                        href="tel:+84123456789"
                                        className="inline-flex items-center space-x-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm text-white transition hover:bg-emerald-700"
                                    >
                                        <Phone className="w-4 h-4" />
                                        <span>Gọi điện</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
                    <h3 className="mb-6 text-center text-2xl font-bold text-slate-900 dark:text-white">
                        Cau hoi thuong gap
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                            <div className="mb-2 text-2xl text-sky-600 dark:text-sky-400">24h</div>
                            <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">
                                Thời gian phản hồi
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-300">
                                Thường trong vòng 24 giờ, cuối tuần có thể lâu hơn.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mb-2 text-2xl text-sky-600 dark:text-sky-400">Quote</div>
                            <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">
                                Báo giá dự án
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-300">
                                Báo giá chi tiết sau khi xác định requirement va scope.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="mb-2 text-2xl text-sky-600 dark:text-sky-400">Partnership</div>
                            <h4 className="mb-2 font-semibold text-slate-900 dark:text-white">
                                Hợp tác dài hạn?
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-300">
                                Tôi luôn mở cửa cho các cơ hội hợp tác và cộng tác kéo dài.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;