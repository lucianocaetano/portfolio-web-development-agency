import React from "react";

export const SectionTitle = ({ ...props }: React.ComponentProps<"h2">) => {
    return (
        <h2 className="text-5xl">
            {props.children}
        </h2>
    );
}

export const Section = ({ className, ...props }: React.ComponentProps<"section">) => {
    return (
        <section className={`py-8 ${className}`}>
            {props.children}
        </section>
    );
}