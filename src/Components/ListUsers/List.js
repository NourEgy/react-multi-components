const List = ( {people} ) => {
  
    return (
        
            <>
                
                {people.map( (persone) => {

                    const {name, age, image} = persone;

                    return  (
                    <div className="list" key={persone.id} {...persone}>
                        <img src={image} alt={name}  />
                        <div className="info">
                            <h4>{name}</h4>
                            <p> {age} years</p>
                        </div>
                    </div>
                    )
                    
                } )}
                
             </>
        
    )

}


export default List;