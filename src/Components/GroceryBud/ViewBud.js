import { useState, useEffect } from "react";
import List from "./List"
import Alert from "./Alert"


const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    
    if (list) {
        return JSON.parse(localStorage.getItem('list'));
    }
    else {
        return []
    }
}

const ViewBud = () => {

    const [name, setName] = useState('');
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [alert, setAlert] = useState({ 
        show: false,
        msg: '',
        type: ''
    });

    
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("welcome");
        if (!name) {
            showAlert(true, 'please Inter Value', 'danger');
        }

        else if ( name && isEditing ) {
           setList(
            list.map( (item) => {
                if (item.id === editID) {
                    return {...item, title: name} 
                }
                return item;
            } )
           )
           setName('');
           setEditID(null);
           setIsEditing(false);
           showAlert(true, 'Yor Item Is Eddting', 'Success');
        }

        else {
            // show alert
            showAlert(true, 'Item Added to the list', 'Success');
            const newItem = { id: new Date().getTime().toString(), title: name };
            setList([...list, newItem]);
            setName('');

        }
    }

    const showAlert = (show=false, msg="", type="") => {
        setAlert({show, msg, type});
    }

    const clearItems = () => {
        showAlert(true, 'List Empty', 'danger');
        setList([]);
    }

    const removeItem = (id) => {
        showAlert(true, 'Item Removed', 'danger');
        setList(list.filter((item) => item.id !== id ));
    }

    const editItem = (id) => {
      
        const spefictItem = list.find((item)=> item.id === id ); 
        setIsEditing(true);
        setEditID(id);
        setName(spefictItem.title);
    }


    useEffect(() => {
        localStorage.setItem( 'list', JSON.stringify(list) );
    }, [list])
    return (
    
            <div className="ViewBud">
            <div className="container">
                 <h2 className="title">ViewBud</h2>
                <div className="item-list">

                 <form onSubmit={handleSubmit}>

                     {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} /> }

                     <h3> Grocer Bud </h3>
                     <div className="form-control">
                        <input type="text" placeholder=" e. g. eggs "  value={name} onChange={ (e) => setName(e.target.value) } />
                        <button type="submit" className="btn-one"> {isEditing ? 'Edit' : 'Submit'} </button>
                     </div>

                 </form>


                
               
                 {list.length > 0 && ( 
                    <div className="the-list">
                        <List items={list} removeItem={removeItem} editItem={editItem} />
                        <button className="btn-one" onClick={clearItems}>Clear items</button>
                    </div>
                 )}


                 </div>
         
            </div>
            </div>
        
    )

}


export default ViewBud;