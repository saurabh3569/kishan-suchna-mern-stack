import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../component/Card'

const Beans = () => {


	const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/seeds")
    .then(res => setPosts(res.data))
    }, [])

  return (
    <div className='container'>
      <h3>Beans</h3>
      <p>Beans are some of the most popular vegetables among home gardeners. The large seeds can be directly sown into the garden soil. The plants produce nutritious and delicious pods and seeds. Select from a wide variety of bean seed packets for sale online, including bush beans, pole beans, lima beans and more. All bean plants grow best in full sun (at least six hours of direct sunlight daily) and well-drained soil. For disease prevention and control, make sure your bean plants get plenty of sun and air circulation and aren't overcrowded. Also avoid handling the plants when they are wet. If you are growing pole beans, provide them with a trellis for support. Some gardeners plant pole beans with corn so the bean vines can scramble up the corn stalks. When selecting beans to grow in the garden, consider how you want to use them. Snap beans are grown for their pods, while other beans are grown for their seeds.</p>
      <div className="row container">
      {posts.map((data,key)=>
      <div className="col-sm-4" key={key}>
      {data.type === "Beans" && <Card Name={data.name} img={data.img}/>}
      </div>
      )}
      </div>
    </div>
  )
}

export default Beans
