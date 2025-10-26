import { Mail } from 'lucide-react'

const EmptyState = ({ darkMode }) => {
  return (
    <div className={`flex flex-col items-center justify-center py-20 text-center rounded-2xl shadow-lg border-2 border-dashed transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-900 border-gray-700' 
        : 'bg-white border-gray-300'
    }`}>
      <div className={`rounded-full p-8 mb-4 animate-bounce ${
        darkMode 
          ? 'bg-linear-to-br from-gray-800 to-gray-900' 
          : 'bg-linear-to-br from-indigo-100 to-purple-100'
      }`}>
        <Mail className={`w-16 h-16 ${darkMode ? 'text-gray-400' : 'text-indigo-600'}`} />
      </div>
      <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        No contacts found
      </h3>
      <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        Start building your network by adding contacts
      </p>
    </div>
  )
}

export default EmptyState
