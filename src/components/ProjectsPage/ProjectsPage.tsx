import image from '../../assets/images/placeholder.jpeg';

const ProjectsPage: React.FC = () => {
  // Mock data for projects
  const projects = [
    { id: 1, name: 'Project 1', imageUrl: image },
    { id: 2, name: 'Project 2', imageUrl: image },
    { id: 3, name: 'Project 3', imageUrl: image },
    // Add more projects as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Projects I&apos;ve Worked On</h1>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => (
          <a key={project.id} href={`/projects/${project.id}`} className="block">
            <img src={project.imageUrl} alt={project.name} className="w-full h-auto rounded-lg shadow-md" />
            <div className="mt-2 text-center">{project.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;