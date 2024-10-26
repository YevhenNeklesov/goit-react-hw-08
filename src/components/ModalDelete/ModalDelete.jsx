import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/contacts/operations"


const ModalDelete = ({id, name}) => {
    const dispatch = useDispatch()
    
  return (
      <div>
<dialog id="my_modal_2" className="modal">
  <div className="modal-box bg-neutral-600">
        <p className="py-4">Are you shure want delete: {name}</p>
    <div className="modal-action">
                      <form method="dialog">
                          <button className="border-transparent bg-red-900 text-slate-100 px-20 mr-20  py-4 rounded-md" onClick={() => dispatch(deleteContact(id))}>Delete</button>
        {/* if there is a button in form, it will close the modal */}
        <button className="btn ">Close</button>
      </form>
    </div>
  </div>
    </dialog>

    </div>
  )
}

export default ModalDelete