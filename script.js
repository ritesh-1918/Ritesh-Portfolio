// Quantum Particle System
function initParticles() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('quantum-particles').appendChild(renderer.domElement);

    const particles = new THREE.BufferGeometry();
    const particleCount = 5000;
    const posArray = new Float32Array(particleCount * 3);

    for(let i = 0; i < particleCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 5;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const material = new THREE.PointsMaterial({
        size: 0.005,
        color: '#00f3ff'
    });

    const particleMesh = new THREE.Points(particles, material);
    scene.add(particleMesh);
    camera.position.z = 2;

    function animate() {
        particleMesh.rotation.x += 0.001;
        particleMesh.rotation.y += 0.001;
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
}

// Neural Radar Chart
function initSkillsRadar() {
    const ctx = document.getElementById('quantum-radar').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Quantum Computing', 'IoT Systems', 'AI Integration', 
                    'Circuit Design', 'AR/VR Development', 'Product Innovation'],
            datasets: [{
                label: 'Skill Matrix',
                data: [88, 95, 82, 90, 85, 93],
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
                    pointLabels: { color: '#00f3ff' }
                }
            }
        }
    });
}

// Quantum Voice Interface
function initVoiceControl() {
    const artyom = new Artyom();
    
    artyom.addCommands({
        indexes: ['activate *', 'show *'],
        smart: true,
        action: (i, wildcard) => {
            switch(wildcard.toLowerCase()) {
                case 'projects':
                    document.querySelector('.quantum-projects').scrollIntoView();
                    break;
                case 'skills':
                    document.querySelector('.neural-skills').scrollIntoView();
                    break;
            }
        }
    });

    document.getElementById('voice-control').addEventListener('click', () => {
        artyom.initialize({
            lang: 'en-US',
            continuous: true,
            listen: true
        }).then(() => {
            artyom.say("Quantum interface activated. Ready for commands.");
        });
    });
}

// Initialize Quantum System
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000 });
    initParticles();
    initSkillsRadar();
    initVoiceControl();
    
    // Theme Toggle
    document.getElementById('quantum-toggle').addEventListener('click', () => {
        document.documentElement.setAttribute('data-theme',
            document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
        );
    });
});
