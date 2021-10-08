import { useState } from "react";
import Perople from "./Data"
import { FaBeer , FaRegComment, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
const ViewReviews = () => {

    const [index, setIndex] = useState(0);
    const { name, job, image, text } = Perople[index];


    const checkNumber = (number) => {
        if (number > Perople.length - 1) {
            return 0
        }
        if (number < 0 ) {
            return Perople.length -1
        }
        return number;
    }
    const NextPersone = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        })
    }
    const prevPersone = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        })
    }
    const randomPerson = () => {
        let randomNumber = Math.floor(Math.random() * Perople.length);
        if (randomNumber === index) {
            randomNumber = index + 1;
        }
        setIndex(checkNumber(randomNumber))
    }



  
    return (
        
            <div className="Reviews">
                <div className="container">
                    <h2 className="title">Reviews</h2>

         
                    <div className="reviews-item">
                        <div className="img">
                                <img src={image} alt={name} />
                                <span><FaRegComment /></span>
                        </div>
                        <h4> {name} </h4>
                        <p> {job} </p>
                        <p> {text} </p>
                        <div className="btns-nav">
                            <button onClick={prevPersone} ><FaArrowLeft /></button>
                            <button onClick={NextPersone} ><FaArrowRight /></button>
                        </div>
                        <button onClick={randomPerson}>Randm reviews</button>
                        </div>
               


              </div>
            </div>
        
    )

}


export default ViewReviews;