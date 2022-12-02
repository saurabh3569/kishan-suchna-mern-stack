import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../component/Card'

const Lettuce = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/seeds")
    .then(res => setPosts(res.data))
    }, [])

  return (
    <div className='container mb-5'>
      <h3>Lettuce</h3>
      <p>A favorite in all types of gardens, including children's gardens and container gardens, lettuce is easy-to-grow, nutritious and can be harvested at the baby leaf stage in just 30-40 days after sowing. A cool-season vegetable, lettuce seed can be sown in the garden in early spring as soon as the ground can be worked. To ensure a longer harvest, sow lettuce seed every two weeks throughout the spring. Lettuce can also be planted in late summer for a fall harvest. When choosing lettuce seed to buy, choose from a variety of lettuce types including loose leaf, butterhead, romaine or cos, and crisphead. Lettuce can be grown in the garden, raised beds and containers.</p>
      <div className="row container">
      {posts.map((data,key)=>
      <div className="col-sm-4" key={key}>
      {data.type === "Lettuce" && <Card Name={data.name} img={data.img}/>}
      </div>
      )}
      </div>
    </div>
  )
}

export default Lettuce
