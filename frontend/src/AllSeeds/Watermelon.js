import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../component/Card'

const Watermelon = () => {
  
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/seeds")
    .then(res => setPosts(res.data))
    }, [])

  return (
    <div className='container mb-5'>
      <h3>Watermelon</h3>
      <p>Watermelons are a refreshing summertime treat and a favorite fruit for snacking and cutting up for fruit salads. Both seeded and seedless watermelons can be grown in home gardens. If planting a seedless variety, a seeded watermelon variety should be planted for proper pollination. When selecting watermelon varieties, note the size of mature fruits. Some watermelons may be "personal" sized, or 5 lbs., and some may weigh 40 lbs. or more. Watermelon vines grow best in full sun and in well-drained soil. Some other considerations when selecting watermelon varieties for the home garden are the fruit flavor, seeded or seedless, yields, disease resistance of the plants, and days until maturity.</p>
      <div className="row container">
      {posts.map((data,key)=>
      <div className="col-sm-4" key={key}>
      {data.type === "Watermelon" && <Card Name={data.name} img={data.img}/>}
      </div>
      )}
      </div>
    </div>
  )
      }

export default Watermelon
