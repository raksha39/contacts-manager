const ContactListHeader = ({ darkMode }) => {
  return (
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
  )
}

export default ContactListHeader
