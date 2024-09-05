import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"


export default function ExpertCard({expert}) {
    return (
        <div className="expert-card">
            <img src="img/experts/img_2.jpeg" alt="" />
            <div className="expert-card-info">
                <h3 className="expert-card-name">Oscar Sánchez</h3>
                <p className="expert-recipe-count">Recipes: <b>10</b></p>
                <p className="expert-cuisine">Cuisine: <b>Mexican</b></p>
                <p className="expert-icons">
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                </p>
            </div>
        </div>
    )
} 