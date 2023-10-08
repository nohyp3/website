import './App.css';
import resume from './resume.pdf';
import linkedin from './icons/linkedin.svg';
import github from './icons/github.svg';
import Slide from 'react-reveal/Slide';

function Project(project) {
  return (
    <div className = "project-card">
        <h1 className = "project-name">{project.name}</h1>
        <p className = "project-description">{project.description}</p>
        {/* removed alt for now as no images are being placed */}
        {/* <img src={project.image}></img> */}
        <a href={project.link} target="_blank" rel="noreferrer">
          <button className = "project-link">Link</button>
        </a>
    </div>
  )
}
function ProjectsSection({projectsData}) {
  return (
    <section className="projects-list">
      <div className="project-list">
        {projectsData.map((project) => (
          <Slide right>
            <Project {...project} />
          </Slide>
        ))}
      </div>
    </section>
  );
}
function App() {
  const projectsData = [
    {
      name: "Sort the 6ix",
      description: "What if you could find out where to throw your household waste using the camera of your phone? Used React Native, the Google Cloud AI Api, Hugging Face AI's Semantic Search, and City of Toronto's open data",
      image: "project1.jpg",
      link: "https://devpost.com/software/sorting-the-6ix",
    },
    {
      name: "Posicise",
      description: "Created a simple Android fitness App using Java and Android Studio",
      image: "project2.jpg",
      link: "https://devpost.com/software/posicise",
    },
    {
      name: "Youthfi",
      description: "An experimental site that taught financial basics. Built to experiment with React. "
    },
    // Add more projects as needed
  ];
  return (
    <div className="App">
      <div className="hero-home">
        <div className="main-header">
          <h1>Hello! My name is Andre.<span className="animate__animated animate__flash animate__infinite infinite">|</span></h1>
          <h2>Systems Design Engineering Student @ uWaterloo</h2>
          <div className = "icons">
            <img className = "icon" src={linkedin} alt="linkedin logo" width='50em' height='50em'></img>
            <img className = "icon" src={github} alt="github logo" width='50em' height='50em'></img>
            <a className = "icon" href={resume} target="_blank" rel="noreferrer">Resume</a>
          </div>
        </div> 
      </div>
      <div className="projects">
        <h1 className="header">Projects</h1>
        <ProjectsSection projectsData={projectsData} />
      </div>
      <div className="footer">
        built with react.
      </div>
    </div>
  );
}

export default App;
