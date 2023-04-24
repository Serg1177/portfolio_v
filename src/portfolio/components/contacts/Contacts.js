import './contacts.scss'
import axios from "axios";
import {useFormik} from "formik";
import React, {useState} from 'react';
import './../../commons/button/button.scss'
import Modal from "../../commons/modal/Modal";
import photo from './../../assets/footer/foto7V.jpeg'

export const Contacts = () => {
  const [isShow, setIsShow] = useState(false)
  const [isDisable, setIsDisable] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      if (!values.name) {
        errors.name = 'Required';
      }
      return errors;
    },
    onSubmit: async (messageData) => {
      try {
        setIsDisable(true)
        const {resultCode} = await axios.post("https://smtp-server-app.herokuapp.com/send-message", messageData).then((res) => res.data)
        if (resultCode === 0) {
          formik.resetForm()
          setIsShow(true)
          setTimeout(() => {setIsShow(false)}, 3000)
        }
      } catch (e) {
        console.log(e)
      } finally {
        setIsDisable(false)
      }
    },
  });

  const errorNameClassName = formik.touched.name && formik.errors.name && "errorName"
  const errorEmailClassName = formik.touched.email && formik.errors.email && "errorEmail"
  const disableBtnClassName = (errorNameClassName || errorEmailClassName) && "disableBtn"

  return (
    <div id="contacts" className="contact">
      <div className="contact_form">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="contact_title">
                <h2>Contact Me.</h2>
                <p className="description">
                  {`I am available for work. Connect with me via phone: ` }
                  <a href="tel:+381629383472">+381 62-938-34-72</a>
                  {` or email: `}
                  <a href="mailto:orovstrug2010@yandex.ru">orovstrug2010@yandex.ru</a>
                </p>
              </div>
              <div className="form_wrapper text-lg-start">
                <form onSubmit={formik.handleSubmit}>
                  <label>
                    <input className={errorNameClassName} type="text" placeholder="Your Name *" {...formik.getFieldProps('name')}/>
                  </label>
                  <label>
                    <input className={errorEmailClassName} type="email" placeholder="Your email *" {...formik.getFieldProps('email')}/>
                  </label>
                  <label>
                    <textarea placeholder="Your Message" {...formik.getFieldProps('message')}/>
                  </label>
                  <button type="submit" className={`btn contact-btn ${disableBtnClassName}`} disabled={isDisable}>Submit</button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2 ">
              <div className="thumbnail">
                <img src={photo} alt="photo"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={isShow}
        width={600}
        height={300}
        backgroundOnClick={() => setIsShow(false)}
        modalStyle={{
          color: "#fff",
          padding: "20px",
          fontSize: "24px",
          borderRadius: "5px",
          backgroundColor: "#191919",
          border: "2px solid hsla(0, 0%, 100%, .2)"
        }}
      >
        <p>Сообщение отправлено мне на почту.</p>
        <p>Я свяжусь с Вами когда у меня появится свободная минутка</p>
      </Modal>
    </div>
  );
}

