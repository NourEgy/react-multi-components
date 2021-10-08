
const Follower = ({ login , avatar_url,  html_url}) => {
  return (
      <div className="item-four">
        <div className="card-githup">
            <div className="img">
             <img src={avatar_url} alt={login} />
            </div>
         
          <h3> {login} </h3>
          <a className="btn-one" href={html_url} target="_blank"> View Profile </a>
      </div>

      </div>
      
  )
}

export default Follower