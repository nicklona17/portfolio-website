import './about.css';
import DrumPhoto from '../../images/drum-photo.png';

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img
                        src={DrumPhoto} id="drum-photo" alt="picture of me drumming"
                        className="about-img"
                    />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-sub">Self-taught frontend web developer with experience in web design and mobile app development. My passion for coding and problem solving has led me to pursue a full-time career in web development.</p>
                <p className="about-desc">I am currently an intern at embtr, a mobile app startup, where I regularly use React Native, Firebase, JSON and Typescript. This experience has further enhanced my ability to work on team-based projects through the use of Git and GitHub.</p>
                <p className="about-desc">In addition to working at embtr, I am consistently building on my HTML, CSS, JavaScript, and React skills through the creation and management of my own personal coding projects, which can be viewed on my Linkedin featured section and/or GitHub account.</p>
            </div>
        </div>
    )
}

export default About;