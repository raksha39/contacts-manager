import { Mail, Phone, MoreVertical, Star, Trash2, Edit } from 'lucide-react'
import { useState } from 'react'

const ContactList = ({ contacts = [], onEdit, onDelete, onToggleFavorite, darkMode }) => {
  const [hoveredId, setHoveredId] = useState(null)
  const [menuOpenId, setMenuOpenId] = useState(null)

  // Get initials for avatar
  const getInitials = (name) => {
    const names = name.trim().split(' ')
    if (names.length >= 2) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase()
    }
    return name.substring(0, 2).toUpperCase()
  }

  // Generate a consistent color based on name
  const getAvatarColor = (name) => {
    const colors = [
      'from-red-500 to-red-600',
      'from-blue-500 to-blue-600',
      'from-green-500 to-green-600',
      'from-yellow-500 to-yellow-600',
      'from-purple-500 to-purple-600',
      'from-pink-500 to-pink-600',
      'from-indigo-500 to-indigo-600',
      'from-teal-500 to-teal-600',
      'from-orange-500 to-orange-600',
      'from-cyan-500 to-cyan-600',
    ]
    const index = name.charCodeAt(0) % colors.length
    return colors[index]
  }

  const toggleMenu = (id) => {
    setMenuOpenId(menuOpenId === id ? null : id)
  }

  if (contacts.length === 0) {
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

  return (
    <div className={`rounded-2xl shadow-xl border overflow-hidden backdrop-blur-sm transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-900 border-gray-800' 
        : 'bg-white border-gray-100'
    }`}>
      {/* Header - Sticky - Hidden on mobile */}
      <div className={`hidden md:grid sticky top-0 z-10 grid-cols-12 gap-4 px-6 py-4 border-b text-xs font-bold uppercase tracking-wider transition-colors duration-300 ${
        darkMode 
          ? 'bg-linear-to-r from-gray-800 to-black border-gray-700 text-gray-300' 
          : 'bg-linear-to-r from-indigo-50 to-purple-50 border-indigo-100 text-indigo-900'
      }`}>
        <div className="col-span-4">Name</div>
        <div className="col-span-3">Email</div>
        <div className="col-span-3">Phone Number</div>
        <div className="col-span-2 text-right">Actions</div>
      </div>

      {/* Contact List - Scrollable */}
      <div className={`max-h-[calc(100vh-200px)] overflow-y-auto ${
        darkMode ? 'divide-y divide-gray-800' : 'divide-y divide-gray-100'
      }`}>
        {contacts.map((contact, index) => (
          <div
            key={contact.id}
            className={`grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-4 md:px-6 py-4 md:py-4 transition-all duration-300 items-start md:items-center group animate-fade-in ${
              darkMode 
                ? 'hover:bg-gray-800/70' 
                : 'hover:bg-linear-to-r hover:from-indigo-50 hover:to-purple-50'
            }`}
            style={{ animationDelay: `${index * 0.05}s` }}
              onMouseEnter={() => setHoveredId(contact.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Name with Avatar */}
              <div className="col-span-1 md:col-span-4 flex items-center gap-3">
                <div className={`w-12 h-12 md:w-12 md:h-12 rounded-full bg-linear-to-br ${getAvatarColor(contact.name)} flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {getInitials(contact.name)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className={`text-sm md:text-sm font-semibold truncate transition-colors ${
                      darkMode 
                        ? 'text-white group-hover:text-indigo-400' 
                        : 'text-gray-900 group-hover:text-indigo-600'
                    }`}>
                      {contact.name}
                    </p>
                    {contact.isFavorite && (
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500 shrink-0 animate-pulse" />
                    )}
                  </div>
                </div>
                {/* Mobile Actions */}
                <div className="md:hidden flex gap-1">
                  <button
                    onClick={() => onEdit?.(contact)}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      darkMode 
                        ? 'text-gray-400 hover:text-indigo-400 hover:bg-gray-800' 
                        : 'text-gray-400 hover:text-indigo-600 hover:bg-indigo-50'
                    }`}
                    title="Edit contact"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onToggleFavorite?.(contact.id)}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      darkMode 
                        ? 'text-gray-400 hover:text-yellow-400 hover:bg-gray-800' 
                        : 'text-gray-400 hover:text-yellow-600 hover:bg-yellow-50'
                    }`}
                    title={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
                  >
                    <Star className={`w-4 h-4 ${contact.isFavorite ? 'fill-yellow-500 text-yellow-500' : ''}`} />
                  </button>
                  <button
                    onClick={() => onDelete?.(contact.id)}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      darkMode 
                        ? 'text-gray-400 hover:text-red-400 hover:bg-gray-800' 
                        : 'text-gray-400 hover:text-red-600 hover:bg-red-50'
                    }`}
                    title="Delete contact"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Email */}
              <div className="col-span-1 md:col-span-3 pl-15 md:pl-0">
                <div className={`flex items-center gap-2 text-sm group/email ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <Mail className={`w-4 h-4 shrink-0 group-hover/email:scale-110 transition-transform ${
                    darkMode ? 'text-indigo-400' : 'text-indigo-400'
                  }`} />
                  <a 
                    href={`mailto:${contact.email}`}
                    className={`truncate hover:underline transition-colors font-medium ${
                      darkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'
                    }`}
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="col-span-1 md:col-span-3 pl-15 md:pl-0">
                <div className={`flex items-center gap-2 text-sm group/phone ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  <Phone className={`w-4 h-4 shrink-0 group-hover/phone:scale-110 transition-transform ${
                    darkMode ? 'text-purple-400' : 'text-purple-400'
                  }`} />
                  <a 
                    href={`tel:${contact.phone}`}
                    className={`truncate hover:underline transition-colors font-medium ${
                      darkMode ? 'hover:text-purple-400' : 'hover:text-purple-600'
                    }`}
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>

              {/* Desktop Actions */}
              <div className="hidden md:flex col-span-2 items-center justify-end gap-1">
                {hoveredId === contact.id && (
                  <div className="flex gap-1 animate-slide-in">
                    <button
                      onClick={() => onEdit?.(contact)}
                      className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                        darkMode 
                          ? 'text-gray-400 hover:text-indigo-400 hover:bg-gray-800' 
                          : 'text-gray-400 hover:text-indigo-600 hover:bg-indigo-50'
                      }`}
                      title="Edit contact"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => onToggleFavorite?.(contact.id)}
                      className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                        darkMode 
                          ? 'text-gray-400 hover:text-yellow-400 hover:bg-gray-800' 
                          : 'text-gray-400 hover:text-yellow-600 hover:bg-yellow-50'
                      }`}
                      title={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
                    >
                      <Star className={`w-4 h-4 ${contact.isFavorite ? 'fill-yellow-500 text-yellow-500' : ''}`} />
                    </button>
                    <button
                      onClick={() => onDelete?.(contact.id)}
                      className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                        darkMode 
                          ? 'text-gray-400 hover:text-red-400 hover:bg-gray-800' 
                          : 'text-gray-400 hover:text-red-600 hover:bg-red-50'
                      }`}
                      title="Delete contact"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default ContactList
