import React from 'react'
import Card from '../component/Card'

const NewVegetableSeeds = () => {
  const data = [
		{
			"Name": "Oregon Sugar Pod Pea",
      "img":"https://i.ibb.co/Wt20NTd/Oregon-Sugar-Pod-Pea.jpg"
		},
		{
			"Name": "German Giant Radish",
			"img":"https://i.ibb.co/WkMdHY1/German-Giant-Radish.jpg"
		},
		{
			"Name": "Stringless Blue Lake Bean",
      "img":"https://i.ibb.co/Kmznpf0/Stringless-Blue-Lake-Bean.jpg"
		},
		{
			"Name": "Green Arrow Pea",
      "img":"https://i.ibb.co/4T3MLF6/Green-Arrow-Pea.jpg"
		},
		{
			"Name": "Bloomsdale Long Standing Spinach",
      "img" : "https://i.ibb.co/3rkDD8j/Bloomsdale-Long-Standing-Spinach.jpg"
		},
		{
			"Name": "Incredible Sweet Corn",
      "img": "https://i.ibb.co/1GftPRH/Incredible-Sweet-Corn.jpg"
		},
		{
			"Name": "Super Sugar Snap Pea",
      "img":"https://i.ibb.co/jfMqLQR/Super-Sugar-Snap-Pea.jpg"
		},
		{
			"Name": "Blue Lake 274 Bean",
      "img" : "https://i.ibb.co/M5PZjW1/Blue-Lake-274-Bean.jpg"
		},
		{
			"Name": "Fordhook Lima Bean",
      "img":"https://i.ibb.co/X8CxTRB/Fordhook-Lima-Bean.jpg"
		},
	]

  return (
    <div className='container mb-5'>
      <h3>New Vegetable Seeds</h3>
	  <p>Growing new varieties is one of the joys of gardening. Farmer Seed and Nursery's newest offerings include outstanding hybrid and heirloom vegetable varieties. Most gardeners like to grow some of the newest offerings alongside their favorite vegetable choices every year. Our open-pollinated heirloom vegetable varieties have been loved by generations of gardeners. These are often flavor favorites. Our newest hybrids feature the best in plant breeding and may have qualities such as outstanding disease resistance, good garden performance, high yields and flavorful vegetables. When selecting vegetable seed packets to buy, consider the varieties' growing requirements. Most vegetables grow best in full sun and well-drained soil rich in organic matter. Some vegetable seeds are directly sown into the garden soil while others are started indoors and transplanted to the garden.</p>
      <div className="row container">
      {data.map((data,key)=>
      <div className="col-sm-4" key={key}>
      <Card Name={data.Name} img={data.img}/>
      </div>
      )}
      </div>
    </div>
  )
}

export default NewVegetableSeeds
