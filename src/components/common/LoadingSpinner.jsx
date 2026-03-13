const LoadingSpinner = ({ size = 'md', className = '' }) => {
    const sizes = {
        sm: 'h-4 w-4',
        md: 'h-6 w-6',
        lg: 'h-8 w-8',
        xl: 'h-12 w-12',
    };

    return (
        <div
            className={`animate-spin rounded-full border-2 border-slate-300 border-t-sky-600 dark:border-slate-700 dark:border-t-sky-400 ${sizes[size]} ${className}`}
            aria-label="Loading"
            role="status"
        />
    );
};

export default LoadingSpinner;