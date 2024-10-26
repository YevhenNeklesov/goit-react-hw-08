import { useDispatch, useSelector } from "react-redux"
import { logout } from "../../redux/auth/operations"
import { selectUser } from "../../redux/auth/selectors"



const UserMenu = () => {

    const user = useSelector(selectUser)
    console.log(user);

    const dispatch = useDispatch()
  return (
      <div className="flex w-full justify-between ml-40">
              <p className="text-slate-200 text-2xl ">Welcome {user.name}</p>
          <button className="text-slate-100 font-bold" onClick={() => dispatch(logout())}>Log Out</button>
    </div>
  )
}

export default UserMenu