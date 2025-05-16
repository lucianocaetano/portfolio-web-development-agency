import { ContactForm } from "./components/contact-form";

const ContactPage: React.FC = () => {
  return (
    <>
      <div className="max-xl:flex-col flex justify-between lg:mx-8 px-6 w-full">
        <div>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-start">
            Contact Us
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Feel free to reach out to us!
          </p>
        </div>
        <div className="mt-8">
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
