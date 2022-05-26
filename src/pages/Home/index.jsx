import React from "react";
import NavBar from "../../components/Layout/NavBar"
import Carrousell from "../../components/Carrousell";
import WeeklyActivities from "./WeeklyActivities";
import ContactUs from "./Contact";
import Footer from "../../components/Layout/Footer";
import * as CarrouselImages from '../../assets/carrousel'
import Layout from "../../components/Layout";
import Title from "./Title";

const images = Object.values(CarrouselImages)

const Home = () => (
    <div className="App">
        <Layout>
            <Carrousell images={images}/>
            <Title />
            <WeeklyActivities />
            <ContactUs />
        </Layout>
    </div>
)
export default Home