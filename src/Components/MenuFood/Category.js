const Category = ( {filterItems , categoris} ) => {




    return (
        
            <div className="category">

                {categoris.map( (category, index) => {
                    return (
                        <button
                         key={index}
                         type="button"
                        className="btn"
                        onClick={ () => filterItems(category) }
                        > {category} </button>
                    )
                } )}
  
                    
            
            </div>
        
    )

}


export default Category;