import { Mail, Phone, Star, Trash2, Edit } from 'lucide-react'

const ContactItem = ({ contact, isHovered, onHover, onEdit, onDelete, onToggleFavorite, darkMode }) => {
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

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 px-0 md:px-0 py-3 transition-all duration-300 items-start md:items-center group ${
        darkMode ? 'hover:bg-gray-800/70' : 'hover:bg-linear-to-r hover:from-indigo-50 hover:to-purple-50'
      }`}
      onMouseEnter={() => onHover(contact.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Name with Avatar */}
      <div className="col-span-1 md:col-span-4 flex items-center gap-3">
        <div className={`w-12 h-12 rounded-full bg-linear-to-br ${getAvatarColor(contact.name)} flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
          {getInitials(contact.name)}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <p className={`text-sm md:text-sm font-semibold truncate transition-colors ${
              darkMode ? 'text-white group-hover:text-indigo-400' : 'text-gray-900 group-hover:text-indigo-600'
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
              darkMode ? 'text-gray-400 hover:text-indigo-400 hover:bg-gray-800' : 'text-gray-400 hover:text-indigo-600 hover:bg-indigo-50'
            }`}
            title="Edit contact"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => onToggleFavorite?.(contact.id)}
            className={`p-2 rounded-lg transition-all duration-300 ${
              darkMode ? 'text-gray-400 hover:text-yellow-400 hover:bg-gray-800' : 'text-gray-400 hover:text-yellow-600 hover:bg-yellow-50'
            }`}
            title={contact.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Star className={`w-4 h-4 ${contact.isFavorite ? 'fill-yellow-500 text-yellow-500' : ''}`} />
          </button>
          <button
            onClick={() => onDelete?.(contact.id)}
            className={`p-2 rounded-lg transition-all duration-300 ${
              darkMode ? 'text-gray-400 hover:text-red-400 hover:bg-gray-800' : 'text-gray-400 hover:text-red-600 hover:bg-red-50'
            }`}
            title="Delete contact"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Email */}
      <div className="col-span-1 md:col-span-3">
        <div className={`flex items-center gap-2 text-sm group/email ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <Mail className={`w-4 h-4 shrink-0 transition-transform ${darkMode ? 'text-indigo-400' : 'text-indigo-400'}`} />
          <a href={`mailto:${contact.email}`} className={`truncate hover:underline transition-colors font-medium ${darkMode ? 'hover:text-indigo-400' : 'hover:text-indigo-600'}`}>
            {contact.email}
          </a>
        </div>
      </div>

      {/* Phone */}
      <div className="col-span-1 md:col-span-3">
        <div className={`flex items-center gap-2 text-sm group/phone ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <Phone className={`w-4 h-4 shrink-0 transition-transform ${darkMode ? 'text-purple-400' : 'text-purple-400'}`} />
          <a href={`tel:${contact.phone}`} className={`truncate hover:underline transition-colors font-medium ${darkMode ? 'hover:text-purple-400' : 'hover:text-purple-600'}`}>
            {contact.phone}
          </a>
        </div>
      </div>

      {/* Desktop Actions */}
      <div className="hidden md:flex col-span-2 items-center justify-end gap-1">
        {isHovered && (
          <div className="flex gap-1 animate-slide-in">
            <button
              onClick={() => onEdit?.(contact)}
              className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                darkMode ? 'text-gray-400 hover:text-indigo-400 hover:bg-gray-800' : 'text-gray-400 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
              title="Edit contact"
            >
              <Edit className="w-4 h-4" />
            </button>
            <button
              onClick={() => onToggleFavorite?.(contact.id)}
              className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                darkMode ? 'text-gray-400 hover:text-yellow-400 hover:bg-gray-800' : 'text-gray-400 hover:text-yellow-600 hover:bg-yellow-50'
              }`}
              title={contact.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            >
              <Star className={`w-4 h-4 ${contact.isFavorite ? 'fill-yellow-500 text-yellow-500' : ''}`} />
            </button>
            <button
              onClick={() => onDelete?.(contact.id)}
              className={`p-2 rounded-lg transition-all duration-300 transform hover:scale-110 ${
                darkMode ? 'text-gray-400 hover:text-red-400 hover:bg-gray-800' : 'text-gray-400 hover:text-red-600 hover:bg-red-50'
              }`}
              title="Delete contact"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactItem
