
import s from './Contact.module.css'
import Modal from "../Modal/Modal"
import ModalDelete from '../ModalDelete/ModalDelete'



const Contact = ({name, phone, id}) => {
  
  

  return (       
    <>
        <p className={s.text}>Name: <br />{name}</p>
      <p className={s.text}>Phone: <br />{phone}</p>
      <div className="flex gap-2">
        <button className="border-transparent bg-transparent text-slate-100 px-2 m-auto btn py-2 rounded-md" onClick={() => document.getElementById('my_modal_1').showModal()}>
          <Modal/>
          <svg width="24px" height="24px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title></title> <g id="Complete"> <g id="edit"> <g> <path d="M20,16v4a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V6A2,2,0,0,1,4,4H8" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path> <polygon fill="none" points="12.5 15.8 22 6.2 17.8 2 8.3 11.5 8 16 12.5 15.8" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon> </g> </g> </g> </g></svg>
        </button>
        <button className="border-transparent btn bg-transparent text-slate-100 px-2 m-auto  py-2 rounded-md" onClick={() => document.getElementById('my_modal_2').showModal()}>
          <ModalDelete id={id} name={name} />
          <svg width="24px" height="24px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#A10000" d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"></path></g></svg>
        </button>

      </div>
    </>        
  )
}

export default Contact

// 
