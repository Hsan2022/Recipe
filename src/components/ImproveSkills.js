import React from 'react';
export default function ImproveSkills(){
    const list = [
        "Learn new recipes",
        "Learn new recipes",
        "Learn new recipes",
        "Learn new recipes",
        "Learn new recipes",
        "Learn new recipes"
    ];
    
    return (
        <div className="section improve-skills">
            <div className="col img">
                <img src="/img/gallery/tacos.jpg" alt="" />
            </div>
            <div className="col typography">
                <h1 className="title">Improve your world culinary skills</h1>
                { list.map((item, index) => (
                        <p className="skill-item" key={index}>{item}</p>
                )) }
                <button className="btn">Sign Up</button>
            </div>
        </div>
    );
}