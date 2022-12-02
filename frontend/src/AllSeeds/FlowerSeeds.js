import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../component/Card'

const FlowerSeeds = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/seeds")
      .then(res => setPosts(res.data))
  }, [])

  return (
    <div className='container mb-5'>
      <h3>Flower Seeds</h3>
      <p>An easy and economical way to add cheery color to the landscape and to attract pollinators is to plant sunflowers and other annual flowers from seed. Some of the most popular flower seed packets are sunflowers. Sunflowers are easy to grow from seed and can quickly grow into tall flowers. Some sunflowers are grown for their edible seed heads while other sunflowers are used as cut flowers. Gardeners can also grow flower seed packets that contain a variety of flowers. Because these often have a range of bloom times, they're great for continuous color and for providing a supply of nectar to pollinators over weeks or even months.</p>
      <div className="container row">
        {posts.map((data, key) =>
          <div className="col-sm-4" key={key}>
            {data.type === "FlowerSeeds" && <Card Name={data.name} img={data.img} />}
          </div>
        )}
      </div>
    </div>
  )
}

export default FlowerSeeds
