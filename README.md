# 📇 Contacts Manager

A modern, feature-rich contacts management application built with React, Vite, and Tailwind CSS. Manage your contacts with style using a beautiful gradient UI, dark mode, and smooth animations.

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat&logo=tailwind-css)

## ✨ Features

### 📋 Core Functionality

- **Add Contacts** - Create new contacts with name, email, phone number, and favorite status
- **Edit Contacts** - Update contact information anytime
- **Delete Contacts** - Remove contacts with a single click
- **Search** - Real-time search across name, email, and phone number
- **Favorites** - Mark contacts as favorites with a star icon
- **Persistent Storage** - All contacts are saved to browser localStorage

### 🎨 User Interface

- **Beautiful Gradient Header** - Eye-catching blue gradient design
- **Colorful Avatars** - Auto-generated gradient avatars with initials
- **Smooth Animations** - Fade-in, slide-in, and hover effects
- **Sticky Header** - Contact list header stays visible while scrolling
- **Responsive Design** - Works seamlessly on all screen sizes
- **Glassmorphism Effects** - Modern backdrop blur and transparency

### 🌓 Dark Mode

- **Toggle Dark/Light Mode** - Switch between themes with one click
- **Persistent Theme** - Your preference is saved and remembered
- **Smooth Transitions** - All colors change smoothly with animations
- **Full Coverage** - Dark mode applies to all components

### 🔗 Smart Features

- **Clickable Email** - Opens default email client
- **Clickable Phone** - Initiates calls on supported devices
- **Hover Actions** - Edit, favorite, and delete buttons appear on hover
- **Empty State** - Friendly message when no contacts exist
- **Contact Counter** - See how many contacts you have
- **Alphabetically Sorted** - Contacts can be sorted alphabetically

### 📱 Contact Management

- **50 Pre-loaded Contacts** - Demo data with Indian names and details
- **Form Validation** - Ensures valid email and phone number formats
- **Duplicate Prevention** - Validates data before adding
- **Quick Actions** - Fast access to edit, favorite, and delete

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/raksha39/contacts-manager.git
cd contacts-manager
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## 🛠️ Technologies Used

- **React 18.3** - JavaScript library for building user interfaces
- **Vite 6.0** - Next-generation frontend tooling
- **Tailwind CSS 4.0** - Utility-first CSS framework
- **Lucide React** - Beautiful & consistent icon toolkit
- **localStorage API** - Browser storage for data persistence

## 📂 Project Structure

```
contacts-manager/
├── public/
├── src/
│   ├── components/
│   │   ├── add-contact-modal.jsx      # Modal for adding new contacts
│   │   ├── edit-contact-modal.jsx     # Modal for editing contacts
│   │   ├── contact-list.jsx           # Main contact list component
│   │   └── header.jsx                 # Header with search and dark mode
│   ├── data/
│   │   └── contacts.json              # Initial contact data
│   ├── App.jsx                        # Main application component
│   ├── main.jsx                       # Application entry point
│   └── index.css                      # Global styles and animations
├── package.json
└── README.md
```

## 🎯 Key Components

### Header

- App branding with icon
- Real-time search functionality
- Dark mode toggle button
- Add contact button

### Contact List

- Scrollable list with sticky header
- Gradient avatars with initials
- Clickable email and phone links
- Hover actions (edit, favorite, delete)
- Empty state handling

### Modals

- Add Contact Modal - Form to create new contacts
- Edit Contact Modal - Form to update existing contacts
- Form validation with error messages
- Smooth animations and transitions

## 🎨 Color Scheme

### Light Mode

- Background: Gradient from gray-50 via indigo-50 to purple-50
- Primary: Indigo/Purple gradient
- Text: Gray-900

### Dark Mode

- Background: Gradient from gray-900 via gray-800 to black
- Primary: Gray-800/Black gradient
- Text: White/Gray-300

## 🔑 Key Features Explained

### localStorage Persistence

All contacts are automatically saved to browser localStorage, so your data persists even after closing the browser.

### Real-time Search

Search filters contacts instantly as you type, searching across name, email, and phone number fields.

### Form Validation

- Email validation: Checks for proper email format
- Phone validation: Validates Indian phone format (+91 XXXXX XXXXX)
- Required field validation

### Responsive Design

The application adapts to different screen sizes while maintaining functionality and aesthetics.

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Raksha**

- GitHub: [@raksha39](https://github.com/raksha39)

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- UI inspiration from Google Contacts
- Built with ❤️ using React and Tailwind CSS

---

**Note**: This project uses browser localStorage for data persistence. For production use, consider implementing a backend API for data storage.
