import { useState } from "react"
import Data from "./Data"
import Questionsta from "./Qoustion"

const ViewQuestions = () => {

    const [qoustions, setQoustions] = useState(Data);


    return (
        
            <div className="ViewQuestions">

                <div className="container">
                <h2 className="title">Questions</h2>
                <div className="main-qous">
                    
                    {qoustions.map( (qoustion) => {
                        return <Questionsta key={qoustion.id}  {...qoustion}  />
                    } )}
                   
                </div>
                    
                </div>

            </div>
        
    )

}


export default ViewQuestions;