import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../component/Card'

const Pumpkins = () => {
  
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/seeds")
    .then(res => setPosts(res.data))
    }, [])

  return (
    <div className='container mb-5'>
      <h3>Pumpkins</h3>
	  <p>Many gardeners find pumpkins one of the most rewarding vine crops to grow. Fresh pumpkin makes exceptional pies, soups and desserts—and roasted pumpkin seeds are a treat. Pumpkins are also used for carving into jack-o'-lanterns and displaying with fall decorations. Some gardeners enjoy growing giant pumpkins for display or entering into giant pumpkin contests at county fairs. When growing pumpkins, keep in mind that they are warm-season vegetable and don't handle frost. When growing pumpkins, wait to plant them in the garden until danger of spring frost has passed. Like other vine crops, pumpkin vines can take up quite a bit of space in the garden. Pumpkins are planted in hills and grow best in full sun and well-drained soil.</p>
      <div className="row container">
      {posts.map((data,key)=>
      <div className="col-sm-4" key={key}>
      {data.type === "Pumpkins" && <Card Name={data.name} img={data.img}/>}
      </div>
      )}
      </div>
    </div>
  )
}

export default Pumpkins
