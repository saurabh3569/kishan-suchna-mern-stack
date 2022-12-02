import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../component/Card'

const CoverCrops = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/seeds")
    .then(res => setPosts(res.data))
    }, [])

  return (
    <div className='container mb-5'>
      <h3>Cover Crops</h3>
      <p>Home gardeners have long relied on planting cover crops, such as White Dutch Clover and Buckwheat, to enrich the garden soil, to suppress weeds and to prevent topsoil loss. Sometimes called green manures, cover crops are often turned into the soil to add organic matter and nutrients to the soil. Sometimes gardeners will also plant cover crop seed so that the soil isn't left bare and exposed. Bare soil is susceptible to erosion and top soil loss. Also, weeds tend to grow in bare soil. Planting cover crops can be a way to suppress weeds. Some cover crops can also enhance the garden by attracting pollinators.</p>
      <div className="row container">
      {posts.map((data,key)=>
      <div className="col-sm-4" key={key}>
      {data.type === "CoverCrops" && <Card Name={data.name} img={data.img}/>}
      </div>
      )}
      </div>
    </div>
  )
}

export default CoverCrops
