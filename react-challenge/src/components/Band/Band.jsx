import React from "react";
import {Link} from 'react-router-dom'
const Band = ({idBand,bandName,genre,country,year,members,albums}) => {
  return (
    <div className="card m-3">
      <div className="card-body">
        <h4 className="card-title">{bandName}</h4>
        <h5 className="card-subtitle mb-2 text-muted">{country}</h5>
        <h5 className="card-text">
          <p className="lead">Genre: {genre}</p>
        </h5>

       <h5>Foundation</h5>
        <p className="lead">{year}</p>
       <h5 className="card-text">Members</h5>
       <ul className='mb-3'>
         {members.map((member,index)=><li key={index} className="lead decoration-none" style={{listStyle:"none"}}>{member.name}</li>)}
       </ul>
        <Link to={`/music/${idBand}`} className="btn btn-success">View Albums</Link>
      </div>
    </div>
  );
};

export default Band;
