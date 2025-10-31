import React from 'react'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
    <div>
       <div className='parent'>
      <div className="card">
        <div className="top">
          <img src={props.brandLogo} alt="" />
          <button>Save <Bookmark size={20}/></button>
        </div>
        <div className="center">
              <h3>{props.companyName}</h3>
              <span>{props.datePosted}</span>
              <h2>{props.post}</h2>
              <div className='tag'><h4>Part time</h4>
              <h4>Senior level</h4>
              </div>
        </div>
        <div className="bottom" >
          <div className="left">
            <div>{props.pay}</div>
            <p>{props.location}</p>
          </div>
          <button>Apply</button>
        </div>
      </div>
      
    </div>
    </div>
  )
}

export default Card
