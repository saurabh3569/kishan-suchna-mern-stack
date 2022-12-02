import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../component/Card'

const Carrots = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/seeds")
    .then(res => setPosts(res.data))
    }, [])

  return (
    <div className='container mb-5'>
      <h3>Carrots</h3>
      <p>Children, beginning gardeners and experienced gardeners enjoy growing carrots in home gardens. These popular vegetables are available in an array of colors, including orange, red, purple and white. Their crunchy, sweet roots are excellent for snacking and eating fresh as well as roasting, baking and cooking into a variety of recipes. Carrots grow best in well-drained, loamy or sandy soils. If growing carrots in clay soils, consider amending the soil with compost and selecting carrot varieties that are suitable for growing in clay soils. Carrots can also be grown in raised garden beds and containers. Before sowing carrot seed, loosen the soil at least 8 inches deep.</p>
      <div className="row container">
      {posts.map((data,key)=>
      <div className="col-sm-4" key={key}>
      {data.type === "Carrots" && <Card Name={data.name} img={data.img}/>}
      </div>
      )}
      </div>
    </div>
  )
}

export default Carrots
