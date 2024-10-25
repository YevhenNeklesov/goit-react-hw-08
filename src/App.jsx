
import './App.css'
// import ContactForm from './components/ContactForm/ContactForm'
// import SearchBox from './components/SearchBox/SearchBox'
// import ContactList from './components/ContactList/ContactList'
// import { useDispatch } from 'react-redux'
// import { useEffect } from 'react'
// import { fetchContacts } from './redux/contacts/operations'
// import { selectError, selectLoading } from './redux/contacts/slice'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import NotFound from './pages/NotFound'
import RegistrationPage from './pages/RegistrationPage'
import LoginPage from './pages/LoginPage'
import ContactsPage from './pages/ContactsPage'
import HomePage from './pages/HomePage'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { refresh } from './redux/auth/operations'



function App() {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refresh())
  },[dispatch])

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>} />
        <Route path='/register' element={<RegistrationPage/>} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/contacts' element={<ContactsPage/>}/>
        
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>

  )
}

export default App


