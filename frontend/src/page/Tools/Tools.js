import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './tools.css'

const Tools = () => {

    const [tools, setTools] = useState([])


  useEffect(() => {
    axios.get("http://localhost:5000/api/v1/tools")
    .then(res => setTools(res.data))
    }, [])

    return (
        <div className='container'>
            <h5>List of best and affordable agricultural tools in India.</h5>
            <p><b>The below information reveals some necessary and important top 12 agricultural tools for farmers in India. Which will help you to choose the best one. Read ahead!</b></p>
            <div className="container">
                {tools.map((data,key) =>
                <div key={key}>
                <h6>{data.name}:</h6>
                <img src={data.img} alt="img"/>
                <p>{data.desc}</p>
                </div>
            )}
            </div>
            <p className='mt-4'>The agriculture industry is growing exceedingly, the growth and prosperity of this industry are very important to instigate the overall progress of the economy, however, the agricultural sector needs to get refined by the use of the best quality tractor equipment and tools. The above listed top 12 agricultural equipment for farmer uses have been the trend changing necessity for the framers. Managing the agricultural farms becomes sufficiently easy and convenient with the use of these tools and equipment. Perhaps, this was just a blog giving you a glimpse of vital tools that are employed for farming and agriculture and has a direct impact on productivity. To know more such interesting things related to the farming industry, visit Tractorgyan.</p>
        </div>
    )
}

export default Tools
