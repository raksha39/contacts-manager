# Contacts Manager

A modern contacts management application built with React, Vite, and Tailwind CSS. This application provides a clean interface for managing your contacts with features like dark mode, real-time search, and persistent storage.

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat&logo=tailwind-css)

## Features

### Core Functionality

- Add new contacts with name, email, phone number, and favorite status
- Edit existing contact information
- Delete contacts
- Real-time search across name, email, and phone number fields
- Mark contacts as favorites with a star icon
- All data is saved to browser localStorage for persistence

### User Interface

- Gradient header design with blue color scheme
- Auto-generated gradient avatars with initials
- Smooth animations and transitions
- Sticky header that remains visible while scrolling
- Responsive design that works on all screen sizes
- Glassmorphism effects with backdrop blur

### Dark Mode

- Toggle between dark and light themes
- Theme preference is saved to localStorage
- Smooth color transitions
- Dark mode styling applied across all components

### Additional Features

- Clickable email addresses that open your default email client
- Clickable phone numbers that initiate calls on supported devices
- Hover actions for quick access to edit, favorite, and delete functions
- Empty state message when no contacts exist
- Alphabetically sortable contact list

### Contact Management

- 50 pre-loaded demo contacts with Indian names and details
- Form validation for email and phone number formats
- Data validation before adding new contacts
- Quick action buttons for common tasks

## Getting Started

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

## Build for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Technologies Used

- React 18.3 - JavaScript library for building user interfaces
- Vite 6.0 - Next-generation frontend tooling
- Tailwind CSS 4.0 - Utility-first CSS framework
- Lucide React - Icon toolkit
- localStorage API - Browser storage for data persistence

## Project Structure

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

## Key Components

### Header Component

- Application branding with icon
- Real-time search functionality
- Dark mode toggle button
- Add contact button

### Contact List Component

- Scrollable list with sticky header
- Gradient avatars displaying user initials
- Clickable email and phone links
- Hover actions for edit, favorite, and delete operations
- Empty state handling

### Modal Components

- Add Contact Modal - Form for creating new contacts
- Edit Contact Modal - Form for updating existing contacts
- Form validation with error messages
- Smooth animations and transitions

## Color Scheme

### Light Mode

- Background: Gradient from gray-50 via indigo-50 to purple-50
- Primary: Indigo/Purple gradient
- Text: Gray-900

### Dark Mode

- Background: Gradient from gray-900 via gray-800 to black
- Primary: Gray-800/Black gradient
- Text: White/Gray-300

## Key Features

### localStorage Persistence

All contacts are automatically saved to browser localStorage, ensuring your data persists even after closing the browser.

### Real-time Search

The search feature filters contacts instantly as you type, searching across name, email, and phone number fields.

### Form Validation

- Email validation checks for proper email format
- Phone validation supports Indian phone format (+91 XXXXX XXXXX)
- Required field validation prevents empty submissions

### Responsive Design

The application adapts to different screen sizes while maintaining full functionality and aesthetics.

## License

This project is open source and available under the MIT License.

## Author

Raksha

- GitHub: [@raksha39](https://github.com/raksha39)

## Acknowledgments

- Icons provided by Lucide
- UI design inspired by Google Contacts
- Built using React and Tailwind CSS

---

Note: This project uses browser localStorage for data persistence. For production use, consider implementing a backend API for data storage.
