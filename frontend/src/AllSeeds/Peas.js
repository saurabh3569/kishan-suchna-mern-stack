import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../component/Card'

const Peas = () => {
  
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/seeds")
    .then(res => setPosts(res.data))
    }, [])

  return (
    <div className='container mb-5'>
      <h3>Peas</h3>
	  <p>A favorite of home gardeners, pea seeds are one of the first crops to plant in the spring. These cool-season vegetables are planted in early spring and harvested in early summer. Some of the most popular peas to grow are shell peas, also known as garden peas or English peas. Shell peas are grown for their seeds, not the pods. Snow peas, grown for their pods, are favorites for snacking, eating in salads and sautéing. Snap peas are a cross between snow peas and shell peas. All peas grow best in full sun and well-drained soil rich in organic matter. Peas don't like hot weather and stop producing when the temperatures get hot. Most pea varieties grow tall and require a trellis, fence or support.</p>
      <div className="row container">
      {posts.map((data,key)=>
      <div className="col-sm-4" key={key}>
      {data.type === "Peas" && <Card Name={data.name} img={data.img}/>}
      </div>
      )}
      </div>
    </div>
  )
}

export default Peas
