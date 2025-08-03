/* ==========================================
   VIBHOR'S PORTFOLIO - MAIN JAVASCRIPT
   ========================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initSkillCards();
    initProjects();
    initTimeline();
    initContactForm();
    initTerminal();
    initScrollEffects();
    // Removed initParticleInteractions() temporarily to fix loading issue

    console.log('🚀 Portfolio loaded successfully!');
});

/* ==========================================
   NAVIGATION FUNCTIONALITY
   ========================================== */
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Active link highlighting on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(0, 0, 17, 0.95)';
        } else {
            navbar.style.background = 'rgba(0, 0, 17, 0.9)';
        }
    });
}

/* ==========================================
   SCROLL ANIMATIONS (AOS)
   ========================================== */
function initScrollAnimations() {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        offset: 100
    });

    // Custom scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.skill-card, .stat-item').forEach(el => {
        observer.observe(el);
    });
}

/* ==========================================
   SKILL CARDS WITH TILT EFFECT
   ========================================== */
function initSkillCards() {
    // Initialize Vanilla Tilt for skill cards
    VanillaTilt.init(document.querySelectorAll('[data-tilt]'), {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.2,
        scale: 1.05
    });

    // Add custom hover effects
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = 'var(--neon-blue)';
            card.style.boxShadow = '0 0 30px var(--neon-blue)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'rgba(0, 128, 255, 0.3)';
            card.style.boxShadow = 'none';
        });
    });
}

/* ==========================================
   PROJECTS SECTION
   ========================================== */
function initProjects() {
    const projectsData = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
            image: "assets/images/project1.jpg",
            technologies: ["React", "Node.js", "MongoDB", "Express"],
            category: "fullstack",
            github: "https://github.com/whovibhor/ecommerce",
            live: "https://ecommerce-demo.com",
            featured: true
        },
        {
            id: 2,
            title: "Portfolio Website",
            description: "Responsive portfolio website with modern design and animations",
            image: "assets/images/project2.jpg",
            technologies: ["HTML5", "CSS3", "JavaScript", "AOS"],
            category: "frontend",
            github: "https://github.com/whovibhor/portfolio",
            live: "https://vibhor-portfolio.com",
            featured: true
        },
        {
            id: 3,
            title: "Task Management API",
            description: "RESTful API for task management with authentication",
            image: "assets/images/project3.jpg",
            technologies: ["Python", "Flask", "PostgreSQL", "JWT"],
            category: "python",
            github: "https://github.com/whovibhor/task-api",
            live: null,
            featured: false
        },
        {
            id: 4,
            title: "Weather Dashboard",
            description: "Interactive weather dashboard with data visualization",
            image: "assets/images/project4.jpg",
            technologies: ["JavaScript", "Chart.js", "Weather API"],
            category: "frontend",
            github: "https://github.com/whovibhor/weather-dashboard",
            live: "https://weather-dash.com",
            featured: false
        },
        {
            id: 5,
            title: "Blog CMS",
            description: "Content management system for blogs with admin panel",
            image: "assets/images/project5.jpg",
            technologies: ["Laravel", "PHP", "MySQL", "Bootstrap"],
            category: "fullstack",
            github: "https://github.com/whovibhor/blog-cms",
            live: "https://blog-cms-demo.com",
            featured: true
        },
        {
            id: 6,
            title: "Data Analysis Tool",
            description: "Python tool for data analysis and visualization",
            image: "assets/images/project6.jpg",
            technologies: ["Python", "Pandas", "Matplotlib", "Jupyter"],
            category: "python",
            github: "https://github.com/whovibhor/data-analysis",
            live: null,
            featured: false
        }
    ];

    // Render projects
    function renderProjects(projects) {
        const projectsGrid = document.getElementById('projects-grid');
        projectsGrid.innerHTML = '';

        projects.forEach((project, index) => {
            const projectCard = createProjectCard(project, index);
            projectsGrid.appendChild(projectCard);
        });

        // Initialize tilt effect for new cards
        VanillaTilt.init(document.querySelectorAll('.project-card'), {
            max: 15,
            speed: 400,
            glare: true,
            'max-glare': 0.1
        });
    }

    // Create project card
    function createProjectCard(project, index) {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', (index * 100).toString());
        card.setAttribute('data-category', project.category);

        card.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" onerror="this.src='assets/images/placeholder.jpg'">
                <div class="project-overlay">
                    <div class="project-links">
                        ${project.github ? `<a href="${project.github}" target="_blank" class="project-link">
                            <i class="fab fa-github"></i>
                        </a>` : ''}
                        ${project.live ? `<a href="${project.live}" target="_blank" class="project-link">
                            <i class="fas fa-external-link-alt"></i>
                        </a>` : ''}
                    </div>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;

        return card;
    }

    // Project filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter projects
            const filter = button.getAttribute('data-filter');
            const filteredProjects = filter === 'all'
                ? projectsData
                : projectsData.filter(project => project.category === filter);

            renderProjects(filteredProjects);
        });
    });

    // Initial render
    renderProjects(projectsData);
}

