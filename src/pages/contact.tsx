import { FC } from 'react'
import Layout from '@/pages/components/layout'
import { Github, MessageSquare, Mail, Globe } from 'lucide-react'

const Contact: FC = () => {
  return (
    <Layout title="Contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h1 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
          Connect With Us
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <a
            href="https://discord.gg/UPmq4sMZN3"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 bg-gray-800 rounded-lg hover:-translate-y-2 transition-all"
          >
            <MessageSquare size={48} className="text-blue-400 mb-4" />
            <h2 className="text-xl font-semibold text-blue-400 mb-2">Discord</h2>
            <p className="text-gray-300 text-center">Join our community on Discord to chat, get support, and stay updated</p>
          </a>

          <a
            href="https://github.com/SDModdin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-8 bg-gray-800 rounded-lg hover:-translate-y-2 transition-all"
          >
            <Github size={48} className="text-blue-400 mb-4" />
            <h2 className="text-xl font-semibold text-blue-400 mb-2">GitHub</h2>
            <p className="text-gray-300 text-center">Check out our open source projects and contribute to development</p>
          </a>

          <div className="flex flex-col items-center p-8 bg-gray-800 rounded-lg">
            <Mail size={48} className="text-blue-400 mb-4" />
            <h2 className="text-xl font-semibold text-blue-400 mb-2">Email</h2>
            <a 
              href="mailto:ben@krakenhosting.net"
              className="text-gray-300 hover:text-blue-400 transition-colors"
            >
              ben@krakenhosting.net
            </a>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">About Our Community</h2>
          <p className="text-gray-300">
            We're passionate about building tools and solutions that make a difference. 
            Whether you're interested in our projects, want to contribute, or just want to 
            say hello, we'd love to hear from you. Join our Discord server to become part 
            of our growing community!
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact