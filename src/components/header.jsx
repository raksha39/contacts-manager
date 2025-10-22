import { Search, Plus, Users, Moon, Sun } from 'lucide-react'

const Header = ({ onAddContact, onSearch, darkMode, onToggleDarkMode }) => {
  return (
    <header className="bg-blue-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Name */}
          <div className="flex items-center gap-3 group">
            <div className="bg-white/20 backdrop-blur-sm p-2.5 rounded-xl group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white flex items-center gap-2">
                Contacts Manager
              </h1>
             
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
              </div>
              <input
                type="text"
                placeholder="Search by name, email, or phone..."
                onChange={(e) => onSearch?.(e.target.value)}
                className="block w-full pl-10 pr-3 py-2.5 border-2 border-white/50 rounded-xl leading-5 bg-white/90 backdrop-blur-sm placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-white focus:border-white focus:bg-white sm:text-sm transition-all duration-300"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleDarkMode}
              className="inline-flex items-center justify-center p-2.5 border-2 border-white/50 rounded-xl text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 transform hover:scale-105"
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button
              onClick={onAddContact}
              className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-white text-sm font-semibold rounded-xl text-white bg-white/20 backdrop-blur-sm hover:bg-white hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Plus className="w-5 h-5" />
              Add Contact
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
