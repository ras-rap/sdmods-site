import Head from 'next/head'
import Link from 'next/link'
import { FC, ReactNode, useState } from 'react'
import { Github, MessageSquare, Menu, X } from 'lucide-react'

interface LayoutProps {
  children: ReactNode
  title?: string
}

const Layout: FC<LayoutProps> = ({ children, title }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <Head>
        <title>{title ? `${title} - SDMods` : 'SDMods'}</title>
        <meta name="description" content="SDMods - Innovative Digital Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="bg-gray-800/50 backdrop-blur-sm fixed w-full z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center font-bold text-xl text-blue-400 hover:text-blue-300 transition-colors">
                SDMods
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="flex items-center hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/products" className="flex items-center hover:text-blue-400 transition-colors">
                Products
              </Link>
              <Link href="/team" className="flex items-center hover:text-blue-400 transition-colors">
                Team
              </Link>
              <Link href="/contact" className="flex items-center hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4">
              <Link 
                href="/" 
                className="block hover:text-blue-400 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/products" 
                className="block hover:text-blue-400 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link 
                href="/team" 
                className="block hover:text-blue-400 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              <Link 
                href="/contact" 
                className="block hover:text-blue-400 transition-colors px-2 py-1"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow pt-16">
        {children}
      </main>

      <footer className="bg-gray-800/50 backdrop-blur-sm mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">About SDMods</h3>
              <p className="text-gray-300">
                Building powerful, user-friendly solutions for modern web applications
              </p>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/projects" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">Connect</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                <a 
                  href="https://github.com/SDModdin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-transform hover:scale-110"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://discord.gg/UPmq4sMZN3" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-transform hover:scale-110"
                >
                  <MessageSquare size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© {new Date().getFullYear()} SDMods. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout