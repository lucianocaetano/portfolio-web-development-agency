import { ContactForm } from "./components/contact-form";

const ContactPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col md:justify-around md:my-8 w-full items-center">
        <div className="flex flex-col items-center w-fit">
          <h1 className="scroll-m-20 text-5xl font-bold tracking-tight text-start">
            Contact Us
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Feel free to reach out to us!
          </p>
        </div>
        <div className="mt-8 w-fit">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
