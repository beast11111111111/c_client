import { DarkThemeToggle, } from "flowbite-react";
import { useTheme, useThemeMode, } from "flowbite-react";
import React from "react";
import Navbar from "../components/Navbar";
import CarouselComponent from "../components/Carousel";
import FooterComponent from "../components/Footer";

import CardComponent1 from "../components/Card1";
import CardComponent2 from "../components/Card2";
import CardComponent3 from "../components/Card3";
import CardComponent4 from "../components/Card4";
import CardComponent5 from "../components/Card5";
import CardComponent6 from "../components/Card6";
import CardComponent7 from "../components/Card7";
import CardComponent8 from "../components/Card8";


export default function Home() {

    return (
        <>
            <React.Fragment>
                
                    <Navbar></Navbar>
                    <div className="w-full bg-black text-white min-h-screen">

                        <CarouselComponent></CarouselComponent>
                        <h2 className="text-4xl text-center m-20">Deals</h2>
                        <div className="overflow-x-scroll flex">
                            <CardComponent1></CardComponent1>
                            <CardComponent2></CardComponent2>
                            <CardComponent3></CardComponent3>
                            <CardComponent4></CardComponent4>
                            <CardComponent5></CardComponent5>
                            <CardComponent6></CardComponent6>
                            <CardComponent7></CardComponent7>
                            <CardComponent8></CardComponent8>
                        </div>
                    </div>

                    <div className="mt-10 bg-black text-white">
                        <FooterComponent></FooterComponent>
                    </div>
            </React.Fragment>
        </>
    )
}