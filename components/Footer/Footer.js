import CTA from "./CTA";
import ContactUs from "./ContactUs";
import FollowUs from "./FollowUs";

export default function Footer() {
  return (
    <footer className='bg-dark'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start bg-dark p-10 md:py-10 gap-10'>
        <FollowUs />
        <ContactUs />
        <CTA />
      </div>
    </footer>
  );
}
