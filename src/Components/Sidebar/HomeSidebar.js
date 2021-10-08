import { FaBars } from "react-icons/fa";
import { AppContext, useGlobalContext } from "./Context";
import { useContext } from "react";
const HomeSidebar = () => {

    const {openSidebar, openModel} = useGlobalContext();
    

    return (

        <div className="home-sidebar">

              <h2 className="title">HomeSidebar</h2>

              <button className="toggle-sidebar" onClick={openSidebar}>
                  <FaBars />
              </button>

              <button className="btn-show-modal btn-one"  onClick={openModel}>
                  Show Modal
              </button>

             
  
        </div>
        
    )

}


export default HomeSidebar;