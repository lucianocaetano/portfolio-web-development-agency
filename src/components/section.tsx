import React from "react";

export const SectionTitle = ({ children, ...props }: React.ComponentProps<"h2">) => {
    return (
        <h2 className="text-5xl" {...props}>
            {children}
        </h2>
    );
};

export const Section = ({ className = "", children, ...props }: React.ComponentProps<"section">) => {
    return (
        <section className={`py-8 ${className}`.trim()} {...props}>
            {children}
        </section>
    );
};