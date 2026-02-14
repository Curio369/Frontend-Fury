# AEGIS – The Unified Digital Citadel

A modern, production-grade frontend platform for university campus management built with React, Tailwind CSS, and Framer Motion.

## Features

### 🏔️ Himalayan-Inspired Design
- Calm, powerful aesthetic inspired by mountain landscapes
- Soft shadows, rounded cards, and subtle glassmorphism
- Professional color palette with day/night modes

### 🎨 Complete UI/UX
- **Landing Page**: Hero section with animated mountain background and Seven Pillars showcase
- **Authentication**: Login and Register pages with role selection and gate-opening animations
- **Dashboard**: Role-based layout with collapsible sidebar and notifications
- **Grievance System**: Submit, track, and manage grievances with animated status timeline
- **Academic Mastery**: Course management, resource vault, and calendar view
- **Opportunities**: Internship discovery with application tracking and task management
- **Clubs & Events**: Club discovery, event registration, and announcement feed

### 🌓 Dark Mode Support
- Seamless theme switching with persistent preference
- Optimized color schemes for both light and dark modes

### ✨ Animations & Interactions
- Smooth page transitions with Framer Motion
- Micro-interactions on hover and click
- Card animations with scroll-based reveals
- Loading states and status change animations

## Tech Stack

- **React 18.3.1** - UI framework
- **Tailwind CSS 3.4.1** - Utility-first styling
- **Framer Motion 11.0.5** - Animation library
- **React Router 6.22.0** - Client-side routing
- **Vite 5.4.2** - Build tool

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Badge.jsx
│   ├── Button.jsx
│   ├── Card.jsx
│   ├── Input.jsx
│   ├── Modal.jsx
│   └── ThemeToggle.jsx
├── context/            # React context providers
│   └── ThemeContext.jsx
├── pages/              # Page components
│   ├── Landing.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   ├── Dashboard.jsx
│   ├── GrievanceSystem.jsx
│   ├── AcademicMastery.jsx
│   ├── Opportunities.jsx
│   └── ClubsAnnouncements.jsx
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## Color Palette

### Day Mode
- **Sky Blue** (#87CEEB) - Highlights
- **Forest Green** (#2D5016) - Primary actions
- **Mist** (#F0F4F8) - Background
- **Stone** (#E8E8E8) - Cards

### Night Mode
- **Deep Navy** (#1a2332) - Background
- **Slate** (#334155) - Cards
- **Emerald** (#059669) - Highlights
- **Dark Mist** (#1e293b) - Secondary background

## Features by Module

### Landing Page
- Animated hero section with mountain SVG
- Seven Pillars feature cards
- Scroll-based animations
- Mission statement section

### Authentication
- Role-based login (Student, Faculty, Authority, Admin)
- Multi-step registration
- Gate-opening animation on successful login
- Form validation

### Dashboard
- Collapsible sidebar navigation
- Statistics overview
- Recent activity feed
- Notification system
- Role-specific content

### Grievance System
- Multi-step grievance submission
- Status tracking timeline
- Filterable grievance list
- Priority and category management
- Progress visualization

### Academic Mastery
- Course cards with progress tracking
- Credit summary visualization
- Vault of Knowledge (resource library)
- Calendar view with upcoming events
- Attendance and grade tracking

### Opportunities
- Internship discovery and filtering
- Application status tracking
- Task manager with progress bars
- Application submission modal
- Deadline tracking

### Clubs & Announcements
- Club discovery with hover effects
- Event timeline and registration
- Announcement feed with priorities
- Member count and event tracking
- Category-based organization

## Development Notes

- All animations use Framer Motion for smooth, performant transitions
- Tailwind CSS utilities are used throughout for consistent styling
- Component-based architecture for easy maintenance
- Dark mode implemented via Context API
- Responsive design for mobile, tablet, and desktop

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This is a frontend-only demonstration project.
