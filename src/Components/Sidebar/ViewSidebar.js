import Sidebar from "./Sidebar"
import HomeSidebar from "./HomeSidebar"
import Modal from "./Modal"
import { AppProvider } from "./Context";


const ViewSidebar = () => {


    return (

        <div className="ViewSidebar">
            <div className="container">

            <AppProvider>
                <HomeSidebar />
                <Modal />
                <Sidebar />
            </AppProvider>

         </div>
        </div>
        
    )

}




export default ViewSidebar;