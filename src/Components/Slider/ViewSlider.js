import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Data from './Data'


const ViewSlider = () => {

    const [people, setPeople] = useState(Data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = people.length -1;
        
        if ( index < 0 ) {
            setIndex(lastIndex);
        }

        if ( index > lastIndex ) {
            setIndex(0);
        }

    }, [index, people]);

/*
    useEffect(() => {
        setInterval(() => {
            setIndex(index + 1);
        }, 3000);

    }, [index]);*/

    
    


    return (
    
            <div className="ViewSlider">
            <div className="container">
                 <h2 className="title">ViewSlider</h2>

                <div className="item-slider">
                {people.map( (person, personIndex) => {
                    const { id, image, name, title, quote } = person;

                    let position = 'nextSlide';

                    if ( personIndex === index ) {
                        position = 'activeSlide';
                    }

                    if ( personIndex === index -1  || ( index === 0 && personIndex === people.length -1 )) {
                        position = 'lastSlide';
                    }

                    
                    return (
                        <article className={`slider-item ${position}`}key={id}>
                            <div className="img">
                                 <img src={image} alt={name} />
                            </div>
                            <h4> {name} </h4>
                            <p> {title} </p>
                            <p> {quote} </p>
                            
                        </article>
                    )
                } )}

<div className="btns-nav">
                    <button className="prev" onClick={() => setIndex( index - 1 )}> <FaArrowLeft /> </button>
                    <button className="next"  onClick={() => setIndex( index + 1 )}> <FaArrowRight /> </button>
                </div>
                    </div>
              
         
            </div>
            </div>
        
    )

}


export default ViewSlider;