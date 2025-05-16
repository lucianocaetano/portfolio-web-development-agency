import { ContactForm } from "./components/contact-form";

const ContactPage: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="md:flex justify-between max-w-6xl mx-auto space-y-16 font-serif px-6 pb-16">
      <div>
        <TypographyH1>Contact Us</TypographyH1>
        <TypographyP>Feel free to reach out to us!</TypographyP>
        <br />
=======
    <>
      <div className="flex flex-col md:flex-row md:justify-around md:my-8 w-full">
        <div className="w-fit self-center md:self-start">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-start">
            Contact Us
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Feel free to reach out to us!
          </p>
        </div>
        <div className="mt-8 w-fit self-center md:self-start">
          <ContactForm />
        </div>
>>>>>>> origin/develop
      </div>
    </>
  );
};

export default ContactPage;
