import ProjectCard from "./ProjectCard";

const projects = [
    {
      imgSrc: '../images/project-1.png',
      title: 'Portfolio Website',
      tags: ['Developing', 'HTML', 'CSS'],
      projectLink: 'https://github.com/KamilSzczesiak/Portfolio'
    },
    {
      imgSrc: '../images/project-2.png',
      title: 'Nails Website',
      tags: ['Developing', 'Services', 'HTML', 'CSS'],
      projectLink: 'https://github.com/KamilSzczesiak/GeluxeNails'
    },
    {
      imgSrc: '../images/project-3.png',
      title: 'Tic Tac Toe Game',
      tags: ['Developing', 'Game', 'HTML', 'CSS', 'React'],
      projectLink: '#'
    },
    {
      imgSrc: '../images/coming-soon.jpg',
      title: 'Local Cafe Website',
      tags: ['Developing', 'Services', 'HTML', 'CSS', 'React'],
      projectLink: '#'
    },
    {
      imgSrc: '../images/coming-soon.jpg',
      title: 'Online Quiz',
      tags: ['Developing', 'Educational', 'HTML', 'CSS', 'React'],
      projectLink: '#'
    }
  ];

const Projects = () => {
  return (
    <section id="projects"className="section">
        <div className="container">
            <h2 className="headline-2 mb-8">
                Projects I've Worked On
            </h2>
            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {projects.map(({imgSrc, title, tags, projectLink}, key) => (
                    <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Projects