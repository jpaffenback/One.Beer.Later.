import React from "react";
import "./Home.css";

const Home = (props) => (
    <div className="home-container">
        <div className="home-container-heading">
            <h3 className="masthead-brand">One.Beer.Later.</h3>
        </div>
        <div className="inter cover">
            <h1 className="cover-heading">Have Fun, Drink Responsibly</h1>
            <br/>
            <div className="lead">
                <a href="/login" className="btn btn-lg btn-default">ENTER</a>
            </div>
        </div>
        <div className="footer">
            <p>Connect With Us: 
                <a href="https://www.linkedin.com/in/jantmitch1/" target="_blank" rel="noopener noreferrer">Anthony</a> |
                <a href="https://www.linkedin.com/in/jasonpaffenback/"target="_blank" rel="noopener noreferrer">Jason</a> |
                <a href="https://www.linkedin.com/in/taylor-yao-a75325153/" target="_blank" rel="noopener noreferrer">Taylor</a>
            </p>
        </div>
    </div>
);

export default Home;