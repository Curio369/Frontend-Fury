# AEGIS Quick Start Guide

## 🚀 Getting Started

The development server is now running at: **http://localhost:5173/**

## 📋 Navigation Guide

### 1. Landing Page (/)
- Explore the hero section with animated mountain background
- Scroll down to view the Seven Pillars
- Click "Enter the Citadel" to go to login
- Click "Join AEGIS" to register

### 2. Authentication
**Login Page (/login)**
- Enter any email and password (frontend only, no validation)
- Select a role: Student, Faculty, Authority, or Admin
- Watch the gate-opening animation on submit

**Register Page (/register)**
- Step 1: Enter basic information
- Step 2: Select your role
- Multi-step animated form

### 3. Dashboard (/dashboard)
- View statistics overview
- Check recent activity
- Toggle sidebar (hamburger menu)
- Open notifications (bell icon)
- Switch between light/dark mode (top right)

### 4. Module Pages

**Grievance System (/grievance)**
- Filter by status: All, Submitted, Under Review, In Progress, Resolved
- Click "+ New Grievance" for step-based submission
- Click any grievance card to view detailed timeline

**Academic Mastery (/academic)**
- **Courses Tab**: View enrolled courses with progress bars
- **Vault Tab**: Search and browse educational resources
- **Calendar Tab**: See upcoming events and deadlines
- Click any course for detailed view

**Opportunities (/opportunities)**
- **Internships Tab**: Browse and filter internship opportunities
  - Filter by: All, Applied, Not Applied, Under Review, Accepted, Rejected
  - Click "Apply Now" to submit application
- **Tasks Tab**: Track your career preparation tasks

**Clubs & Events (/clubs)**
- **Clubs Tab**: Discover clubs with hover animations
- **Events Tab**: Browse events with registration progress
- **Announcements Tab**: View campus announcements

## 🎨 Features to Explore

### Dark Mode
- Toggle using the moon/sun icon in the top right
- Preference is saved to localStorage

### Animations
- Hover over cards for lift effect
- Watch page transition animations
- Notice micro-interactions on buttons
- Scroll-based reveals on landing page

### Responsive Design
- Resize browser to see mobile/tablet layouts
- Sidebar collapses on smaller screens
- Cards reflow for optimal viewing

## 🎯 Test Scenarios

1. **Complete User Journey**
   - Start at landing → Register → Login → Dashboard → Explore modules

2. **Grievance Workflow**
   - Submit new grievance (3-step form)
   - View grievance with status timeline
   - Filter by different statuses

3. **Academic Experience**
   - Check course progress
   - Search resources in vault
   - View upcoming calendar events

4. **Career Path**
   - Browse internships
   - Apply to opportunities
   - Track application status
   - Manage preparation tasks

5. **Campus Life**
   - Join clubs
   - Register for events
   - Read announcements

## 🎨 Color Theme Preview

**Light Mode**: White backgrounds, sky blue accents, forest green buttons
**Dark Mode**: Deep navy backgrounds, emerald accents, slate cards

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column layouts)
- **Tablet**: 768px - 1024px (2 column grids)
- **Desktop**: > 1024px (multi-column layouts)

## ⚡ Performance Notes

- Smooth 60fps animations via Framer Motion
- Optimized bundle size (~360KB JS, ~27KB CSS)
- Fast page transitions with React Router
- Lazy loading ready for production

## 🛠️ Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🎭 UI Components Used

- **Card**: Hover effects, glass morphism
- **Button**: Multiple variants (primary, secondary, ghost, danger)
- **Badge**: Status indicators with color coding
- **Modal**: Animated popups with backdrop blur
- **Input**: Form fields with icons and validation states
- **ThemeToggle**: Smooth day/night transition

## 💡 Tips

- Use **Ctrl/Cmd + Click** to open links in new tabs
- All data is **mock data** (frontend only)
- Forms don't require real validation
- Explore all tabs in each module for full experience

Enjoy exploring AEGIS – The Unified Digital Citadel! 🏔️
