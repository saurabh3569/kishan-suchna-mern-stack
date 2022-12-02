import React from 'react'

const SeasonableCrops = () => {
  return (
    <div className='container'>
            <h2>Major Cropping Seasons in India</h2>
            <div className='container'>
                    <h5>Kharif</h5>
                    <ul>
                        <li>July – October</li>
                        <li>Harvest – September to October</li>
                        <li>A.k.a Monsoon Crops</li>
                        <li>Such crops require a lot of water</li>
                        <li>Example: rice, sorghum, maize, tea, rubber, coffee, guar, Sesame, cereals such as Arhar Dhal, pearl millet, soybeans, cotton, oilseeds, etc.</li>
                        <li>state: Assam, West Bengal, coastal regions of Odisha, Andhra Pradesh, Telangana, Tamil Nadu, Kerala and Maharashtra</li>
                    </ul>
                    <h5>Rabi</h5>
                    <ul>
                        <li>Sowing between October and November</li>
                        <li>Harvest – February to April</li>
                        <li>A.k.a Winter Season Crops</li>
                        <li>Need cold weather for growth</li>
                        <li>Need less water</li>
                        <li>Example: wheat, oats, barley, pulses, cereals, oilseeds, linseed, etc.</li>
                        <li>state: Punjab, Haryana, Himachal Pradesh, Jammu and Kashmir, Uttarakhand and Uttar Pradesh</li>
                    </ul>
                    <h5>Zaid</h5>
                    <ul>
                        <li>Sowing between March and June (between Kharif and Rabi)</li>
                        <li>Requires warm & dry weather for growth and a longer day-length for flowering</li>
                        <li>Example: Seasonal fruits and vegetables</li>
                        <li>state: Most of the northern and northwestern states</li>
                    </ul>
            </div>
        </div>
  )
}

export default SeasonableCrops
