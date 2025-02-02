import { FC, useState } from 'react'
import Layout from '@/pages/components/layout'
import Modal from '@/pages/components/modal'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  id: number
  name: string
  description: string
  longDescription: string
  tags: string[]
  imageUrl: string
  websiteUrl?: string
  githubUrl?: string
  features: string[]
}

const projects: Project[] = [
  {
    id: 1,
    name: "Vetra",
    description: "A project that has no public description yet.",
    longDescription: "Vetra is a project that has no public description yet.",
    tags: ["In Development"],
    imageUrl: "/api/placeholder/800/400",
    features: [
      "Nothing right now"
    ]
  },
]

const Projects: FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <Layout title="Projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Our Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-gray-800 rounded-lg p-6 transform transition-all hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="bg-blue-900/50 text-blue-200 text-sm px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      >
        {selectedProject && (
          <div className="p-6">
            <img 
              src={selectedProject.imageUrl} 
              alt={selectedProject.name}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <h2 className="text-3xl font-bold text-blue-400 mb-4">
              {selectedProject.name}
            </h2>
            <p className="text-gray-300 mb-6">
              {selectedProject.longDescription}
            </p>
            <div className="flex gap-4 mb-6">
              {selectedProject.websiteUrl && (
                <a
                  href={selectedProject.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink size={20} />
                  Visit Website
                </a>
              )}
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <Github size={20} />
                  View Source
                </a>
              )}
            </div>
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Features</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {selectedProject.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </Layout>
  )
}

export default Projects