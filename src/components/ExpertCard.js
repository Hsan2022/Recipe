import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"


export default function ExpertCard({expert}) {
    return (
        <div className="expert-card">
            <img src={expert.img} alt="" />
            <div className="expert-card-info">
                <h3 className="expert-card-name">{expert.name}</h3>
                <p className="expert-recipe-count">Recipes: <b>{expert.recipesCount}</b></p>
                <p className="expert-cuisine">Cuisine: <b>{expert.cuisine}</b></p>
                <p className="expert-icons">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                </p>
            </div>
        </div>
    )
} 