# 🚀 Vibhor's Interactive Developer Portfolio

A stunning, interactive portfolio website featuring a neon-futuristic theme with particle animations, smooth scrolling, and modern web technologies.

## ✨ Features

- **Neon Futuristic Design** - Cyberpunk-inspired aesthetic with glowing effects
- **Interactive Particle Background** - Dynamic particle animations using particles.js
- **Smooth Animations** - Scroll-triggered animations with AOS.js
- **Tilt Effects** - 3D tilt interactions for cards using vanilla-tilt.js
- **Responsive Design** - Fully responsive across all devices
- **Project Filtering** - Dynamic project filtering by technology
- **Career Timeline** - Interactive timeline with parallax effects
- **Easter Egg Terminal** - Hidden CLI interface (press 'c-l-i' keys)
- **Contact Form** - Functional contact form with validation
- **SEO Optimized** - Proper meta tags and semantic HTML

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **JavaScript** - Vanilla JS for all interactions
- **Orbitron & Audiowide** - Google Fonts for futuristic typography

### Libraries & Frameworks
- **particles.js** - Interactive particle background
- **AOS.js** - Animate On Scroll library
- **vanilla-tilt.js** - 3D tilt hover effects
- **Font Awesome** - Icon library

### Tools & Hosting
- **VS Code** - Development environment
- **Git** - Version control
- **GitHub Pages** - Hosting platform

## 📁 Project Structure

```
portfolio/
│
├── index.html              # Main HTML file
├── style/
│   └── main.css           # Main stylesheet with neon theme
├── js/
│   ├── main.js            # Main JavaScript functionality
│   └── particles-config.js # Particles.js configuration
├── libs/
│   ├── particles.min.js   # Particles.js library
│   ├── aos.min.js         # AOS animation library
│   ├── aos.min.css        # AOS stylesheet
│   └── vanilla-tilt.min.js # Vanilla Tilt library
├── assets/
│   ├── images/            # Project images and photos
│   └── pdf/               # Resume and documents
├── Page_Background/       # Reference design files
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser
- Basic knowledge of HTML, CSS, JavaScript
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/whovibhor/portfolio.git
   cd portfolio
   ```

2. **Open with Live Server**
   - Install VS Code Live Server extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

3. **Or simply open index.html in your browser**

### Customization

1. **Update Personal Information**
   - Edit `index.html` to add your details
   - Replace placeholder images in `assets/images/`
   - Update social media links

2. **Modify Colors**
   ```css
   :root {
     --neon-pink: #ff0080;    /* Primary accent */
     --neon-cyan: #00ffff;    /* Secondary accent */
     --neon-blue: #0080ff;    /* Skill cards */
     --neon-green: #00ff80;   /* Projects */
   }
   ```

3. **Add Projects**
   - Update the `projectsData` array in `js/main.js`
   - Add project images to `assets/images/`

4. **Customize Particles**
   - Modify `js/particles-config.js`
   - Adjust particle count, colors, and behavior

## 🎯 Sections Overview

### 🏠 Hero Section
- Animated name with gradient text
- Call-to-action buttons
- Smooth scroll indicator

### 👨‍💻 About Section
- Personal introduction
- Achievement statistics
- Profile image with hover effects

### 🛠️ Skills Section
- Categorized skill cards
- Tilt hover effects
- Technology icons

### 🚀 Projects Section
- Filterable project gallery
- Technology tags
- Live demo and GitHub links

### 📅 Timeline Section
- Career journey visualization
- Alternating layout design
- Animated milestones

### 📬 Contact Section
- Contact form with validation
- Social media links
- Contact information

## 🎮 Easter Egg - Terminal

Press the keys **c-l-i** in sequence to activate the hidden terminal! Available commands:
- `help` - Show available commands
- `about` - Information about me
- `skills` - List technical skills
- `projects` - Show recent projects
- `contact` - Get contact information
- `social` - Social media links
- `resume` - Download resume
- `clear` - Clear terminal
- `exit` - Close terminal

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## ⚡ Performance Features

- **Optimized Images** - Compressed and properly sized
- **Minimal Dependencies** - Only essential libraries
- **CSS Custom Properties** - Efficient theming
- **Lazy Loading** - Images load as needed
- **Smooth Animations** - Hardware-accelerated CSS

## 🔧 Development Setup

### Phase 1: Setup ✅
- [x] Project structure created
- [x] Dependencies installed
- [x] Git repository initialized
- [x] Basic HTML boilerplate

### Phase 2: Styling ✅
- [x] Neon color palette implemented
- [x] Particle background configured
- [x] Responsive layout completed
- [x] Typography and effects added

### Phase 3: Functionality ✅
- [x] Navigation with smooth scrolling
- [x] Scroll animations (AOS)
- [x] Project filtering system
- [x] Contact form validation
- [x] Terminal easter egg

### Phase 4: Content
- [ ] Add personal photos
- [ ] Update project descriptions
- [ ] Add real project links
- [ ] Create resume PDF

### Phase 5: Deployment
- [ ] GitHub Pages setup
- [ ] Domain configuration (optional)
- [ ] SEO optimization
- [ ] Performance testing

## 🎨 Color Palette

```css
/* Neon Colors */
--neon-pink: #ff0080     /* Primary accent, CTA buttons */
--neon-cyan: #00ffff     /* Navigation, links */
--neon-blue: #0080ff     /* Skills section */
--neon-green: #00ff80    /* Projects, success states */
--neon-purple: #8000ff   /* Gradients, accents */
--neon-orange: #ff4000   /* Highlights, warnings */

/* Background Colors */
--bg-primary: #000011    /* Main background */
--bg-secondary: #000022  /* Section backgrounds */
--bg-tertiary: #001122   /* Card backgrounds */
```

## 📝 To-Do List

- [ ] Add more project examples
- [ ] Implement blog section
- [ ] Add GitHub contribution calendar
- [ ] Create project detail modals
- [ ] Add loading animations
- [ ] Implement theme switcher
- [ ] Add print-friendly CSS
- [ ] Create sitemap.xml

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio! If you create something cool, I'd love to see it.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- **GitHub**: [github.com/whovibhor](https://github.com/whovibhor)
- **YouTube**: [The 7GPA Guy](https://youtube.com/the7gpaguy)

---

**Built with ❤️ and lots of ☕ by Vibhor**

*"Code. Create. Connect."*
