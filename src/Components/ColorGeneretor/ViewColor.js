import { useState } from "react";
import SingleColor from "./SingleColor"
import Values from 'values.js'

const ViewColor= () => {

    const [color, setColor] = useState('');
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values('#0000ff').all(10));


    const handelSubmit = (e) => {
        e.preventDefault();
        try {
            let colors = new Values(color).all(10);
            setList(colors);
        } catch (error) {
            setError(true);
            console.log(error);
        }
        
    }
    return (
    
            <div className="ViewColor">
            <div className="container">
                 <h2 className="title">ViewColor</h2>


                <form onSubmit={handelSubmit}>

                    <input className={`${error ? 'error' : null}`} type="text" placeholder="#0000ff" onChange={ (e) =>  setColor(e.target.value) } />
                   
                    <button type="submit" className="btn-one" >Submit</button>
        
                </form>

                <article className="colors">

                    {list.map((color, index) => {
                  
                        return (
                            
                            <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
                        )
                    })}
        
                </article>
         
            </div>
            </div>
        
    )

}


export default ViewColor;