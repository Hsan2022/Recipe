import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// render a sidebar with clickable link names
export default function Sidebar({links, close={close}}){
    return (
        <div className="sidebar" onClick={close}>
            { links.map(link => (
                <a className="sidebar-link active" href="#!" key={link.name}>
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                </a>
            )) }
        </div>
    )
}