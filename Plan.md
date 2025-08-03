🧠 PROJECT NAME
Vibhor’s Interactive Developer Portfolio
Tagline (you can change later): “Code. Create. Connect.”

📦 TECH STACK
Layer	Tools/Tech	Purpose
Frontend	HTML5, CSS3, JavaScript (Vanilla)	Core structure & logic
Styling	CSS + TailwindCSS (optional)	Modern styling utility (you can skip)
Animation	particles.js, vanilla-tilt.js, AOS.js, simple-parallax-js	Visual interactivity
Icons	FontAwesome or Lucide	Clean iconography
Hosting	GitHub Pages	Free hosting with version control

🗂️ WEBSITE PAGES / SECTIONS (Single Page App feel)
Your site will be a single HTML file with smooth-scroll anchored sections:

Hero Section – Intro + Particle Animation + CTA

About Me – Quick summary + photo + soft animations

Skills / Tech Stack – Logos, skill bars, tilt hover

Projects – Tilted cards, filters (mini-JS logic)

Career Roadmap – Parallax timeline with scroll-triggered checkpoints

YouTube / Blog (Optional) – Highlights from "The 7GPA Guy"

Resume – Downloadable + highlights preview

Contact – Form + socials + animated background

Custom 404 Page – For GitHub Pages routing

🧩 INTERACTIVE ELEMENTS
Feature	Tool	Description
Background animation	particles.js	3 different per section
Tilt card effect	vanilla-tilt.js	Project cards, skill cards
Scroll animations	AOS.js	Fade in, slide, zoom
Parallax scroll	simple-parallax-js	Career road background, image layers
Section transitions	smooth-scroll.js or native scroll-behavior	Smooth feel between sections
Responsive layout	Media queries / Flex/Grid	Fully mobile + tablet friendly

🧠 LOGIC & FUNCTIONALITY (Vanilla JS)
Smooth scrolling to sections

Toggle between themes (dark/light)

Email form (via Formspree or EmailJS)

Card filtering on projects (e.g., Laravel, JS, Python)

Auto-download resume button

Parallax effects on scroll

Click to expand career milestones (optional)

🛠️ REQUIREMENTS TO BUILD
Design:
Moodboard (colors, fonts, section layout)

Consistent palette (3–4 colors max)

Favicon, profile picture, logos

Assets:
Resume (PDF)

Profile photo

Project screenshots

GitHub + YouTube links

Tools:
VS Code + Live Server

Git + GitHub

GitHub Pages for deployment

Canva/Figma for thumbnails/graphics

🚧 DEVELOPMENT PLAN
Phase	Milestone	Outcome
🔧 Setup	Folder structure, assets, HTML layout	Clean base template
🎨 Styling	CSS base + responsive layout	Mobile-ready, clean look
💫 Animation	Add particles.js, scroll animations	Dynamic sections
🧠 Logic	JS for filtering, scroll, toggle theme	Functionality
📤 Deployment	GitHub setup + Pages deployment	Live project online
🧼 Polish	SEO tags, favicon, loading speed	Professional finish

🧪 FOLDER STRUCTURE
lua
Copy
Edit
portfolio/
│
├── index.html
├── style/
│   └── main.css
├── js/
│   ├── main.js
│   ├── particles-config.js
│   └── tilt-config.js
├── assets/
│   ├── images/
│   └── pdf/
│       └── resume.pdf
├── libs/
│   ├── particles.min.js
│   ├── aos.min.js
│   └── vanilla-tilt.min.js
└── README.md
🧠 OPTIONAL ADD-ONS (You can add later)
Blog using Markdown to HTML

Project carousel (Swiper.js)

Typing effect on landing (typed.js)

Visitor counter / GitHub contribution stats

Easter egg: CLI mode