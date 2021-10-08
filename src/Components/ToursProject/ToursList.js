import Tour from "./Tour"
const ViewList = ({tours, removeTour}) => {

    return (
        
            <div className="ViewTrous">
                <div className="container">

                    <h2>Our Tours</h2>

                    <div className="row">

                        {tours.map( (tour) => {
                            return <Tour  key={tour.id} {...tour} removeTour={removeTour} />
                        } )}


                    </div>
                </div>

            </div>
        
    )

}


export default ViewList;