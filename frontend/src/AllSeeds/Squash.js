import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../component/Card'

const Squash = () => {
  
	const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/seeds")
    .then(res => setPosts(res.data))
    }, [])

  return (
    <div className='container mb-5'>
      <h3>All Seeds</h3>
      <p>Growing plants from seeds is the ultimate gardening experience. It's so rewarding to sow seeds in the dirt, water them, and watch them emerge and grow into lush and vibrant plants. Farmer Seed and Nursery offers a wide selection of flower, vegetable and herb seeds. Choose from vegetable seeds like beans, tomatoes, corn and peppers, as well as flower seeds, including popular sunflower seeds and wildflower seeds. When buying seeds for sowing in the home garden, make sure the variety will grow in your hardiness zone. Other factors to consider are light and soil requirements, mature height, and days to maturity.</p>
      <div className="row container">
      {posts.map((data,key)=>
      <div className="col-sm-4" key={key}>
      {data.type === "Squash" && <Card Name={data.name} img={data.img}/>}
      </div>
      )}
      </div>
    </div>
  )
}

export default Squash
