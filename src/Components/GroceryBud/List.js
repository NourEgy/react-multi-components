import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({items, removeItem, editItem}) => {

    return (
    
            <div className="List">

                 <h2 className="title">List Component</h2>

                {items.map((item) => {
                    const {title, id} = item;
                    return (    
                        <div className="the-item" key={id}>
                            <h5>{title}</h5>
                            <button type="button" className="edit-btn" onClick={() => editItem(id)}> <FaEdit /> </button>
                            <button type="button" className="delete-btn" onClick={() => removeItem(id)}> <FaTrash /> </button>
                        </div>
                    )
                })}
   
            </div>
        
    )

}


export default List;