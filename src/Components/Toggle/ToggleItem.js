import { useState } from "react";

const ToggleItem = () => {

    const [item, setItem] = useState(false);

    return (

            <div className="ToggleItem">
                <div className="container">

                    <h2 className="title"> Toggle Item. </h2>

                    <button className="btn-one"  onClick={ () => setItem(!item) }> {item ? 'item-open' : 'item-close'} </button>


                    <div className={`item-toggle ${item ? 'item-close' : 'item-open'} `}>
                    
                        <div className="item-nav">
                              <h1>welcome</h1>
                        </div>
                        
                    </div>

               
                </div>

            </div>
        
    )

}


export default ToggleItem;