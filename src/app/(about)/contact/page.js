import ContactForm from "@/src/components/Contact/ContactForm";
import { siteMetadata } from "@/src/utils/siteMetaData.js";

export const metadata = {
  title: "Contact Me",
  description: `Contact me through the form available on this page or email me at ${siteMetadata.email}`,
};

export default function Contact() {
  return (
    <section className="w-full h-auto md:h-[75vh]  flex  flex-col md:flex-row items-center justify-center text-default dark:text-light">
      <div className="mt-10 w-full  md:w-4/5 md:max-w-[700px] flex flex-col items-start justify-center ">
        <h2 className="title">Mail to me</h2>
        <ContactForm />
      </div>
    </section>
  );
}
