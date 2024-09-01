import React from 'react';
import CustomImage from "./CustomImage"

export default function HeroSection(){
    const images = [
        "/img/gallery/public/img/gallery/79-798888_lime-slice-clipart-download-lime-png.png.jpeg",
        "/img/gallery/79-799058_lime-slice-clip-art-download-lime-wedges.png.jpeg",
        "/img/gallery/AdobeStock_318145801.jpeg/",
        "/img/gallery/AdobeStock_335036779.jpeg",
        "/img/gallery/familyrecipes.jpg",
        "/img/gallery/Felipe.jpg",
        "/img/gallery/imgbin-lime-SeU2xLFGVWkFY6QKHR43CFpsn.jpg",
        "/img/gallery/tacos.jpg",
        "/img/gallery/winter-scenery-mountain-with-rain-snow-free-vector.jpg"
    ];
    
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">Purpose</h1>
                <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className="btn">Check it out!</button>
            </div>
            <div className="col gallery">
                {/* loop through to return component */}
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc= {src} pt={"90%"} />
                )) }
                
            </div>
        </div>
    )
}