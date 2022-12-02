import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from '../component/Card'

const Beets = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/seeds")
      .then(res => setPosts(res.data))
  }, [])

  return (
    <div className='container'>
      <h3>Beets</h3>
      <p>A favorite for both their roots and their tops, beets are a cool-season root vegetable. The roots can be eaten fresh, canned or pickled. Baby beet greens are used in salads, while more mature beet greens are often steamed or sautéed. The roots can be eaten fresh, canned or pickled. Beet seed can be sown in the spring for an early summer harvest or in the late summer for a fall harvest. Beets grow best when planted in full sun (six or more hours of direct sunlight daily) and in well-drained soil. To speed up germination, many gardeners soak beet seeds in lukewarm water overnight before sowing into the garden. When selecting what beet seed packets to buy online, start by deciding how you want to use them. Some varieties produce uniform roots that are ideal for canning while others are flavor favorites for eating fresh.
      </p>
      <div className="row container">
        {posts.map((data,key) =>
          <div className="col-sm-4" key={key}>
            {data.type === "Beets" && <Card Name={data.name} img={data.img} />}
          </div>
        )}
      </div>
    </div>
  )
}

export default Beets
