import { useDispatch, useSelector } from "react-redux"
import ContactForm from "../components/ContactForm/ContactForm"
import ContactList from "../components/ContactList/ContactList"
import SearchBox from "../components/SearchBox/SearchBox"
import { selectLoading } from "../redux/contacts/slice"
import { fetchContacts } from "../redux/contacts/operations"
import { useEffect } from "react"


const ContactsPage = () => {

    const loading = useSelector(selectLoading)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])
  return (
          <>
      <ContactForm />
      <SearchBox />
      {loading && <h2>Loading</h2>}
      <ContactList/>
    </>
  )
}

export default ContactsPage