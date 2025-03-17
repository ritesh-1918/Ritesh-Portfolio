// Quantum Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Particle Universe
    const particleBG = new ParticleBG({
        element: '#particle-canvas',
        interactive: true,
        density: 'high',
        color: '#00f3ff'
    });

    // AI Voice Assistant
    const quantumAssistant = new Artyom();
    quantumAssistant.initialize({
        lang: 'en-US',
        continuous: true,
        listen: true
    });

    // Voice Command System
    quantumAssistant.addCommands([
        {
            indexes: ['Open projects'],
            action: () => scrollToSection('projects')
        },
        {
            indexes: ['Enable dark mode'],
            action: () => toggleTheme('dark')
        }
    ]);

    // 3D Skill Radar
    const skillRadar = new Chart(document.getElementById('skill-radar'), {
        type: 'radar',
        data: {
            labels: ['IoT', 'Circuit Design', 'AI', 'Innovation', 'Coding'],
            datasets: [{
                data: [95, 90, 85, 98, 88],
                backgroundColor: 'rgba(0, 243, 255, 0.2)',
                borderColor: '#00f3ff'
            }]
        },
        options: {
            scale: { ticks: { beginAtZero: true, max: 100 } }
        }
    });

    // Quantum Form Handler
    const quantumForm = document.getElementById('quantum-form');
    quantumForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Animated Transmission
        document.querySelector('.particle-beam').style.animation = 'beamScan 0.5s infinite';
        
        try {
            const response = await fetch(e.target.action, {
                method: 'POST',
                body: new FormData(quantumForm),
                headers: { 'Accept': 'application/json' }
            });

            if(response.ok) {
                showTerminalMessage('TRANSMISSION SUCCESSFUL', '#00ff00');
                particleBG.explode(); // Visual feedback
            }
        } catch(error) {
            showTerminalMessage('TRANSMISSION FAILED', '#ff0000');
        }
    });

    // AR Viewer
    const arToggle = document.getElementById('ar-toggle');
    arToggle.addEventListener('click', () => {
        document.getElementById('ar-viewer').classList.toggle('active');
        // AR.js integration would go here
    });
});

function showTerminalMessage(text, color) {
    const terminal = document.getElementById('terminal-output');
    terminal.innerHTML += `<div style="color:${color}">> ${text}</div>`;
    terminal.scrollTop = terminal.scrollHeight;
}
