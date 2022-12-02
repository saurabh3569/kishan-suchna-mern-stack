import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../component/Card'

const AllVegetableSeeds = () => {

	const [posts, setPosts] = useState([])

	useEffect(() => {
	  axios.get("http://localhost:5000/api/v1/seeds")
		.then(res => setPosts(res.data))
	}, [])

  return (
    <div className='container'>
      <h3>All Vegetable Seeds</h3>
      <p>Growing vegetable plants from seeds is so rewarding for home gardeners. Many vegetable seeds are directly sown into the outdoor garden or raised garden bed. These include beans, peas, corn and lettuce. Vegetables like tomatoes and peppers have a longer growing season and are often started from seed indoors about six weeks before the last spring frost date. The tomato and pepper seedlings are then transplanted to the garden. When selecting vegetable seed packets for home gardens, start with deciding what you'd like to grow. Then narrow your selections to your flavor favorites. Other factors that go into determining what vegetable seeds to buy are days to maturity, soil and light requirements, yields and disease resistance.</p>
      <div className="row container">
      {posts.map((data)=>
      <div className="col-sm-4">
      {<Card Name={data.name} img={data.img}/>}
      </div>
      )}
      </div>
    </div>
  )
}

export default AllVegetableSeeds
