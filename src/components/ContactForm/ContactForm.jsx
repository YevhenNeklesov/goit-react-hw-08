import { Field, Form, Formik } from "formik"
import { useDispatch } from "react-redux"
import { addContact } from "../../redux/contacts/operations"
import s from './ContactForm.module.css'


const ContactForm = () => {
    const initialValues = { name: '', number: '' }
    const dispatch = useDispatch()
    
    const onSubmit = (values, options) => {
        console.log(values);
        dispatch(addContact(values))
        options.resetForm()
        
    }

  return (
      <div className={s.container}>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
              <Form className={s.form}>
                  <Field className={s.input} name='name' placeholder='Enter contact name' />
                  <Field className={s.input} type='tel' name='number' placeholder='Enter contact phone number'/>           
                  <button className={s.btn} type="submit">Add contact</button>
              </Form>
          </Formik>
    </div>
  )
}

export default ContactForm