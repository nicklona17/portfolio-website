import './projectList.css'; 
import Project from '../project/Project';
import { projects } from '../../data';

const ProjectList = () => {
    return (
        <div className="project-list">
            <div className="project-list-texts">
                <h1 className="project-list-title">My Favorite Projects</h1>
            </div>
            <div className="project-list-items">
                {projects.map((item) => (
                    <Project key={item.id} img={item.img} link={item.link} desc={item.desc}/>
                ))}
            </div>
        </div>
    )
}

export default ProjectList;