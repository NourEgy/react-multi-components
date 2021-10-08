import { useState } from "react"
import Items from "./Data"
import Menu from "./Menu"
import Category from "./Category"

const allCategoris = ['all', ...new Set(Items.map( (item) => item.category))];



const ViewMenu = () => {

    const [menuItems, setMenuItems] = useState(Items);
    const [categoris, setCategoris] = useState(allCategoris);


    const filterItems = (category) => {

        if (category === 'all') {
            setMenuItems(Items);
            return;
        }
        
        const newItem = Items.filter( (item) => item.category === category );
        setMenuItems(newItem);
    };
    
    return (
        
            <div className="ViewQuestions">

                <div className="container">
                <h2 className="title"> Category Menu </h2>

                <Category filterItems={filterItems} categoris={categoris}  Items={Items} />
                <Menu Items={menuItems} />
                    
                </div>

            </div>
        
    )

}


export default ViewMenu;