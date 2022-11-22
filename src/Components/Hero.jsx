import { React, useState } from 'react';
import DownloadAds from "./DownloadAds";
// import VisibilitySensor from "react-visibility-sensor";
// import { motion } from "framer-motion";


function Hero() {
    // const [elementsIsVisible, setElementIsVisible] = useState(false);
    // const bg = {
    //     true: {
    //         left: "7rem",
    //     },
    //     false: {
    //         left: "19rem",
    //     },
    // };
    // const musicPlayer = {
    //     true: {
    //         left: "295px",
    //     },
    //     false: {
    //         left: "235px",
    //     },
    // };
    // const rect = {
    //     true: {
    //         left: "11rem",
    //     },
    //     false: {
    //         left: "13rem",
    //     },
    // }
    // const heart = {
    //     true: {
    //         left: "9rem",
    //     },
    //     false: {
    //         left: "12.5rem",
    //     },
    // };

    return (
        <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]">
            {/* left side */}
            <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
                <span>Experience The</span>{" "}
                <span>
                    <b>Best Quality Music</b>
                </span>
                <span className="text-[15px] text-[#525D6E]">
                    Donec laoreet nec velit vitae aliquam. Ut quis tincidunt purus.
                    <br />
                    Suspendisse in leo non risus tincidunt lobortis.
                </span>
                {/* Download Ads */}
                <div>
                    <span className="text-[13px]">
                        Download now on IOS and Android
                        <DownloadAds />
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Hero;