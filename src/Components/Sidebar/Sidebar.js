import {links, social} from "./Data"
import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "./Context";

const Sidebar = () => {

    const {isSidebarOpen, closeSidebar } = useGlobalContext();

    return (

        <aside className={` ${isSidebarOpen ? "sidebar show-sidebar" :  "sidebar" } `}>
   
              <div className="sidebar-header">
                  <a href="/" className="logo"> Nour Eldin </a>
                  <span onClick={closeSidebar}> <FaTimes /> </span>
              </div>


             <ul className="links">
                 {links.map((link, index) => {
                     const { id, url, text, icon }= link;
                     return (
                        <li key={id}>
                            <a href={url}>
                                <span> {icon} </span>
                                {text} 
                            </a>  
                        </li>
                     );
                 })}
             </ul>

             
             <ul className="social-media">
                 {social.map((social, index) => {
                     const { id, url, icon }= social;
                     return (
                        <li key={id} index={index} {...social}>
                            <a href={url}>
                                <span> {icon} </span>
                            </a>  
                        </li>
                     );
                 })}
             </ul>



        </aside>
        
    )

}


export default Sidebar;