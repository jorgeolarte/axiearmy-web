import CTA from "./CTA";
import ContactUs from "./ContactUs";
import FollowUs from "./FollowUs";

export default function Footer() {
  return (
    <footer className='bg-dark'>
      <div className='container mx-auto flex flex-row justify-between items-start bg-dark py-10'>
        <FollowUs />
        <ContactUs />
        <CTA />
      </div>
    </footer>
  );
}
