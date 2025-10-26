import { useState, useRef } from 'react'
import ContactItem from './contact-item'
import EmptyState from './empty-state'
import ContactListHeader from './contact-list-header'

const ContactList = ({ contacts = [], onEdit, onDelete, onToggleFavorite, darkMode }) => {
  const [hoveredId, setHoveredId] = useState(null)
  const containerRef = useRef(null)
  const sectionRefs = useRef({})

  // Group contacts by first letter
  const grouped = contacts.reduce((acc, c) => {
    const letter = (c.name || '#').trim().charAt(0).toUpperCase()
    const key = /[A-Z]/.test(letter) ? letter : '#'
    if (!acc[key]) acc[key] = []
    acc[key].push(c)
    return acc
  }, {})

  const letters = Object.keys(grouped).sort()

  if (contacts.length === 0) {
    return <EmptyState darkMode={darkMode} />
  }

  return (
    <div className={`rounded-2xl shadow-xl border overflow-hidden backdrop-blur-sm transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-900 border-gray-800' 
        : 'bg-white border-gray-100'
    }`}>
      <ContactListHeader darkMode={darkMode} />

      {/* Contact List - Scrollable with grouped sections */}
      <div ref={containerRef} className={`relative max-h-[calc(100vh-200px)] overflow-y-auto ${
        darkMode ? 'divide-y divide-gray-800' : 'divide-y divide-gray-100'
      }`}>
        <div className="px-4 md:px-6 py-3">
          {/* Render letter sections */}
          {letters.map((letter) => (
            <div key={letter} ref={(el) => (sectionRefs.current[letter] = el)} className="py-2">
              <div className={`sticky top-0 z-5 py-2 backdrop-blur-sm ${darkMode ? 'bg-gray-900/90 text-gray-300' : 'bg-white/90 text-indigo-900'}`}>
                <div className="text-sm font-bold uppercase tracking-wide">{letter}</div>
              </div>
              <div className="space-y-1">
                {grouped[letter].map((contact) => (
                  <ContactItem
                    key={contact.id}
                    contact={contact}
                    isHovered={hoveredId === contact.id}
                    onHover={setHoveredId}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    onToggleFavorite={onToggleFavorite}
                    darkMode={darkMode}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactList
