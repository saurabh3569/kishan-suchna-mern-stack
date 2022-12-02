import './App.css';
import Navbar from './component/Navbar/Navbar';
import Home from './page/Home/Home'
import ContactUs from './page/ContactUs/ContactUs';
import AllSeeds from './AllSeeds/AllSeeds'
import AllVegetableSeeds from './AllSeeds/AllVegetableSeeds'
import Beans from './AllSeeds/Beans' 
import Beets from './AllSeeds/Beets'
import Cabbage from './AllSeeds/Cabbage'
import Carrots from './AllSeeds/Carrots'
import ContainerVeggies from './AllSeeds/ContainerVeggies'
import Corn from './AllSeeds/Corn'
import CoverCrops from './AllSeeds/CoverCrops'
import FlowerSeeds from './AllSeeds/FlowerSeeds'
import Grass from './AllSeeds/Grass'
import Cucumber from './AllSeeds/Cucumber'
import Herbs from './AllSeeds/Herbs'
import Lettuce from './AllSeeds/Lettuce'
import Melons from './AllSeeds/Melons'
import NewSeeds from './AllSeeds/NewSeeds'
import NewVegetableSeeds from './AllSeeds/NewVegetableSeeds'
import Peas from './AllSeeds/Peas'
import Peppers from './AllSeeds/Peppers'
import Pumpkins from './AllSeeds/Pumpkins'
import Radish from './AllSeeds/Radish'
import SeedStarting from './AllSeeds/SeedStarting'
import Spinach from './AllSeeds/Spinach'
import Squash from './AllSeeds/Squash'
import Watermelon from './AllSeeds/Watermelon'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import List from './component/List/List';
import Tools from './page/Tools/Tools';
import SeasonableCrops from './page/SeasonableCrops/SeasonableCrops';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/seeds" element={<List />} />
        <Route exact path="/AllSeeds" element={<AllSeeds />}/>
        <Route exact path="/AllVegetableSeeds" element={<AllVegetableSeeds />}/>
        <Route exact path="/Beans" element={<Beans />}/>
        <Route exact path="/Beets" element={<Beets />}/>
        <Route exact path="/Cabbage" element={<Cabbage />}/>
        <Route exact path="/Carrots" element={<Carrots />}/>
        <Route exact path="/ContainerVeggies" element={<ContainerVeggies />}/>
        <Route exact path="/Corn" element={<Corn />}/>
        <Route exact path="/CoverCrops" element={<CoverCrops />}/>
        <Route exact path="/FlowerSeeds" element={<FlowerSeeds />}/>
        <Route exact path="/Grass" element={<Grass />}/>
        <Route exact path='/Cucumber' element={<Cucumber />} />
        <Route exact path="/Herbs" element={<Herbs />}/>
        <Route exact path="/Lettuce" element={<Lettuce />}/>
        <Route exact path="/Melons" element={<Melons />}/>
        <Route exact path="/NewSeeds" element={<NewSeeds />}/>
        <Route exact path="/NewVegetableSeeds" element={<NewVegetableSeeds />}/>
        <Route exact path="/Peas" element={<Peas />}/>
        <Route exact path="/Peppers" element={<Peppers />}/>
        <Route exact path="/Pumpkins" element={<Pumpkins />}/>
        <Route exact path="/Radish" element={<Radish />}/>
        <Route exact path="/SeedStarting" element={<SeedStarting />}/>
        <Route exact path="/Spinach" element={<Spinach />}/>
        <Route exact path="/Squash" element={<Squash />}/>
        <Route exact path="/Watermelon" element={<Watermelon/>}/>
        <Route exact path="/instrument" element={<Tools/>}/>
        <Route exact path="/SeasonableCrops" element={<SeasonableCrops/>}/>
      </Routes>
    </Router>
  );
}

export default App;
