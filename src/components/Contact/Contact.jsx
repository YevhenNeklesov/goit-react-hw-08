import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/contacts/operations"
import s from './Contact.module.css'


const Contact = ({name, phone, id}) => {
    const dispatch = useDispatch()

  return (       
    <>
        <p className={s.text}>Name: <br />{name}</p>
        <p className={s.text}>Phone: <br />{phone}</p>
        <button className={s.btn} onClick={() => dispatch(deleteContact(id))}>Delete contact</button>
    </>        
  )
}

export default Contact