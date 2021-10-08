import { useState, useEffect } from "react";

const SingleColor= ({rgb, weight, index, hexColor}) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    const hexValue = `#${hexColor}`;

    useEffect(() => {
        const timeout = setTimeout ( () => {
            setAlert(false)
        }, 2000 )
        return () => clearTimeout(timeout)
    }, [alert])
    return (
    
        <div 
        className={`color ${index > 10 && 'color-light'}`}
         style={{backgroundColor: `rgb(${bcg})` }}
         onClick={ () => { 
            setAlert(true);
            navigator.clipboard.writeText(hexValue)}
         }>
            <p className="percent-value"> {weight}% </p>
            <p className="color-value"> {hexValue} </p>
            {alert && <p> COPIED TO CLIPBOARD </p> }
        </div>
        
    )

}


export default SingleColor;