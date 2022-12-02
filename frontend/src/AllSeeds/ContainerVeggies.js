import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../component/Card'

const ContainerVeggies = () => {

	const [posts, setPosts] = useState([])

	useEffect(() => {
	  axios.get("http://localhost:5000/api/v1/seeds")
	  .then(res => setPosts(res.data))
	  }, [])

  return (
    <div className='container mb-5'>
      <h3>Container Veggies</h3>
      <p>Container gardening continues to grow in popularity. Gardeners with limited space grow vegetables in containers on sunny decks, porches and patios. Growing vegetables in containers also cuts down on time spent weeding. Many vegetable varieties used for container gardening have smaller or more compact habits. When growing vegetables and herbs in pots, make sure the pots that you use have adequate drainage. Most vegetable plants grow best in full sun, or at least six or more hours of direct sunlight daily. Other factors to consider when selecting vegetables for container gardening are their soil requirements, water needs, mature height and spread and harvest time.</p>
      <div className="row container">
      {posts.map((data,key)=>
      <div className="col-sm-4" key={key}>
      {data.type === "ContainerVeggies" && <Card Name={data.name} img={data.img}/>}
      </div>
      )}
      </div>
    </div>
  )
}

export default ContainerVeggies
