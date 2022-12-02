import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../component/Card'

const Melons = () => {
  
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/seeds")
    .then(res => setPosts(res.data))
    }, [])

  return (
    <div className='container mb-5'>
      <h3>Melons</h3>
      <p>Growing melons in the home garden is so rewarding—and homegrown melons are a sweet, summertime treat. Watermelon and cantaloupe are some of the favorite melons for home gardeners. While large melons are quite popular, more and more gardeners are growing smaller, personalized-sized melons. Melons grow best in full sun and in well-drained soil rich in organic matter. Melon seed can be started indoors about 4-6 weeks before the last spring frost date or can be directly sown into raised planting hills in the garden. Sow melon seed in the garden about a week before the last spring frost date for your area. Make sure you leave plenty of space for the melon vines, as they will spread.</p>
      <div className="row container">
      {posts.map((data,key)=>
      <div className="col-sm-4" key={key}>
      {data.type === "Melons" && <Card Name={data.name} img={data.img}/>}
      </div>
      )}
      </div>
    </div>
  )
}

export default Melons
