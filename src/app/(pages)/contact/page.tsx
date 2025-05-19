import { ContactForm } from "./components/contact-form";

const ContactPage: React.FC = () => {
  return (
    <>
      <div className="flex max-xl:flex-col justify-between px-8 w-full pt-16">
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
      </div>
    </>
  );
};

export default ContactPage;
