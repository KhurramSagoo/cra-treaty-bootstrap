import React from 'react'
import './midsection.css'
import mobile from '../assets/sliceing.png'
import bars from '../assets/bars.png'

const MidSection = () => {
  return (
    <div className="mid-container">
        <div className="item-left">
            <img src={mobile} alt="mobile" className='mid-mobile'/>
        </div>
        <div className="item-right">
            <div className="sub-item">
                <h2 className="heading-2">
                OUR AMAZING SERVICES
                </h2>
                <h1 className="heading-1">
                Engage the families you serve
                </h1>
                <img src={bars} alt="image-bar" className='image-bar'/>
            </div>
            <div className="sub-item">
                <h2 className="heading-black">
                   ELIMINATE HANDWRITTEN MEDICATION LISTS
                </h2>
                <h2 className="heading-light">
                Patients and families deserve to have up to date, mobile access to their latest medication list
                </h2>
            </div>
            <div className="sub-item">
                <h2 className="heading-black">
                   ELIMINATE HANDWRITTEN MEDICATION LISTS
                </h2>
                <h2 className="heading-light">
                Patients and families deserve to have up to date, mobile access to their latest medication list
                </h2>
            </div>
            <div className="sub-item">
                <h2 className="heading-black">
                   ELIMINATE HANDWRITTEN MEDICATION LISTS
                </h2>
                <h2 className="heading-light">
                Patients and families deserve to have up to date, mobile access to their latest medication list
                </h2>
            </div>
            <div className="sub-item">
                <h2 className="heading-black">
                   ELIMINATE HANDWRITTEN MEDICATION LISTS
                </h2>
                <h2 className="heading-light">
                Patients and families deserve to have up to date, mobile access to their latest medication list
                </h2>
            </div>

        </div>


    </div>
  )
}

export default MidSection