/* ==========================================
   MINIMAL PORTFOLIO JAVASCRIPT
   ========================================== */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    console.log('🚀 Portfolio starting...');

    // Initialize only essential components
    try {
        initNavigation();
        console.log('✅ Navigation initialized');

        initScrollAnimations();
        console.log('✅ Scroll animations initialized');

        initCounterAnimation();
        console.log('✅ Counter animation initialized');

        loadProjects();
        console.log('✅ Projects loaded');

        loadTimeline();
        console.log('✅ Timeline loaded');

        // Refresh AOS after dynamic content is loaded
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
            console.log('✅ AOS refreshed for dynamic content');
        }

        console.log('🎉 Portfolio loaded successfully!');
    } catch (error) {
        console.error('❌ Error during initialization:', error);
    }
});

/* ==========================================
   NAVIGATION FUNCTIONALITY
   ========================================== */
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!navToggle || !navMenu) {
        console.warn('Navigation elements not found');
        return;
    }

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
}

/* ==========================================
   SCROLL ANIMATIONS (AOS + CUSTOM BIDIRECTIONAL)
   ========================================== */
function initScrollAnimations() {
    // Check if AOS is loaded
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: false,           // Allow animations to trigger multiple times
            mirror: true,          // Enable bidirectional animations
            offset: 120,           // Trigger animations 120px before element comes into view
            anchorPlacement: 'top-bottom', // When top of element hits bottom of viewport
            debounceDelay: 50,     // Delay for triggering animation on resize/scroll
            throttleDelay: 99      // Delay for throttling animation calculations
        });
        console.log('✅ AOS initialized with bidirectional animations');

        // Add custom bidirectional scroll listener as backup
        initCustomBidirectionalAnimations();
    } else {
        console.warn('⚠️ AOS not loaded');
        // Fallback to custom animations only
        initCustomBidirectionalAnimations();
    }
}

// Custom bidirectional animation system
function initCustomBidirectionalAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    let lastScrollTop = 0;

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
        const windowHeight = window.innerHeight;

        animatedElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            // Element is in viewport
            const isInViewport = elementTop < windowHeight && elementBottom > 0;

            if (isInViewport) {
                // Add animation class based on scroll direction
                element.classList.add('aos-animate');
                element.style.opacity = '1';
                element.style.transform = 'translateY(0) translateX(0)';
            } else {
                // Remove animation when out of viewport
                if (scrollDirection === 'up' && elementTop > windowHeight) {
                    // Element is above viewport when scrolling up
                    element.classList.remove('aos-animate');
                    resetElementAnimation(element);
                } else if (scrollDirection === 'down' && elementBottom < 0) {
                    // Element is below viewport when scrolling down
                    element.classList.remove('aos-animate');
                    resetElementAnimation(element);
                }
            }
        });

        lastScrollTop = scrollTop;
    }

    function resetElementAnimation(element) {
        const animation = element.getAttribute('data-aos');

        // Reset based on animation type
        switch (animation) {
            case 'fade-up':
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                break;
            case 'fade-down':
                element.style.opacity = '0';
                element.style.transform = 'translateY(-30px)';
                break;
            case 'fade-left':
                element.style.opacity = '0';
                element.style.transform = 'translateX(30px)';
                break;
            case 'fade-right':
                element.style.opacity = '0';
                element.style.transform = 'translateX(-30px)';
                break;
            default:
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
        }
    }

    // Initialize elements in their starting state
    animatedElements.forEach(element => {
        element.style.transition = 'all 1s ease-in-out';
        resetElementAnimation(element);
    });

    // Add scroll listener with throttling
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(handleScroll, 10);
    });

    // Initial check
    handleScroll();

    console.log('✅ Custom bidirectional animations initialized');
}

console.log('📄 Main.js minimal version loaded');

/* ==========================================
   PROJECTS DATA & LOADING
   ========================================== */
