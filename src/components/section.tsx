export const SectionTitle = ({ children }: { children: React.ReactNode }) => {
    return (
        <h2 className="text-5xl">
            {children}
        </h2>
    );
}

export const Section = ({ children }: { children: React.ReactNode }) => {
    return (
        <section className="py-8">
            {children}
        </section>
    );
}