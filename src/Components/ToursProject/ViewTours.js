import React, { useState,useEffect } from "react"
import Loading from "./Loading"
import ToursList from "./ToursList"

// Url Like data.js have all data te set in my site
const url = 'https://course-api.com/react-tours-project';

const ViewTours = () => {

    const [loading, setLoading] = useState(true);

    const [tours, setTour] = useState([]);

    const removeTour = (id) => {
        const newTour = tours.filter( (tour) => tour.id !== id );
        setTour(newTour);
    } 
    const fetchTours = async () => {
        try {
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            setTour(tours);
        } catch  (error) {
            setLoading(error);
            console.log(error);
        }

    }


    useEffect(() => {

        fetchTours();

    }, [])


    if ( loading ) {
        return (
            <main>
                <Loading />
            </main>
        )
    }

    if ( tours.length === 0 ) {
        return (
            <div className="top-tours container">
                 <h2 className="title"> No Tours Left </h2>
                   <button  className="btn-one"  onClick={fetchTours} > Refresh </button>
            </div>
        )
    }

    return (
        
            <div className="ViewTrous">
                <div className="container">

                    <h2><ToursList tours={tours} removeTour={removeTour} {...tours} /></h2>

                </div>

            </div>
        
    )

}


export default ViewTours;