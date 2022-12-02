import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../component/Card'

const Herbs = () => {
  
	const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/seeds")
    .then(res => setPosts(res.data))
    }, [])

  return (
    <div className='container mb-5'>
      <h3>Herbs</h3>
	  <p>Both beginning and experienced gardeners love growing herbs. They're easy to grow in containers, flower beds, vegetable gardens and raised garden beds. Growing your own herbs gives you a steady supply of fresh herbs for your recipes, and you can dry some for later use. When growing herbs, many gardeners choose the ones they use most in their recipes. Some popular herbs include basil, dill, cilantro, thyme, parsley and mint. Most herbs grow best in full sun. Depending on your grow zone, herbs may grow as annuals or perennials. Some herbs, like basil, are started from seed indoors and then moved outdoors when the weather warms. Others, like dill, are sometimes directly sown into the garden soil</p>
      <div className="row container">
      {posts.map((data,key)=>
      <div className="col-sm-4" key={key}>
      {data.type === "Herbs" && <Card Name={data.name} img={data.img}/>}
      </div>
      )}
      </div>
    </div>
  )
}

export default Herbs
