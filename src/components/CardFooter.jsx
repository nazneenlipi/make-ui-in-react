export function CardFooter({ className, children, ...props }) {
    return (
      <div
        className={`flex items-center justify-between px-4 py-3 border-t 
          bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 
          ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }