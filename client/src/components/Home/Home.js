import React from "react";
import "./Home.css";

const Home = (props) => (
    <div className="home">
        <div className="homeHeading">
            <h2 className="mastheaBbrand">One.Beer.Later.</h2>
        </div>
        <div className="centerDiv">
            <h1 className="coverHeading">Have Fun, Drink Responsibly</h1>
            <br/>
            <div className="leadBtn">
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