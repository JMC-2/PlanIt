import React from "react";
//import child components/ containers
import TodoForToday from "./TodoForToday";
import BackLog from "./BackLog";
import HourlyCalendar from "./HourlyCalendar";
import Navbar from "./Navbar";
import "../styles/HomePage.css"



const HomePage = () => {



    return (
        <div>
          <Navbar />
          <div className="underNav">
            <HourlyCalendar />
            <div className="rightSide">
              <TodoForToday />
              <BackLog />
            </div>
          </div>
        </div>
    )
}

export default HomePage;