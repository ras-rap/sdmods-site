import { FC, useState } from 'react'
import Layout from '@/pages/components/layout'
import Modal from '@/pages/components/modal'
import { User, Github, Twitter, Linkedin, Mail, Globe } from 'lucide-react'

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  longBio: string
  imageUrl: string
  skills: string[]
  social: {
    github?: string
    twitter?: string
    linkedin?: string
    email?: string
    website?: string
  }
}

const team: TeamMember[] = [
  {
    id: 1,
    name: "Ras_rap",
    role: "Founder",
    bio: "Passionate developer behind most of our projects.",
    longBio: "Ras_rap is the man behind most of our projects. With a passion for coding and a vision for the future, he leads our team with innovation and creativity.",
    imageUrl: "https://avatars.githubusercontent.com/u/120177313?s=400&u=1867d8fda50ffa55c5c3959c23d02264342ed060&v=4",
    skills: ["Full Stack Development", "Server Hosting", "Cloud Solutions", "AI/ML", "Web Development"],
    social: {
      github: "https://github.com/ras-rap",
      email: "ben@krakenhosting.net",
      website: "https://ras-rap.click"
    }
  },
]

const Team: FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  return (
    <Layout title="Team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Our Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div 
              key={member.id} 
              className="group bg-gray-800 rounded-lg p-6 text-center transform transition-all hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedMember(member)}
            >
              <div className="w-24 h-24 bg-blue-600/10 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                <User className="text-blue-400" size={36} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                {member.name}
              </h3>
              <p className="text-blue-300 mb-4">{member.role}</p>
              <p className="text-gray-300">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
      >
        {selectedMember && (
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <img 
                src={selectedMember.imageUrl} 
                alt={selectedMember.name}
                className="w-32 h-32 rounded-full object-cover"
              />
              <div>
                <h2 className="text-3xl font-bold text-blue-400 mb-2">
                  {selectedMember.name}
                </h2>
                <p className="text-xl text-blue-300 mb-4">{selectedMember.role}</p>
                <div className="flex gap-4">
                  {selectedMember.social.github && (
                    <a
                      href={selectedMember.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github size={24} />
                    </a>
                  )}
                  {selectedMember.social.twitter && (
                    <a
                      href={selectedMember.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Twitter size={24} />
                    </a>
                  )}
                  {selectedMember.social.linkedin && (
                    <a
                      href={selectedMember.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Linkedin size={24} />
                    </a>
                  )}
                  {selectedMember.social.website && (
                    <a
                      href={selectedMember.social.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Globe size={24} />
                    </a>
                  )}
                  {selectedMember.social.email && (
                    <a
                      href={`mailto:${selectedMember.social.email}`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Mail size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              {selectedMember.longBio}
            </p>
            <h3 className="text-xl font-semibold text-blue-400 mb-4">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {selectedMember.skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-blue-900/50 text-blue-200 text-sm px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </Layout>
  )
}

export default Team