import { Field, Form, Formik } from "formik"
import { useDispatch } from "react-redux"
import { patchContact } from "../../redux/contacts/operations"


const Modal = () => {
        const initialValues = { name: '', number: '' }
    const dispatch = useDispatch()
    
    const onSubmit = (values, options) => {
        console.log(values);
        dispatch(patchContact(values))
        options.resetForm()
        
    }
  return (
      <div>
          <dialog id="my_modal_1" className="modal">
  <div className="modal-box bg-neutral-600">
                        <div className=''>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
              <Form className="w-80 flex-col flex gap-5 m-auto ">
        <label className="form-control w-full max-w-xs">
    <span className="text-slate-200 font-bold mb-4">Edit name</span>
        <Field
          type="text"
          name="name"
          placeholder="Enter contact name" 
          className="input input-bordered text-black w-full max-w-xs"/>
        </label>
                        <label className="form-control w-full max-w-xs">
    <span className="text-slate-200 font-bold mb-4">Edit phone</span>
        <Field
          type="tel"
          name="number"
          placeholder="Enter contact phone number" 
          className="input input-bordered text-black w-full max-w-xs"/>
        </label>
        <button className="border-transparent bg-red-900 text-slate-100 px-20 m-auto  py-3 rounded-md" type="submit">Edit contact</button>
              </Form>
          </Formik>
    </div>
    
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Modal