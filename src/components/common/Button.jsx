const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    disabled = false,
    onClick,
    href,
    ...props
}) => {
    const baseClasses =
        'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-50';

    const variants = {
        primary:
            'bg-sky-600 text-white shadow-sm hover:bg-sky-700 active:bg-sky-800',
        secondary:
            'bg-white text-slate-800 ring-1 ring-slate-300 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700 dark:hover:bg-slate-700',
        outline:
            'bg-transparent text-sky-700 ring-1 ring-sky-600 hover:bg-sky-600 hover:text-white dark:text-sky-300 dark:ring-sky-400 dark:hover:bg-sky-500 dark:hover:text-slate-900',
        ghost:
            'bg-transparent text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-5 py-2.5 text-sm',
        lg: 'px-6 py-3 text-base',
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <a href={href} className={classes} {...props}>
                {children}
            </a>
        );
    }

    return (
        <button className={classes} disabled={disabled} onClick={onClick} {...props}>
            {children}
        </button>
    );
};

export default Button;