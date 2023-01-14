import './Profile.scss'
import arrow from '../images/downrightwhite.svg'
import RegisteredSlip from '../components/RegisteredSlip/RegisteredSlip'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Ticket from '../components/Ticket/Ticket'

import Vector from '../images/Vector3.png'
const Profile = () => {
    return <div className="Profile">
        <Navbar/>
        <div className="row title" style={{"marginTop": "10vh"}}>
            <div className='col-12 YourProf'>
               YOUR 
            </div>
        </div>
        
        <div className="row title" 
        style={{"marginBottom": "10vh"}}
        >
            <div className='col-12 YourProf'>
               PROFILE
               <img src={Vector} alt="" className='arrowicon1' />
            </div>
        </div>
        <div className="row titledeets">
            FISHY BUTT
        </div>
        <div className="row titledeets">
              9997989898
        </div>
        <div className="row titledeets lasttitle">
            buttfisher@gmail.com
        </div>

        <div className="orange">
        <div className="row page_heading">
            YOUR
        </div>
        <div className="row page_heading">
            TICKET
            <img src={arrow} alt="" className='arrowicon' />
        </div>
        <Ticket/>
        </div>
        <div className="row page_heading">
            YOUR
        </div>
        <div className="row page_heading">
            REGISTRATIONS
            <img src={arrow} alt="whatever" className='arrowicon' />
        </div>
        <div className="slips">
            <RegisteredSlip
                title = "Event 1"
                subtitle = "Beat up baddies to take the crown"
            />
            <RegisteredSlip
                title = "Event 1"
                subtitle = "Beat up baddies to take the crown"
            />
            <RegisteredSlip
                title = "Event 1"
                subtitle = "Beat up baddies to take the crown"
            />
            <RegisteredSlip
                title = "Event 1"
                subtitle = "Beat up baddies to take the crown"
            />
        </div>
        <Footer/>
    </div>
}

export default Profile;