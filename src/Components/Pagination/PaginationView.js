import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'

const PaginationView = () => {
    const { loading, data } = useFetch()
    const [page, setPage] = useState(0)
    const [followers, setFollowers] = useState([])

    useEffect(() => {
        if (loading) return
        setFollowers(data[page])
    }, [loading, page])

    const handlePage = (index) => {
        setPage(index);

    }
    const nextPage = () => {
        setPage((oldPage) => {
            let nextPage = oldPage + 1;
            if  (nextPage > data.length - 1) {
                nextPage = 0
            }
            return nextPage
        } )
    }

    const prevPage = () => {
        setPage((oldPage) => {
            let prevPage = oldPage - 1;
            if  (prevPage < 0) {
                prevPage = data.length - 1 
            }
            return prevPage
        } )
    }

  return (
        <div className="pagination-view the-main">
            <div className="container">
             <h2 className="title"> {loading ? "Loading.." : "Pagination title"}  </h2>
            <div className="row">
            {followers.map((follower) => {
                return <Follower key={follower.id} {...follower} />
            })}
            </div>
            

            {!loading && <div className="paginate"> 
                {page === 0 ? null : (
                <button onClick={prevPage} >Prev</button>
                )}

               
                {data.map((number, index) => {
                    return <button className={` ${index === page ? 'active': null }  `}  key={index} onClick={ () => handlePage(index)}> {index + 1} </button>
                })}  
                 

                 {page ===  data.length - 1 ? null : (
                    <button onClick={nextPage} >Next</button>  
                    )}
            </div>}
            </div>
         
        </div>
    )
}

export default PaginationView