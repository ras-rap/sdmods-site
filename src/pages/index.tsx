import { FC } from 'react'
import Layout from '@/pages/components/layout'
import Link from 'next/link'
import { ArrowRight, Layout as LayoutIcon, MessageSquare, FileText, Settings } from 'lucide-react'

const Home: FC = () => {
  return (
    <Layout title="Home">
      {/* Hero Section with Animation */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              SDMods
            </h1>
            <p className="text-xl md:text-2xl text-center text-gray-300 mb-8 max-w-2xl mx-auto">
              Building powerful, user-friendly solutions for modern web applications
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="/products"
                className="group inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all hover:scale-105"
              >
                View Our Products
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* What We Do Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-8">What We Do</h2>
          <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-12">
            At SDMods, we are dedicated to creating intuitive, efficient, and powerful solutions to enhance digital experiences. Whether it’s fostering community through forums, boosting productivity with comprehensive app suites, or simplifying management with centralized dashboards, our goal is to empower users to achieve more.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-gray-800 p-6 rounded-lg max-w-sm">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Empowering Productivity</h3>
              <p className="text-gray-300">Our Vetra Suite equips you with all the tools needed to stay organized and connected.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg max-w-sm">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Building Communities</h3>
              <p className="text-gray-300">Easy-to-use forums help foster engagement and build thriving communities.</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg max-w-sm">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Simplifying Management</h3>
              <p className="text-gray-300">Our universal admin page provides a centralized hub for seamless management.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group bg-gray-800 p-8 rounded-lg transform transition-all hover:-translate-y-2">
            <div className="bg-blue-600/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <LayoutIcon className="text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Vetra Suite</h3>
            <p className="text-gray-300 mb-4">
              A comprehensive collection of productivity tools including notes, chat, and file management - everything you need in one place.
            </p>
          </div>
          <div className="group bg-gray-800 p-8 rounded-lg transform transition-all hover:-translate-y-2">
            <div className="bg-blue-600/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageSquare className="text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Forum Solution</h3>
            <p className="text-gray-300 mb-4">
              A modern, easy-to-setup forum platform that brings communities together. Simple to deploy, powerful to use.
            </p>
          </div>
          <div className="group bg-gray-800 p-8 rounded-lg transform transition-all hover:-translate-y-2">
            <div className="bg-blue-600/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileText className="text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Form Builder</h3>
            <p className="text-gray-300 mb-4">
              Create and manage forms with ease. Perfect for surveys, registrations, and data collection.
            </p>
          </div>
          <div className="group bg-gray-800 p-8 rounded-lg transform transition-all hover:-translate-y-2">
            <div className="bg-blue-600/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Settings className="text-blue-400" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">Universal Admin</h3>
            <p className="text-gray-300 mb-4">
              A centralized admin dashboard to manage all your applications and services from one place.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
