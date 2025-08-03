/* ==========================================
   PARTICLES.JS CONFIGURATION
   Based on your Page_Background reference
   ========================================== */

// Simple particles.js configuration that loads without issues
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 80,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": ["#ff0080", "#00ffff", "#0080ff", "#00ff80"]
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            }
        },
        "opacity": {
            "value": 0.6,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 2,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#00ffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "window",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 200,
                "line_linked": {
                    "opacity": 0.8
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

console.log('🎆 Particles.js loaded successfully!');

// Alternative configurations for different sections
const particleConfigs = {
    hero: {
        particles: {
            number: { value: 100 },
            color: { value: ["#ff0080", "#00ffff"] },
            size: { value: 4 },
            move: { speed: 3 },
            line_linked: {
                color: "#ff0080",
                opacity: 0.6
            }
        },
        interactivity: {
            events: {
                onhover: { mode: ["grab", "bubble"] },
                onclick: { mode: "push" }
            },
            modes: {
                grab: { distance: 200 },
                bubble: { distance: 300, size: 10 }
            }
        }
    },

    skills: {
        particles: {
            number: { value: 80 },
            color: { value: ["#0080ff", "#00ff80"] },
            size: { value: 3 },
            move: { speed: 2 },
            line_linked: {
                color: "#0080ff",
                opacity: 0.5
            }
        },
        interactivity: {
            events: {
                onhover: { mode: "repulse" },
                onclick: { mode: "bubble" }
            }
        }
    },

    projects: {
        particles: {
            number: { value: 150 },
            color: { value: ["#8000ff", "#ff4000", "#00ff80"] },
            size: { value: 5 },
            move: { speed: 4 },
            line_linked: {
                color: "#00ff80",
                opacity: 0.7
            }
        },
        interactivity: {
            events: {
                onhover: { mode: ["grab", "bubble"] },
                onclick: { mode: ["push", "bubble"] }
            },
            modes: {
                grab: { distance: 250 },
                bubble: { distance: 400, size: 12 }
            }
        }
    }
};

// Enhanced particle interaction functions
function enhanceParticleInteractions() {
    // Wait for particles to be initialized
    setTimeout(() => {
        if (window.pJSDom && window.pJSDom[0]) {
            const canvas = document.querySelector('#particles-js canvas');

            if (canvas) {
                // Add custom mouse move effects
                canvas.addEventListener('mousemove', (e) => {
                    const rect = canvas.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    // Create ripple effect on mouse move
                    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
                        window.pJSDom[0].pJS.particles.array.forEach((particle) => {
                            const dx = particle.x - x;
                            const dy = particle.y - y;
                            const distance = Math.sqrt(dx * dx + dy * dy);

                            if (distance < 100) {
                                // Enhance particle glow on proximity
                                particle.opacity.value = Math.min(1, particle.opacity.value + 0.2);
                            }
                        });
                    }
                });

                // Add click effects
                canvas.addEventListener('click', (e) => {
                    const rect = canvas.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;

                    // Create explosion effect
                    if (window.pJSDom[0].pJS.fn.modes.pushParticles) {
                        window.pJSDom[0].pJS.fn.modes.pushParticles(8, {
                            pos_x: x,
                            pos_y: y
                        });
                    }
                });

                console.log('✨ Enhanced particle interactions activated!');
            }
        }
    }, 1000);
}

// Function to update particles configuration
function updateParticles(configName) {
    if (window.pJSDom && window.pJSDom[0] && particleConfigs[configName]) {
        const config = particleConfigs[configName];
        Object.assign(window.pJSDom[0].pJS.particles, config.particles);
        if (config.interactivity) {
            Object.assign(window.pJSDom[0].pJS.interactivity, config.interactivity);
        }
        window.pJSDom[0].pJS.fn.particlesRefresh();
    }
}

// Initialize enhanced interactions when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    enhanceParticleInteractions();

    // Debug function to test interactions
    window.testParticles = () => {
        console.log('🧪 Testing particle interactions...');
        const canvas = document.querySelector('#particles-js canvas');
        if (canvas) {
            console.log('✅ Canvas found and interactive');
            console.log('✅ Canvas pointer events:', window.getComputedStyle(canvas).pointerEvents);
            console.log('✅ Particles object:', window.pJSDom ? '✅ Available' : '❌ Not found');
        } else {
            console.log('❌ Canvas not found');
        }
    };

    // Auto-test after 2 seconds
    setTimeout(() => {
        if (typeof window.testParticles === 'function') {
            window.testParticles();
        }
    }, 2000);
});

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { updateParticles, particleConfigs, enhanceParticleInteractions };
}
