import { useDispatch, useSelector } from "react-redux"
import AuthNav from "../AuthNav/AuthNav"
import Navigation from "../Navigation/Navigation"
import { logout } from "../../redux/auth/operations"
import { selectIsLoggedIn } from "../../redux/auth/selectors"


const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const dispatch = useDispatch()
  return (
      <div className='bg-neutral-600 flex gap-x-4 p-5 justify-between mb-10'>
          <Navigation />
          <AuthNav />
          {isLoggedIn &&
              <button
                  className="text-slate-100"
                  onClick={() => dispatch(logout())}>Log Out</button>}
</div>
  )
}

export default AppBar