const projectsData = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce platform with user authentication, payment integration, and admin dashboard.",
        image: "assets/images/projects/ecommerce.jpg",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        category: "fullstack",
        github: "https://github.com/whovibhor/ecommerce-platform",
        live: "https://demo-ecommerce.com"
    },
    {
        id: 2,
        title: "Portfolio Website",
        description: "A responsive portfolio website with modern design, animations, and interactive particle background.",
        image: "assets/images/projects/portfolio.jpg",
        technologies: ["HTML5", "CSS3", "JavaScript", "Particles.js"],
        category: "frontend",
        github: "https://github.com/whovibhor/portfolio",
        live: "https://vibhor-portfolio.com"
    },
    {
        id: 3,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates and team collaboration features.",
        image: "assets/images/projects/taskapp.jpg",
        technologies: ["Vue.js", "Firebase", "Node.js", "Socket.io"],
        category: "fullstack",
        github: "https://github.com/whovibhor/task-manager",
        live: "https://taskmanager-demo.com"
    },
    {
        id: 4,
        title: "Data Analysis Tool",
        description: "A Python-based tool for data analysis and visualization with interactive charts and reports.",
        image: "assets/images/projects/datatools.jpg",
        technologies: ["Python", "Pandas", "Flask", "Chart.js"],
        category: "python",
        github: "https://github.com/whovibhor/data-analysis-tool",
        live: "#"
    },
    {
        id: 5,
        title: "Weather App",
        description: "A beautiful weather application with location-based forecasts and interactive maps.",
        image: "assets/images/projects/weather.jpg",
        technologies: ["React", "Weather API", "CSS3", "Chart.js"],
        category: "frontend",
        github: "https://github.com/whovibhor/weather-app",
        live: "https://weather-app-demo.com"
    },
    {
        id: 6,
        title: "Chat Application",
        description: "Real-time chat application with multiple rooms, file sharing, and emoji support.",
        image: "assets/images/projects/chat.jpg",
        technologies: ["Node.js", "Socket.io", "Express", "MongoDB"],
        category: "fullstack",
        github: "https://github.com/whovibhor/chat-app",
        live: "https://chat-demo.com"
    }
];

function loadProjects() {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) {
        console.warn('Projects grid not found');
        return;
    }

    projectsData.forEach((project, index) => {
        const projectCard = `
            <div class="project-card" data-category="${project.category}" data-aos="fade-up" data-aos-delay="${index * 100}">
                <div class="project-image">
                    <div class="project-overlay">
                        <div class="project-links">
                            <a href="${project.github}" class="project-link" target="_blank" title="View Code">
                                <i class="fab fa-github"></i>
                            </a>
                            ${project.live !== '#' ? `<a href="${project.live}" class="project-link" target="_blank" title="Live Demo">
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
            </div>
        `;
        projectsGrid.innerHTML += projectCard;
    });

    // Initialize project filtering
    initProjectFilters();
}

function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/* ==========================================
   TIMELINE DATA & LOADING
   ========================================== */
const timelineData = [
    {
        year: "2025",
        title: "MCA Final Year",
        description: "Currently pursuing Master of Computer Applications with focus on Full Stack Development and emerging technologies.",
        icon: "fas fa-graduation-cap"
    },
    {
        year: "2024",
        title: "YouTube Channel Launch",
        description: "Started 'The 7GPA Guy' YouTube channel to share programming tutorials and study tips, reaching 10K+ views.",
        icon: "fab fa-youtube"
    },
    {
        year: "2023",
        title: "Full Stack Development",
        description: "Mastered MERN stack development and built multiple full-stack applications with modern technologies.",
        icon: "fas fa-code"
    },
    {
        year: "2022",
        title: "Web Development Journey",
        description: "Started learning web development with HTML, CSS, and JavaScript. Built first portfolio website.",
        icon: "fas fa-laptop-code"
    },
    {
        year: "2021",
        title: "Programming Foundation",
        description: "Began programming journey with Python and C++. Developed strong problem-solving skills.",
        icon: "fas fa-rocket"
    }
];

function loadTimeline() {
    const timelineContainer = document.querySelector('.timeline-container');
    if (!timelineContainer) {
        console.warn('Timeline container not found');
        return;
    }

    // Add timeline line
    timelineContainer.innerHTML = '<div class="timeline-line"></div>';

    timelineData.forEach((item, index) => {
        const timelineItem = `
            <div class="timeline-item" data-aos="fade-up" data-aos-delay="${index * 200}">
                <div class="timeline-content">
                    <div class="timeline-icon">
                        <i class="${item.icon}"></i>
                    </div>
                    <span class="timeline-year">${item.year}</span>
                    <h3 class="timeline-title">${item.title}</h3>
                    <p class="timeline-description">${item.description}</p>
                </div>
            </div>
        `;
        timelineContainer.innerHTML += timelineItem;
    });
}

/* ==========================================
   COUNTER ANIMATION FOR STATS
   ========================================== */
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number[data-count]');

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const startValue = 0;
            const duration = 2000; // 2 seconds
            const startTime = Date.now();

            const updateCounter = () => {
                const currentTime = Date.now();
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Easing function for smooth animation
                const easedProgress = 1 - Math.pow(1 - progress, 3);
                const currentValue = Math.floor(startValue + (target - startValue) * easedProgress);

                // Format the number based on target value
                if (target >= 10000) {
                    counter.textContent = (currentValue / 1000).toFixed(0) + 'K+';
                } else {
                    counter.textContent = currentValue + '+';
                }

                if (progress < 1) {
                    requestAnimationFrame(updateCounter);
                }
            };

            updateCounter();
        });
    };

    // Intersection Observer to trigger animation when stats come into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
            }
        });
    }, {
        threshold: 0.5
    });

    // Observe the stats section
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
}
