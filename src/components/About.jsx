import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            Careers
                            About Flipkart
                            Life At Flipkart
                            Jobs
                            Interviewing At Flipkart
                            Candidate Login
                            We are maximisers. We're out on our own journeys to maximise - be the best at what we choose and care about the most - whether it be our impact, voice, potential, ideas, influence, well-being or more. Because when we maximise ourselves in our inclusive teams, Flipkart is able to deliver the best imaginable value for our customers, stakeholders and the planet!
                            Flipkart users can choose between
                            English and 11 Indian languages. Our
                            teams built vernacular support in just
                            2.5 years, most of it while working
                            remotely!
                            We take pride in being an employee-centric organization which keeps the best interest of its employees at the heart.
                            - Krishna Raghavan, Chief People Officer
                            Values
                            Home About Us Life @ Flipkart Jobs Candidate Login Terms Of Use Privacy Policy

                            © All Rights Reserved | Powered by

                            Beware of fake Flipkart jobs and fraud employment agents. Read these guidelines.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary  px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-fex justify-content-center">
                        <img src="/assets/images/about.jpg" alt="About Us" height="500px" width="500px"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;