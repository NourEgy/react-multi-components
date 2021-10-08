import { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = 'https://course-api.com/react-tabs-project';

const ViewTabs = () => {

    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [value, setValue] = useState(0);

   

    const fetchJobs = async () => {
        const res = await fetch(url);
        const newJob = await res.json();
        setJobs(newJob);
        setLoading(false);
    };

    useEffect(() => {

        fetchJobs();


    }, [])

    if (loading) {
        return (
         <div className="container"> <h2 className="title">loading...</h2></div>
       )
    }


    const { title, dates, duties, company } = jobs[value];
 
    return (
        
            <div className="ViewTabs">
            <div className="container">
                 <h2 className="title">Experience</h2>
                 <div className="btns-tabs">
                     {jobs.map( ( item , index ) => {
                         return <button className={`btn ${index === value && 'active'}`} key={index} onClick={ () => setValue(index)} > { item.company } </button>
                     } )}
                 </div>
                 <div className="job-info">

                        <h4> {title} </h4>
                        <h5> {company} </h5>
                        <span> {dates} </span>

                        {duties.map( (det, index) => {
                            return (
                                <div className="job-desc" key={index}>
                                <span><FaAngleDoubleRight /></span>  <p>   {det} </p>
                                </div>
                            )
                        } )}
                        
                        
                 </div>
            </div>
            </div>
        
    )

}


export default ViewTabs;