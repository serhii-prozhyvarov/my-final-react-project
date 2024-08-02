import { ContactsWrapper, InfoWrapper } from "./Contacts.styled";

function Contacts() {
  return (
    <ContactsWrapper>
      <h2>Contact Us</h2>
      <h3>
        We’re here to assist you! Reach out with any questions, feedback, or
        support needs using the contact information below. Our team is ready to
        help and will get back to you as soon as possible.
      </h3>
      <InfoWrapper>
        <div>
          <h3>Customer Support:</h3>
          <ul>
            <li>Email: techsupport@example.com</li>
            <li>Phone: +1 (123) 456-7892</li>
          </ul>
        </div>
        <div>
          <h3>Technical Support:</h3>
          <ul>
            <li>Email: techsupport@example.com</li>
            <li>Phone: +1 (123) 456-7892</li>
          </ul>
        </div>
      </InfoWrapper>
    </ContactsWrapper>
  );
}
export default Contacts;
