import '../styles/Content.css'

import MainLogo from '../assets/images/image-hero-desktop.png'
import MobileLogo from '../assets/images/image-hero-mobile.png'

import Databiz from '../assets/images/client-databiz.svg'
import Audiophile from '../assets/images/client-audiophile.svg'
import Meet from '../assets/images/client-meet.svg'
import Maker from '../assets/images/client-maker.svg'



function Content() {
    return (
        <div className="content-container">
            <div className="left-content">
                <h1>Make remote work</h1>
                <p>Get your team in sync, no matter your location. Streamline processes, 
                create team rituals, and watch productivity soar.</p>
                <button className="learn-btn">Learn More</button>
                <div className="company-ads">
                    <img src={Databiz} alt="Databiz Logo" />
                    <img src={Audiophile} alt="Audiophile Logo" />
                    <img src={Meet} alt="Meet Logo" />
                    <img src={Maker} alt="Maker Logo" />
                </div>
            </div>
            <div className="right-content">
                <img src={MainLogo} alt="Hero Logo" className="hero-pic" />
                <img src={MobileLogo} alt="Mobile Hero Logo" className="mobile-hero" />
            </div>
        </div>
    );

}


export default Content