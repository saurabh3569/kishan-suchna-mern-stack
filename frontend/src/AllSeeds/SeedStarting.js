import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../component/Card'

const SeedStarting = () => {
  
	const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/seeds")
    .then(res => setPosts(res.data))
    }, [])

  return (
    <div className='container mb-5'>
      <h3>Seed Starting</h3>
	  <p>Get a jump-start on the gardening season by starting vegetable, herb and flower seeds indoors. Many gardeners sow tomato, pepper and other seeds indoors about 4-8 weeks before the last spring frost date. Once the weather and soil warms, they transplant the seedlings to the garden. Starting seeds indoors is more economical than buying potted plants—and you often have a greater selection of seed choices than plant choices. Before starting seeds indoors, make sure you have all the seed-starting supplies you need, such as peat pellets and peat pots as well as Hotkaps, a great product for promoting better germination and growth.</p>
      <div className="row container">
      {posts.map((data,key)=>
      <div className="col-sm-4" key={key}>
      {data.type === "SeedStarting" && <Card Name={data.name} img={data.img}/>}
      </div>
      )}
      </div>
    </div>
  )
}

export default SeedStarting
