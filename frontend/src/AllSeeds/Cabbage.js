import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../component/Card'

const Cabbage = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/seeds")
      .then(res => setPosts(res.data))
  }, [])

  return (
    <div className='container mb-5'>
      <h3>Cabbage </h3>
      <p>Homegrown cabbage is delicious and nutritious and can be eaten fresh, baked, steamed, and made into slaws and sauerkraut. Cabbage grows best in the cooler temperatures of spring and fall. Because of this, most gardeners start cabbage seeds indoors about 6-8 weeks before they plan to transplant the seedlings to the garden. When selecting cabbage seed to grow in the home garden, consider how you want to use it. Cabbage varieties that produce smaller heads are ideal for making into slaws, baking, sautéing and steaming. Other cabbage varieties produce very large heads that are ideal for chopping up and using to make sauerkraut. Like most other vegetables, cabbage grows best in full sun.</p>
      <div className="row container">
      {posts.map((data,key)=>
      <div className="col-sm-4" key={key}>
      {data.type === "Cabbage" && <Card Name={data.name} img={data.img}/>}
      </div>
      )}
      </div>
    </div>
  )
}

export default Cabbage
