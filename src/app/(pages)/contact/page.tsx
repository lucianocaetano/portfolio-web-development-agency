import { ContactForm } from "./components/contact-form";
import { TypographyH1 } from "./typography/H1";
import { TypographyP } from "./typography/P";

const ContactPage: React.FC = () => {
  return (
    <div className="md:flex justify-between max-w-6xl mx-auto space-y-16 font-serif px-6 pb-16">
      <div>
        <TypographyH1>Contact Us</TypographyH1>
        <TypographyP>Feel free to reach out to us!</TypographyP>
        <br />
      </div>
      <div className="mt-20">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
