import { X } from 'lucide-react'
import { useState } from 'react'

const AddContactModal = ({ isOpen, onClose, onAddContact }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    isFavorite: false
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\+91\s\d{5}\s\d{5}$/.test(formData.phone)) {
      newErrors.phone = 'Phone format should be: +91 XXXXX XXXXX'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      onAddContact({
        ...formData,
        id: Date.now() // Simple ID generation
      })
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        isFavorite: false
      })
      setErrors({})
      onClose()
    }
  }

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      isFavorite: false
    })
    setErrors({})
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm animate-fade-in p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
        {/* Header */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-200 bg-linear-to-r from-indigo-50 to-purple-50 rounded-t-2xl sticky top-0 z-10">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Add New Contact</h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-1">Fill in the details below</p>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-all duration-300 hover:rotate-90 p-2 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-4 sm:px-6 py-4 sm:py-6">
          <div className="space-y-4 sm:space-y-5">
            {/* Name Field */}
            <div className="group">
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 text-sm sm:text-base ${
                  errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-indigo-500'
                }`}
                placeholder="Enter full name"
              />
              {errors.name && (
                <p className="mt-2 text-xs sm:text-sm text-red-500 flex items-center gap-1">
                  <span>⚠</span> {errors.name}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="group">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 text-sm sm:text-base ${
                  errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-indigo-500'
                }`}
                placeholder="example@gmail.com"
              />
              {errors.email && (
                <p className="mt-2 text-xs sm:text-sm text-red-500 flex items-center gap-1">
                  <span>⚠</span> {errors.email}
                </p>
              )}
            </div>

            {/* Phone Field */}
            <div className="group">
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 text-sm sm:text-base ${
                  errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-indigo-500'
                }`}
                placeholder="+91 XXXXX XXXXX"
              />
              {errors.phone && (
                <p className="mt-2 text-xs sm:text-sm text-red-500 flex items-center gap-1">
                  <span>⚠</span> {errors.phone}
                </p>
              )}
            </div>

            {/* Favorite Checkbox */}
            <div className="flex items-center gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl border-2 border-gray-200 hover:border-indigo-300 transition-all duration-300">
              <input
                type="checkbox"
                id="isFavorite"
                name="isFavorite"
                checked={formData.isFavorite}
                onChange={handleChange}
                className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 cursor-pointer"
              />
              <label htmlFor="isFavorite" className="text-xs sm:text-sm font-medium text-gray-700 cursor-pointer">
                ⭐ Add to favorites
              </label>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
            <button
              type="button"
              onClick={handleClose}
              className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-gray-700 bg-gray-100 border-2 border-gray-200 rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300 transform hover:scale-105"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 text-sm font-semibold text-white bg-linear-to-r from-indigo-600 to-purple-600 border-2 border-transparent rounded-xl hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddContactModal
