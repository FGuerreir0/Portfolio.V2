/* eslint-disable no-case-declarations */
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineError } from "react-icons/md";



const ContactUs = () => {
  const form = useRef();
  const [inputName, setInputName] = useState('')
  const [inputSubject, setInputSubject] = useState('')
  const [inputEmail, setInputEmail] = useState('')
  const [inputMessage, setInputMessage] = useState('')

  const [isNameActive, setIsNameActive] = useState(false)
  const [isSubjectActive, setIsSubjectActive] = useState(false)
  const [isMessageActive, setIsMessageActive] = useState(false)
  const [isEmailActive, setIsEmailActive] = useState(false)
  const [okEmail, setokEmail] = useState(false)
  const [toShow, settoShow] = useState(false)

  const sendEmail = (e) => {
    const serviceId = import.meta.env.VITE_SERVICEID
    const templateId = import.meta.env.VITE_TEMPLATEID
    const publickey = import.meta.env.VITE_PUBLICKEY

    e.preventDefault();
    if(inputName.length > 0 && inputSubject.length > 0 && inputMessage.length > 0 && (isEmailActive === false && inputEmail.length > 0)){
      emailjs.sendForm(serviceId, templateId, form.current, publickey)
      .then((result) => {
          if(result.status == 200){
            setokEmail(true)
          }
      }, (error) => {
          console.log(error.text);
      });
      setTimeout(() => {
      form.current.reset()
        settoShow(true)
      }, 1000);
    }
  };

  const handleUserInput = (e) =>{
    switch(e.target.name){
      case 'subject':
        if(e.target.value.length > 0){
          setIsSubjectActive(false)
        }else{
          setIsSubjectActive(true)
        }
        return setInputSubject(e.target.value);   
      case 'from_name':
        if(e.target.value.length > 0){
          setIsNameActive(false)
        }else{
          setIsNameActive(true)
        }
        return setInputName(e.target.value);
      case 'email':
        let emailValid = e.target.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        if(emailValid == null){
          setIsEmailActive(true);
        }else{
          setIsEmailActive(false);
        }
        return setInputEmail(e.target.value);
      case 'message':
        if(e.target.value.length > 0){
          setIsMessageActive(false)
        }else{
          setIsMessageActive(true)
        }
        return setInputMessage(e.target.value);
      default:
        return;
    }
  }

  return (
    <div className="app__contactus">
      <div className="app__contactus_div">
        <div className='app__contactus_seconddiv'>
          <p>Envia-nos a tua mensagem preenchendo o formulário em baixo. <br></br>Teremos o prazer de entrar em contacto contigo.</p>
          <form className='app_contactus-form' ref={form} onSubmit={sendEmail}>
            <div className='app_contactus_nome'>
              <input className={isNameActive ? 'app_contactus-formError' : ''} placeholder='Nome' type="text" name="from_name" onChange={(event) => handleUserInput(event)}/>
              <input className={isEmailActive ? 'app_contactus-formError' : ''} placeholder='Email' type="email" name="email" onChange={(event) => handleUserInput(event)}/>
            </div>
            <div  className='app_contactus_message'>
              <input className={isSubjectActive ? 'app_contactus-formError' : ''} placeholder='Assunto' type="text" name="subject" onChange={(event) => handleUserInput(event)}/><br></br>
              
              <label>Mensagem</label>
              <textarea className={isMessageActive ? 'app_contactus-formError' : ''} name="message" onChange={(event) => handleUserInput(event)}/><br></br>    
              </div>
              <div className='app_contactus_submit'>
                <input className='app_contactus-form-button' type="submit" value="Enviar" />
                <div className = {!toShow ? 'app_contactus-result' : null}>
                  {okEmail ? <p className='app_contactus-form-ok'>{<FaCheckCircle />} Email enviado com sucesso!</p> : <p className='app_contactus-form-error'>{<MdOutlineError />} Ups, contacte: geral@d8-solutions.pt</p>}
                </div>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;