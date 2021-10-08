import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "./Context";
const Modal = () => {

    const {isModelOpen, closeModel} = useGlobalContext();

    return (

        <div className={` ${isModelOpen ? 'modal-overlay show-modal' : "modal-overlay"} `} >

            <div className="modal-container">

              <h2>Model Content</h2>
              <button className="close-modal-btn" onClick={closeModel}>
                  <FaTimes />
              </button>
              
            </div>
  
        </div>
        
    )

}


export default Modal;