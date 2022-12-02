import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../component/Card'

const Grass = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/seeds")
      .then(res => setPosts(res.data))
  }, [])

  return (
    <div className='container mb-5'>
      <h3>Grass</h3>
      <p>Planting grass seed is the most economical way to grow a beautiful new lawn or freshen up an existing lawn. When selecting the best grass seed for your lawn, take into account your grow zone and how much direct sunlight your yard receives. Some grass seed is more suitable for areas that receive some shade. When planting grass seed, it's important that you prepare the planting area. Grass seed does not germinate as well when spread on rock-hard soil. Till or spade the soil so that it is a fine, granular texture. Grass seed is usually sown using a spreader. After sowing, make sure the grass seed bed receives regular watering.</p>
      <div className="row container">
        {posts.map((data, key) =>
          <div className="col-sm-4" key={key}>
            {data.type === "Grass" && <Card Name={data.name} img={data.img} />}
          </div>
        )}
      </div>
    </div>
  )
}

export default Grass
