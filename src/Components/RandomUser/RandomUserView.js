import { useState, useEffect } from 'react'
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa'
const url = 'https://randomuser.me/api/'
const defaultImage = 'https://randomuser.me/api/portraits/men/75.jpg'

const RandomUserView =  () =>  {

  const [loading, setloading] = useState(true);
  const [person, setPerson] = useState(null);
  const [title, setTitle] = useState('name');
  const [value, setValue] = useState('Random person');
  


  const getPerson = async () => {
    setloading(true);
    const reponse = await fetch(url);
    const data = await reponse.json();

    const person = data.results[0];

    const { phone , email } = person;
    const {large: image} = person.picture;
    const {login: {password}, } = person;
    const {first, last} = person.name;
    const {dob: {age}, } = person;
    const { street: {number , name}, } = person.location
    const newPerson = {
        image,
        phone,
        email,
        password,
        age,
        street: `${number} ${name}`,
        name: `${first} ${last}`
    }

    setPerson(newPerson);
    setTitle('name');
    setValue(newPerson.name);
    setloading(false);

  }

  
  useEffect(() => {
    getPerson()

  }, [])

  
  const handleValue = (e) => {
      if (e.target.classList.contains("icon")) {
        const newValue = e.target.dataset.label;

        const active = document.querySelector('.active-btn');
        if( active ){
          active.classList.remove('active-btn');
          e.target.classList.add('active-btn');
        }

        setTitle(newValue);
        setValue(person[newValue]);

      }
  }





  
  return (
      <div className="random-user the-main ">
          <div className="container">
              <h2> random user starter </h2>

              <div className="card-person">
                  <div className="details">
                      <div className="img">
                          <img 
                          src={ (person && person.image) || defaultImage}
                          alt="img"
                          className="user-img" />
                       </div>

                    <p className="user-title" >My {title} is</p>
                    <p className="user-value"> {value} </p>

                    <div className="values-list">
                        <button className="icon active-btn" data-label="name" onMouseOver={ handleValue }> <FaUser /> </button>
                        <button className="icon" data-label="email" onMouseOver={ handleValue }> <FaEnvelopeOpen /> </button>
                        <button className="icon" data-label="age" onMouseOver={ handleValue }> <FaCalendarTimes /> </button>
                        <button className="icon" data-label="street" onMouseOver={ handleValue }> <FaMap /> </button>
                        <button className="icon" data-label="phone" onMouseOver={ handleValue }> <FaPhone /> </button>
                        <button className="icon" data-label="password" onMouseOver={ handleValue }> <FaLock /> </button>
                    </div>

                    <button className="btn-one" type="button" onClick={getPerson}>
                        { loading ? "Loading..." : "Random User" }
                    </button>
           
                </div>
                </div>
          </div>
      </div>
  )

}

export default RandomUserView