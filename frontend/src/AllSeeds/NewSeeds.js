import React from 'react'
import Card from '../component/Card'

const NewSeeds = () => {
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
      <h3>New Seeds	</h3>
	  <p>Our newest introductions of seed packets are some of our best sellers. That's because gardeners like to grow new varieties alongside their favorites every year. Our new introductions include a wide selection of hybrid and heirloom varieties that offer what home gardeners love: flavorful vegetables, plentiful yields, good garden performance and disease resistance. They're worth making room for in your garden—and may soon become your new favorite. When selecting the best varieties to grow in your garden, take into account what growing conditions the plants require as well as their mature height and spread, disease resistance and days to maturity.</p>
      <div className="row container">
      {data.map((data)=>
      <div className="col-sm-4">
      <Card Name={data.Name} img={data.img}/>
      </div>
      )}
      </div>
    </div>
  )
}

export default NewSeeds
