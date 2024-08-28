import CustomImage from "./CustomImage"

export default function HeroSection(){
    return (
        <div className="section">
            <div className="col">
                <h1 className="title">Purpose</h1>
                <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className="btn">Check it out!</button>
            </div>
            <div className="col gallery">
                <CustomImage />
                <CustomImage />
                <CustomImage />
                <CustomImage />
                <CustomImage />
                <CustomImage />
                <CustomImage />
                <CustomImage />
                <CustomImage />
                
            </div>
        </div>
    )
}