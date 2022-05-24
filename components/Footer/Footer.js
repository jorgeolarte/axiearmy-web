import CTA from "./CTA";
import ContactUs from "./ContactUs";
import FollowUs from "./FollowUs";
import Newsletter from "./Newsletter";

export default function Footer() {
  return (
    <footer className='bg-dark'>
      <div className='container mx-auto grid grid-cols-2 md:grid-cols-4 gap-5 justify-between bg-dark p-10 md:py-10 md:gap-10'>
        <FollowUs />
        <ContactUs />
        <CTA />
        <Newsletter />
      </div>
    </footer>
  );
}
