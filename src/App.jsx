
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import NotFound from './pages/NotFound'
import LoginPage from './pages/LoginPage'
import ContactsPage from './pages/ContactsPage'
import HomePage from './pages/HomePage'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { refresh } from './redux/auth/operations'
import { selectIsRefreshing } from './redux/auth/selectors'
import { PrivateRoute } from './components/PrivateRoute'
import { RestrictedRoute } from './components/RestrictedRoute'
import RegistrationPage from './pages/RegistrationPage'



function App() {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refresh())
  }, [dispatch])
  
  const isRefreshing = useSelector(selectIsRefreshing)

  return isRefreshing ? null : (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path='/contacts' element={<PrivateRoute component={<ContactsPage />} redirectTo='/login'/>} />
        <Route path='/register' element={<RestrictedRoute component={<RegistrationPage/>} redirectTo='/contacts'/>} />
        <Route path='/login' element={<RestrictedRoute component={<LoginPage/>} redirectTo='/contacts'/>}/>
      <Route path='*' element={<NotFound />} /></Route>
    </Routes>
  )
}

export default App


