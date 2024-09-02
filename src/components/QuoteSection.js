import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function QuoteSection(){
    return (
        <div className="section quote">
            <p className="quote-text"><FontAwesomeIcon icon={faQuoteLeft} />Food tells the story of a people’s history, traditions, and values, and offers a glimpse into their way of life. When you learn about a culture’s food, you gain a deeper understanding of that culture and the people who make it up.</p>
            <p className="quote-author">- Oshodi-Fraudeau</p>
        </div>
    )
}