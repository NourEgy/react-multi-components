import React, { useState } from "react"
import Data from "./Data"
import List from "./List"

const ViewList = () => {

    const [people, setPeople] = useState(Data);

    console.log(people.length);




    return (
        
            <div className="ViewList">
                <div className="container">

                    <h2>{people.length} Birthday Today</h2>

                    <List people={people} />

                    <button className="btn-one" onClick={() => setPeople([])} > Clear all </button>
                </div>

            </div>
        
    )

}


export default ViewList;