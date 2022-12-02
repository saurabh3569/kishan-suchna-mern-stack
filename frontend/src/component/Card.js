import React from 'react'

const Card = (props) => {

  const mystyle = ({ "width": "18rem" })

  return (
    <div className="container mx-4 my-4">
            <div className="card mx-2 my-2" style={mystyle}>
                <img src={props.img} className="card-img-top" alt="Pick A Bushel Hybrid Cucumber.png" />
                <div className="card-body">
                    <h5 className="card-title text-center">{props.Name}</h5>
                    <div className="text-center">
                    </div>
                </div>
            </div>
        </div>
  ) 
}

export default Card
