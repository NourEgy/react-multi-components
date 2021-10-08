

const Menu = ( { Items } ) => {



    return (
        
            <div className="Menu row">
                             
                    { Items.map((menuItem) => {
                        const { id, title, category, price, img, desc } = menuItem;
                        return (
                            <div className="item" key={id}>
                            <div className="menu-item">
                                  <img src={img} alt={title} />
                                <div className="footer-item">

                                <strong> {category} </strong> 
                                  <h4> {title} </h4>
                                  <span> {price} </span>
                                  
                                  <p> {desc} </p>

                             </div>  
                              </div>
                            </div>
                        )
                    }) }

            </div>
        
    )

}


export default Menu;