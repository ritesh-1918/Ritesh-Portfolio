// Particle System Initialization
function initParticles() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('quantum-particles').appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    
    for(let i = 0; i < 5000; i++) {
        vertices.push(
            Math.random() * 2000 - 1000,
            Math.random() * 2000 - 1000,
            Math.random() * 2000 - 1000
        );
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const material = new THREE.PointsMaterial({
        size: 1.5,
        color: new THREE.Color().setHSL(0.6, 0.8, 0.6),
        transparent: true,
        opacity: 0.7
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    camera.position.z = 1000;

    function animate() {
        requestAnimationFrame(animate);
        particles.rotation.x += 0.0001;
        particles.rotation.y += 0.0001;
        renderer.render(scene, camera);
    }
    animate();
}

// Skill Radar Chart
function initRadar() {
    const ctx = document.getElementById('quantum-radar').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['IoT', 'Embedded Systems', 'Verilog', 'MERN Stack', 'AI', 'Quantum'],
            datasets: [{
                label: 'Skill Level',
                data: [90, 85, 80, 70, 75, 65],
                backgroundColor: 'rgba(0, 243, 255, 0.2)',
                borderColor: '#00f3ff',
                pointBackgroundColor: '#bc00ff'
            }]
        },
        options: {
            scales: {
                r: {
                    grid: { color: 'rgba(0, 243, 255, 0.2)' },
                    ticks: { display: false },
                    pointLabels: { color: '#e0e0ff' }
                }
            }
        }
    });
}

// Theme Management
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolioTheme', theme);
}

// Initialize Portfolio
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000 });
    initParticles();
    initRadar();
    
    // Load saved theme
    const savedTheme = localStorage.getItem('portfolioTheme') || 'cyber';
    setTheme(savedTheme);
});

// Handle Window Resize
window.addEventListener('resize', () => {
    initParticles();
});
