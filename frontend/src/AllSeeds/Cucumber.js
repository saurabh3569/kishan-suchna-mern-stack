import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../component/Card'

const Cucumber = () => {
  
	const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/seeds")
    .then(res => setPosts(res.data))
    }, [])

  return (
    <div className='container mb-5'>
      <h3>Cucumber</h3>
	  <p>Cucumbers are one of the most popular vine crops to grow in the home garden. These vegetables are generally described as slicing or pickling cucumbers. Eaten fresh in salads and on relish trays, slicing cucumbers usually have non-bitter skins, small seed cavities and a refreshingly sweet flavor. Some varieties may be burpless cucumbers. Pickling cucumbers are usually smaller than slicers and are ideal for making into pickles. Dual purpose cucumber varieties are also available. Most cucumbers grow on sprawling vines, but cucumbers with a bush or more compact habit are also available and ideal for gardeners with limited space. Cucumber seed can be directly sown in the garden or started indoors.</p>
      <div className="row container">
      {posts.map((data,key)=>
      <div className="col-sm-4" key={key}>
      {data.type === "Cucumber" && <Card Name={data.name} img={data.img}/>}
      </div>
      )}
      </div>
    </div>
  )
}

export default Cucumber
