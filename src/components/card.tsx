import React from "react";

export const Card = ({ className = "", children, ...props }: React.ComponentProps<"div">) => (
    <div className={`flex flex-col gap-3 p-4 border-none shadow-none bg-[#f0f0f0] items-center rounded-xl ${className}`.trim()} {...props}>
        {children}
    </div>
);

export const CardHeader = ({ className = "", children, ...props }: React.ComponentProps<"div">) => (
    <div className={`text-center border-b-2 border-foreground pb-2 w-full items-center flex flex-col ${className}`.trim()} {...props}>
        {children}
    </div>
);

export const CardTitle = ({ className = "", children, ...props }: React.ComponentProps<"p">) => (
    <p className={`text-[#0e141b] text-lg font-medium ${className}`.trim()} {...props}>
        {children}
    </p>
);

export const CardContent = ({ className = "", children, ...props }: React.ComponentProps<"div">) => (
    <div className={`text-[#306090] text-sm font-normal leading-normal text-center w-full ${className}`.trim()} {...props}>
        {children}
    </div>
);