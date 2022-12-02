import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../component/Card'

const Corn = () => {

	const [posts, setPosts] = useState([])

	useEffect(() => {
	  axios.get("http://localhost:5000/api/v1/seeds")
	  .then(res => setPosts(res.data))
	  }, [])

  return (
    <div className='container mb-5'>
      <h3>Corn</h3>
      <p>Children and adults alike find growing corn so rewarding. There's nothing like the taste of fresh-picked sweet corn in the summertime. It's also fun to grow popcorn for wintertime snacking and ornamental corn for fall decorations. Depending on the variety, some popcorn doubles as ornamental corn. When selecting sweet corn seed for home gardens, color and flavor are big factors. Choose from white, yellow or bi-colored corn. Some sweet corn is super sweet while others have more of that old-time corn flavor. Another consideration is harvest time. Some corn varieties produce early in the corn seaso</p>
      <div className="row container">
      {posts.map((data,key)=>
      <div className="col-sm-4" key={key}>
      {data.type === "Corn" &&<Card Name={data.name} img={data.img}/>}
      </div>
      )}
      </div>
    </div>
  )
}

export default Corn
