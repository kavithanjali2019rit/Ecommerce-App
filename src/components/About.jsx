import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-dark fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                        As our business spans across numerous countries around the globe, we recognise and analyse differences in laws, regulations, and practices in respective countries while conducting business in lawful and ethical manner. We also develop and implement global personal data security policies to respect the privacy of our customers and employees and to protect their personal data. Our endeavors to systematically manage compliance and ethical risks are driven by the Samsung Global Code of Conduct and the Business Conduct Guidelines that guide all our employees in taking action and making value judgment. Our Compliance Team, previously under the Legal Office, now reports directly to the CEO and the head of Compliance Team attends all board meetings to support important decisions made by the board. We operate dedicated organizations at each business division and overseas regional offices to manage compliance issues pertaining to each business and region.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3" style={{ background: 'linear-gradient(to right, #000000, #7F00FF)',color: '#fff',border: 'none'}}>Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.jpg" alt="About Us" height="500px" width="500px" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
