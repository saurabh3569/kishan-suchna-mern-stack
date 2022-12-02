import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../component/Card'

const Spinach = () => {
  
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/seeds")
    .then(res => setPosts(res.data))
    }, [])

  return (
    <div className='container mb-5'>
      <h3>Spinach</h3>
      <p>Because it grows quickly, spinach is a favorite for growing in the garden. You can begin harvesting spinach at baby leaf stage about 40 days after sowing seeds. Spinach is a cool-season crop that's sown in early spring and harvested in late spring to early summer. It can also be grown in the fall garden. You can also grow spinach in raised garden beds and containers. Spinach, like most other vegetables, grows best when planted in well-drained soil that's rich in organic matter. Harvest spinach at either the baby leaf stage or at the mature stage. One of the most popular spinach varieties is Bloomsdale Long Standing Spinach. It produces thick, crinkly, dark green leaves that are packed full of flavor.</p>
      <div className="row container">
      {posts.map((data,key)=>
      <div className="col-sm-4" key={key}>
      {data.type === "Spinach" && <Card Name={data.name} img={data.img}/>}
      </div>
      )}
      </div>
    </div>
  )
}

export default Spinach