/* ==========================================
   TIMELINE SECTION
   ========================================== */
function initTimeline() {
    const timelineData = [
        {
            year: "2020",
            title: "Started Programming Journey",
            description: "Began learning web development with HTML, CSS, and JavaScript",
            icon: "fas fa-play"
        },
        {
            year: "2021",
            title: "Bachelor's Degree",
            description: "Completed Bachelor's in Computer Science with focus on software development",
            icon: "fas fa-graduation-cap"
        },
        {
            year: "2022",
            title: "First Internship",
            description: "Worked as Frontend Developer intern at a tech startup",
            icon: "fas fa-briefcase"
        },
        {
            year: "2023",
            title: "Full Stack Development",
            description: "Expanded skills to backend development with Node.js and Python",
            icon: "fas fa-code"
        },
        {
            year: "2024",
            title: "MCA Program",
            description: "Started Master's in Computer Applications to deepen technical knowledge",
            icon: "fas fa-university"
        },
        {
            year: "2025",
            title: "YouTube Channel",
            description: "Launched 'The 7GPA Guy' channel to share programming knowledge",
            icon: "fab fa-youtube"
        }
    ];

    const timelineContainer = document.querySelector('.timeline-container');

    // Create timeline line
    const timelineLine = document.createElement('div');
    timelineLine.className = 'timeline-line';
    timelineContainer.appendChild(timelineLine);

    // Create timeline items
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.setAttribute('data-aos', index % 2 === 0 ? 'fade-right' : 'fade-left');
        timelineItem.setAttribute('data-aos-delay', (index * 200).toString());

        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-icon">
                    <i class="${item.icon}"></i>
                </div>
                <div class="timeline-info">
                    <span class="timeline-year">${item.year}</span>
                    <h3 class="timeline-title">${item.title}</h3>
                    <p class="timeline-description">${item.description}</p>
                </div>
            </div>
        `;

        timelineContainer.appendChild(timelineItem);
    });
}

/* ==========================================
   CONTACT FORM
   ========================================== */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;

        try {
            // Simulate form submission (replace with actual form handler)
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Show success message
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();

        } catch (error) {
            // Show error message
            showNotification('Failed to send message. Please try again.', 'error');
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

/* ==========================================
   TERMINAL (EASTER EGG)
   ========================================== */
function initTerminal() {
    const terminal = document.getElementById('terminal');
    const terminalInput = document.getElementById('terminal-input');
    const terminalContent = document.getElementById('terminal-content');
    const terminalClose = document.getElementById('terminal-close');

    // Terminal commands
    const commands = {
        help: () => {
            return `Available commands:
• help - Show this help message
• about - Display information about me
• skills - List my technical skills
• projects - Show my recent projects
• contact - Get my contact information
• social - Display social media links
• resume - Download my resume
• clear - Clear the terminal
• exit - Close the terminal`;
        },

        about: () => {
            return `👨‍💻 About Vibhor:
• Full Stack Developer passionate about creating amazing web experiences
• Currently pursuing MCA to deepen technical knowledge
• Creator of "The 7GPA Guy" YouTube channel
• Love coding, learning, and sharing knowledge with the community`;
        },

        skills: () => {
            return `🛠️ Technical Skills:
Frontend: HTML5, CSS3, JavaScript, React
Backend: Node.js, Python, PHP, Laravel
Database: MySQL, MongoDB, PostgreSQL
Tools: Git, Docker, AWS, VS Code
Other: RESTful APIs, GraphQL, Responsive Design`;
        },

        projects: () => {
            return `🚀 Recent Projects:
1. E-Commerce Platform - Full-stack solution with React & Node.js
2. Portfolio Website - This interactive portfolio you're viewing
3. Task Management API - RESTful API with Python Flask
4. Weather Dashboard - Data visualization with Chart.js
5. Blog CMS - Content management system with Laravel
6. Data Analysis Tool - Python data processing application`;
        },

        contact: () => {
            return `📧 Contact Information:
Email: your.email@example.com
Phone: +91 XXXXX XXXXX
Location: Your Location, India
LinkedIn: linkedin.com/in/yourprofile`;
        },

        social: () => {
            return `🌐 Social Media:
• GitHub: github.com/whovibhor
• LinkedIn: linkedin.com/in/yourprofile
• YouTube: youtube.com/the7gpaguy
• Twitter: twitter.com/yourusername`;
        },

        resume: () => {
            // Trigger resume download
            const link = document.createElement('a');
            link.href = 'assets/pdf/resume.pdf';
            link.download = 'Vibhor_Resume.pdf';
            link.click();
            return '📄 Resume download started...';
        },

        clear: () => {
            terminalContent.innerHTML = '';
            return '';
        },

        exit: () => {
            terminal.style.display = 'none';
            return '';
        }
    };

    // Listen for secret key sequence to open terminal
    let keySequence = '';
    document.addEventListener('keydown', (e) => {
        keySequence += e.key.toLowerCase();
        if (keySequence.includes('cli')) {
            terminal.style.display = 'flex';
            terminalInput.focus();
            keySequence = '';
        }
        // Reset sequence if it gets too long
        if (keySequence.length > 10) {
            keySequence = '';
        }
    });

    // Handle terminal input
    terminalInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const command = terminalInput.value.trim().toLowerCase();
            terminalInput.value = '';

            // Add command to terminal
            const commandLine = document.createElement('p');
            commandLine.innerHTML = `<span style="color: var(--neon-cyan);">visitor@portfolio:~$ </span>${command}`;
            terminalContent.appendChild(commandLine);

            // Execute command
            if (commands[command]) {
                const output = commands[command]();
                if (output) {
                    const outputElement = document.createElement('pre');
                    outputElement.textContent = output;
                    outputElement.style.color = 'var(--neon-green)';
                    outputElement.style.marginBottom = '1rem';
                    terminalContent.appendChild(outputElement);
                }
            } else if (command) {
                const errorElement = document.createElement('p');
                errorElement.textContent = `Command '${command}' not found. Type 'help' for available commands.`;
                errorElement.style.color = 'var(--neon-pink)';
                terminalContent.appendChild(errorElement);
            }

            // Scroll to bottom
            terminalContent.scrollTop = terminalContent.scrollHeight;
        }
    });

    // Close terminal
    terminalClose.addEventListener('click', () => {
        terminal.style.display = 'none';
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && terminal.style.display === 'flex') {
            terminal.style.display = 'none';
        }
    });
}

/* ==========================================
   SCROLL EFFECTS
   ========================================== */
function initScrollEffects() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-section');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
}

/* ==========================================
   UTILITY FUNCTIONS
   ========================================== */
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 2rem',
        borderRadius: '10px',
        color: 'white',
        fontWeight: '600',
        zIndex: '10000',
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease'
    });

    // Set background color based on type
    const colors = {
        success: 'linear-gradient(135deg, var(--neon-green), #00cc66)',
        error: 'linear-gradient(135deg, var(--neon-pink), #cc0066)',
        info: 'linear-gradient(135deg, var(--neon-cyan), #0099cc)'
    };
    notification.style.background = colors[type] || colors.info;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 5000);
}

// Typing effect for dynamic text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Add glow effect to elements on hover
function addGlowEffect(selector, color) {
    document.querySelectorAll(selector).forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.boxShadow = `0 0 30px ${color}`;
        });

        element.addEventListener('mouseleave', () => {
            element.style.boxShadow = '';
        });
    });
}

// Initialize glow effects
document.addEventListener('DOMContentLoaded', () => {
    addGlowEffect('.btn-primary', 'var(--neon-pink)');
    addGlowEffect('.btn-secondary', 'var(--neon-cyan)');
    addGlowEffect('.social-link', 'var(--neon-pink)');
});

console.log('✨ Portfolio JavaScript loaded successfully!');
