import { useEffect } from "react";



const Alert = ({type, msg, removeAlert, list}) => {

    useEffect(() => {
        
        const timeOut = setTimeout(() => {
            removeAlert();
        }, 3000);

        return () => clearTimeout(timeOut);

    }, [list]);


    return (
    
            <div className="alert">
                <p className={` alert alert-${type} `} > {msg} </p>
            </div>
        
    )

}


export default Alert;