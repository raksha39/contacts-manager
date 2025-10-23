import { useState, useEffect } from 'react'
import Header from './components/header'
import ContactList from './components/contact-list'
import AddContactModal from './components/add-contact-modal'
import EditContactModal from './components/edit-contact-modal'
import contactsData from './data/contacts.json'

function App() {
  // Initialize contacts from localStorage or use default data
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts')
    if (savedContacts) {
      return JSON.parse(savedContacts)
    }
    return contactsData
  })
  
  const [searchTerm, setSearchTerm] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [contactToEdit, setContactToEdit] = useState(null)
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode')
    return savedMode === 'true'
  })

  // Save contacts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  // Save dark mode preference
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleAddContact = (newContact) => {
    setContacts([newContact, ...contacts])
  }

  const handleSearch = (term) => {
    setSearchTerm(term)
  }

  const handleEdit = (contact) => {
    setContactToEdit(contact)
    setIsEditModalOpen(true)
  }

  const handleEditContact = (updatedContact) => {
    setContacts(contacts.map(contact => 
      contact.id === updatedContact.id ? updatedContact : contact
    ))
  }

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  const handleToggleFavorite = (id) => {
    setContacts(contacts.map(contact => 
      contact.id === id ? { ...contact, isFavorite: !contact.isFavorite } : contact
    ))
  }

  // Filter contacts based on search term
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.phone.includes(searchTerm)
  )

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-linear-to-br from-gray-900 via-gray-800 to-black' 
        : 'bg-linear-to-br from-gray-50 via-indigo-50 to-purple-50'
    }`}>
      <Header 
        onAddContact={() => setIsModalOpen(true)} 
        onSearch={handleSearch}
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />
      
      <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <ContactList 
          contacts={filteredContacts}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onToggleFavorite={handleToggleFavorite}
          darkMode={darkMode}
        />
      </main>

      <AddContactModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddContact={handleAddContact}
        darkMode={darkMode}
      />

      <EditContactModal 
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onEditContact={handleEditContact}
        contact={contactToEdit}
        darkMode={darkMode}
      />
    </div>
  )
}

export default App
