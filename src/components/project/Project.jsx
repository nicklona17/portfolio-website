import './project.css';

const Project = ({ img, link, desc }) => {
    return (
        <div className="project-container">
            <div className="project">
                <div className="project-browser">
                    <div className="project-circle1"></div>
                    <div className="project-circle2"></div>
                    <div className="project-circle3"></div>
                </div>
                <a href={link} target="_blank" rel="noreferrer">
                    <img src={img} alt="projects" className="project-img" />
                </a>   
            </div>
            <p className="project-desc">{desc}</p>
        </div>
    )
}

export default Project;