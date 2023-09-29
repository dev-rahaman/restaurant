import ReservationShowCase from "../reservation/ReservationComponents/ReservationShowCase";
import ContactBanner from "./ContactComponents/ContactBanner";
import ContactDetails from "./ContactComponents/ContactDetails";
import ContactForm from "./ContactComponents/ContactForm";
import ContactMapLocation from "./ContactComponents/ContactMapLocation";

const Contact = () => {
  return (
    <div>
      <ContactBanner />
      <ContactDetails />
      <ContactMapLocation />
      <ContactForm />
      <ReservationShowCase />
    </div>
  );
};

export default Contact;
