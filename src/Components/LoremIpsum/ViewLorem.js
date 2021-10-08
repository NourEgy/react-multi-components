import { useState } from "react";
import Data from './Data'


const ViewLorem = () => {

    const [text, setText] = useState([]);
    const [count, setCount] = useState(0);

    

    const handelSubmit = (e) => {
        e.preventDefault();
        let amount = parseInt(count);
        if ( count <= 0 ) {
            amount = 1
        }
        if ( count > 8 ) {
            amount = 8
        }
        setText(Data.slice(0, amount));
        console.log("welcome");
        console.log(amount)
    }

    return (
    
            <div className="ViewLorem">
            <div className="container">
                 <h2 className="title">ViewLorem</h2>


                <form onSubmit={handelSubmit}>

                    <label htmlFor="amount">Paragraph: </label>
                    <input type="number" name="amount" id="amount" value={count} onChange={ (e) =>  setCount(e.target.value) } />
                   
                    <button type="submit" className="btn-one" >Generet</button>
        
                </form>

                <article>

                    {text.map( (item, index) => {
                        return <p key={index}>  {item}  </p>
                    } )}
        
                </article>
         
            </div>
            </div>
        
    )

}


export default ViewLorem;