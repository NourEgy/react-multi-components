import { useState } from "react";
import { FaPlusCircle, FaMinusCircle} from "react-icons/fa";
const Questions = ({ title, info }) => {

    const [showInfo, setShowInfo] = useState(false)


    return (
        
            <div className="questions">
          
                <div className="head-qous">
                    <h3>{title}</h3>
                    <button onClick={() => setShowInfo(!showInfo)} > 
                        {showInfo ?  <FaMinusCircle /> : <FaPlusCircle /> }
                    </button>
                </div>

                { showInfo &&  <p> {info} </p> }
                

                


            </div>
        
    )

}


export default Questions;