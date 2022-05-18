import React from "react";
import SplitWithImage from "../Contact/Contact";
import LargeWithLogoCentered from "../Final/Final";
import Footers from "../Footers/Footers";
import '../Footers/Footers.css'
import WeeklyActivities from "../WeeklyActivities";
import ArticleList from "../Reunion/Reunion";


const Home = () => {
    return (

        <div className="App">

            <div className='bg'>

                <div className="wave w1  ">

                </div>

                <div className="dark:black w1">
                </div>
                <Footers />

            </div>
            <div>
                <WeeklyActivities />
            </div>
            {/* <div>
                <ArticleList />
            </div> */}
            <div>
                <SplitWithImage />
            </div>
            <div>
                <LargeWithLogoCentered />
            </div>
        </div>
    )

}
export default Home