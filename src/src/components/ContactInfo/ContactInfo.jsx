/* eslint-disable react/prop-types */
import './ContactInfo.css'

const ContactInfo = (props) => {

  return (
    <div className="app_contactInfo">
    <div className='app__contactInfo-icon'>{props.icon}</div>
    <div className='app__contactInfo-text'>{props.text}</div>
    </div>
  );
};
export default ContactInfo;