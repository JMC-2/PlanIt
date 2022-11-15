import React from "react";
//import child components/ containers
import TodoForToday from "./TodoForToday";
import BackLog from "./BackLog";
import HourlyCalendar from "./HourlyCalendar";
import Navbar from "./Navbar";

const HomePage = () => {
    return (
        <div>
          <Navbar />
          <HourlyCalendar />
          <TodoForToday />
          <BackLog />
        </div>
    )
}

export default HomePage;