import { useState } from "react";
const Tour = ({id,image,name,price,info, removeTour}) => {

    const [redmore, setReadmore] = useState(false);

    return (
        
        <div className="item" >
          <div className="card-item">
          <img src={image} alt={name} />
            <div className="info">
                <span> $ {price} </span>
                <h4>{name}</h4>
                <p>
                    {redmore ? info : `${info.substring(0, 200)}...` }
                    <button onClick={ () =>  setReadmore(!redmore) } > { redmore ? 'show less' : 'Read More' } </button>
                </p>
            </div>
            <button className="btn-one" onClick={ () => removeTour(id) } >Not Intrested</button>
          </div>
        </div>

           

         
    )

}


export default Tour;