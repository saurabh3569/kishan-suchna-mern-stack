import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../component/Card'

const Radish = () => {
  
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/seeds")
    .then(res => setPosts(res.data))
    }, [])

  return (
    <div className='container mb-5'>
      <h3>Radish</h3>
      <p>Easy to grow and maturing quickly, radishes are a spring garden favorite. After being sown in the garden, radishes germinate quickly and are often ready for harvest in a month. They add flavor and color to relish trays and salads. The oblong-shaped radishes are favorites for dipping. Because cooler temperatures promote milder-flavored roots, it's best to grow radishes as a spring or fall crop. Its quick germination makes radish seed a favorite for marking rows of slower germinating vegetables like carrots, beet and lettuce. Large tillage radishes are used as cover crops. Like other vegetables, radishes perform best in full sun and well-drained soil.</p>
      <div className="row container">
      {posts.map((data,key)=>
      <div className="col-sm-4" key={key}>
      {data.type === "Radish" && <Card Name={data.name} img={data.img}/>}
      </div>
      )}
      </div>
    </div>
  )
}

export default Radish
