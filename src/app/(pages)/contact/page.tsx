import { ContactForm } from "./components/contact-form";
import { TypographyH1 } from "./typography/H1";
import { TypographyP } from "./typography/P";

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-2xl md:flex justify-between min-h-screen max-w-6xl mx-auto space-y-16 font-serif px-6">
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
