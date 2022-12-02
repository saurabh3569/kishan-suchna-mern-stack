import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Chatbot from '../Chatbot/Chatbot'
import ContactUs from '../ContactUs/ContactUs'
import './home.css'

const Home = () => {

  const[checkChatBot,setcheckChatBot] = useState(false)

  const cardStyle = {
    "width": "20rem"
  }

  return (
    <div className='container'>
      {!checkChatBot && <>
        <h1 className='text-center main-title'>WELCOME DEAR FARMER</h1>
      <p className='text-center'>This is a one stop solution to all your farming related information and doubt. The
        information on the website is convertable to various local languages. Farmers
        can find instruction and information about seasonable and suitable crops,
        seeds,farming tools & instruments etc.
      </p>
      <div className="container mx-4 cardOption row">
        <div className="card mx-2 my-2 p-3" style={cardStyle}>
          <div className="card-body ">
            <h5 className="card-title text-center mb-2">Seeds</h5>
            <i className="fa-solid fa-box-open fa-4x d-flex justify-content-center"></i>
            <Link to="/seeds" className="btn btn-primary d-flex justify-content-center mx-2 mt-2">Go somewhere</Link>
          </div>
        </div>
        <div className="card mx-2 my-2 p-3" style={cardStyle}>
          <div className="card-body ">
            <h5 className="card-title text-center mb-2">Instrument</h5>
            <i className="fa-solid fa-screwdriver-wrench d-flex fa-4x justify-content-center"></i>
            <Link to="/Instrument" className="btn btn-primary d-flex justify-content-center mx-2 mt-2">Go somewhere</Link>
          </div>
        </div>
        <div className="card mx-2 my-2 p-3" style={cardStyle}>
          <div className="card-body ">
            <h5 className="card-title text-center mb-2">Seasonable Crops</h5>
            <i className="fa-solid fa-leaf fa-4x d-flex justify-content-center"></i>
            <Link to="/Seasonablecrops" className="btn btn-primary d-flex justify-content-center mx-2 mt-2">Go somewhere</Link>
          </div>
        </div>
      </div>
      

      {/* NGO */}

      <h1 className='text-center mt-5'>TOP NGO FOR FARMER</h1>
      <div className="row container mx-4 my-5">
        <div className="card mx-2 my-2 p-3" style={cardStyle}>
          <div className="card-body ">
            <h5 className="card-title text-center mb-2">
              Universal Versatile Society (UVS)</h5>
            <p className='p'>Agriculture, environment, rural development, education, and women empowerment are just a few of the essential sectors in which the NGO works. Its purpose is to help communities by connecting funders with community-based projects and using its expertise to promote long-term development.</p>
            <a href="https://www.uvsociety.org/" rel="noreferrer" target="_blank" className="btn btn-primary d-flex justify-content-center mx-2 mt-4">Go</a>
          </div>
        </div>
        <div className="card mx-2 my-2 p-3" style={cardStyle}>
          <div className="card-body ">
            <h5 className="card-title text-center mb-2">
              Gramya Resource Center for Women</h5>
            <p className='p'>Gramya was founded in 1993 to promote women's rights. Its mission is to build a just society where women, particularly tribals and Dalits, have equal opportunity. Gramya works in rural areas to improve the well-being and rights of farmers by tackling the pandemic of farmer suicides and aiding the victims' families. </p>
            <a href="https://gramya.org.in/" rel="noreferrer" target="_blank" className="btn btn-primary d-flex justify-content-center mx-2 mt-2">Go</a>
          </div>
        </div>
        <div className="card mx-2 my-2 p-3" style={cardStyle}>
          <div className="card-body ">
            <h5 className="card-title text-center mb-2">
            Dilasa Sanstha</h5>
            <p className='p'>Dilasa Sanstha, founded in 1994, collaborates with a number of smaller NGOs in Maharashtra's Vidarbha and Marathwada districts. It promotes creative and long-term irrigation technologies to help tribal people and small Indian farmers expand their agriculture. Dilasa's low-cost technological solutions assist farmers in  practicing mixed agriculture.</p>
            <a href="http://www.dilasango.org/" rel="noreferrer" target="_blank" className="btn btn-primary d-flex justify-content-center mx-2 mt-2">Go</a>
          </div>
        </div>
      </div>
      <div className='container border my-5'>
      <ContactUs />
      </div>
      </>}
      {checkChatBot && <div className='container'>
        <Chatbot />
      </div>}
      <button className='btn btn-danger mb-2 position-fixed bottom-0 end-0' onClick={()=>setcheckChatBot(!checkChatBot)}>{!checkChatBot ? 'enable chatbot' :'disable chatbot'}</button>
    </div>
  )
}

export default Home
