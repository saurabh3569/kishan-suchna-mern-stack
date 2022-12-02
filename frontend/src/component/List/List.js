import React from 'react'
import { Link } from 'react-router-dom'
import './list.css'

const List = () => {
  return (
    <div className='container border w-75 h-75 mb-2'>
                <h2 className=' mt-2 text-center #6D4C41 user-select-none' role="button">Seeds</h2>
                <div className="row mx-5 mt-5">
                    <Link className="col-md-3 nounderline" role="button" to="/AllSeeds">All Seeds</Link>
                    <Link className="col-md-3 nounderline" role="button" to="/AllVegetableSeeds">All Vegetable Seeds</Link>
                    <Link className="col-md-3 nounderline" role="button" to="/Beans">Beans</Link>
                    <Link className="col-md-3 nounderline" role="button" to="/Beets">Beets</Link>
                </div>
                <div className="row mx-5 mt-3">
                    <Link className="col-md-3 nounderline" role="button" to="/Cabbage">Cabbage</Link>
                    <Link className="col-md-3 nounderline" role="button" to="/Carrots">Carrots</Link>
                    <Link className="col-md-3 nounderline" role="button" to="/ContainerVeggies">Container Veggies</Link>
                    <Link className="col-md-3 nounderline" role="button" to="/Corn">Corn</Link>
                </div>
                <div className="row mx-5 mt-3">
                    <Link className="col-md-3 nounderline" role="button" to="/CoverCrops">Cover Crops</Link>
                    <Link className="col-md-3 nounderline" role="button" to="/Cucumber">Cucumber</Link>
                    <Link className="col-md-3 nounderline" role="button" to="/FlowerSeeds">Flower Seeds</Link>
                    <Link className="col-md-3 nounderline" role="button" to="/Grass">Grass</Link>
                </div>
                <div className="row mx-5 mt-3">
                    <Link className="col-md-3 nounderline" role="button" to="/Herbs">Herbs</Link>
                    <Link className="col-md-3 nounderline" role="button" to="/Lettuce">Lettuce</Link>
                    <Link className="col-md-3 nounderline" role="button" to="/Melons">Melons</Link>
                    <Link className="col-md-3 nounderline" role="button" to="/Peas">Peas</Link>
                </div>
                <div className="row mx-5 mt-3">
                    <Link className="col-md-3 nounderline" role="button" to="/Peppers">Peppers</Link>
                    <Link className="col-md-3 nounderline" role="button" to="/Pumpkins">Pumpkins</Link>
                    <Link className="col-md-3 nounderline" role="button" to="/Radish">Radish</Link>
                    <Link className="col-md-3 nounderline" role="button" to="/NewSeeds">New Seeds</Link>
                </div>
                <div className="row mx-5 mt-3">
                    <Link className="col-md-3 nounderline" role="button" to="/SeedStarting">Seed Starting</Link>
                    <Link className="col-md-3 nounderline" role="button" to="/Spinach">Spinach</Link>
                    <Link className="col-md-3 nounderline" role="button" to="/Squash">Squash</Link>
                    <Link className="col-md-3 nounderline" role="button" to="/Watermelon">Watermelon</Link>
                </div>
                <div className="row mx-5 mt-3 mb-5">
                    <Link className="col-md-3 nounderline" role="button" to="/NewVegetableSeeds">New Vegetable Seeds</Link>
                </div>
            </div>
  )
}

export default List
