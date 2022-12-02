import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../component/Card'

const Peppers = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/seeds")
    .then(res => setPosts(res.data))
    }, [])

  return (
    <div className='container mb-5'>
      <h3>Peppers</h3>
      <p>Sweet and hot peppers are warm-season vegetables that thrive in sunny gardens with well-drained soil. They can also be grown in raised beds and containers. While growing hot peppers is very popular, gardeners like to grow a variety of heat levels, from the sweet and crisp California Wonder Sweet Pepper, to cayenne peppers, to the fiery hot ghost peppers. While sweet peppers are usually eaten fresh or frozen, many of the hot pepper varieties are dried and used for seasoning. Peppers are usually started from seed indoors about six weeks before the last spring frost date. Because pepper plants have attractive, lush foliage, some gardeners incorporate them into the edible landscape.</p>
      <div className="row container">
      {posts.map((data,key)=>
      <div className="col-sm-4" key={key}>
      {data.type === "Peppers" && <Card Name={data.name} img={data.img}/>}
      </div>
      )}
      </div>
    </div>
  )
}

export default Peppers
