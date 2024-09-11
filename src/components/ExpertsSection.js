import ExpertCard from "./ExpertCard"
    
export default function ExpertsSection(){
    const experts = [
        {
            name: "Oscar Sánchez",
            img: "/img/experts/dad.jpeg",
            recipesCount: 3,
            cuisine: "Mexican",
        },
        {
            name: "Lily Oliver",
            img: "/img/experts/lily.jpeg",
            recipesCount: 2,
            cuisine: "Asian",
        },
        {
            name: "Dennis Casper",
            img: "/img/experts/grandpa.jpeg",
            recipesCount: 1,
            cuisine: "American",
        },
        {
            name: "Rachel Rodriguez",
            img: "/img/experts/rachel.jpeg",
            recipesCount: 2,
            cuisine: "Cuban",
        },
        {
            name: "Selene Rossi",
            img: "/img/experts/sonia.jpeg",
            recipesCount: 2,
            cuisine: "Italian",
        },
        {
            name: "Renata Calix",
            img: "/img/experts/selene.jpeg",
            recipesCount: 2,
            cuisine: "Honduran",
        }
    ] 
    return (
        <div className="section experts">
            <h1 className="title">Our Top Food Experts</h1>
            <div className="top-experts-container">
                {/* <ExpertCard />
                <ExpertCard />
                <ExpertCard />
                <ExpertCard />
                <ExpertCard />
                <ExpertCard /> */}
                {/* get expert, render expert card, pass in expert object as prop */}
                {experts.map(expert=> <ExpertCard key={expert.name} expert={expert} /> )}
            </div>
        </div>
    )
}