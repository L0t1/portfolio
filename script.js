// =====================================================
// FUTURISTIC CYBER-TERMINAL PORTFOLIO - JAVASCRIPT
// Backend Developer OS Interface
// =====================================================

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    initializePortfolio();
});

function initializePortfolio() {
    // Boot sequence
    handleBootSequence();
    
    // Navigation
    setupNavigation();
    
    // Real-time clock
    updateClock();
    setInterval(updateClock, 1000);
    
    // Contact form
    setupContactForm();
    
    // Live logs
    startLiveLogs();
    
    // Metric animations
    animateMetrics();
    
    // API counter animation
    animateAPICounter();
    
    // Terminal command input
    setupTerminalCommands();
}

// =====================================================
// BOOT SEQUENCE
// =====================================================

function handleBootSequence() {
    const bootOverlay = document.getElementById('boot-sequence');
    const mainInterface = document.getElementById('main-interface');
    
    // Hide boot sequence after 5.5 seconds
    setTimeout(() => {
        bootOverlay.classList.remove('active');
        
        // Remove from DOM after fade out
        setTimeout(() => {
            bootOverlay.style.display = 'none';
        }, 500);
    }, 5500);
}

// =====================================================
// NAVIGATION SYSTEM
// =====================================================

function setupNavigation() {
    const navCommands = document.querySelectorAll('.nav-command');
    const sections = document.querySelectorAll('.terminal-window');
    const navPanel = document.querySelector('.nav-panel');
    
    navCommands.forEach(command => {
        command.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get target section
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all commands and sections
            navCommands.forEach(cmd => cmd.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked command
            this.classList.add('active');
            
            // Show target section
            const targetElement = document.getElementById(targetSection);
            if (targetElement) {
                targetElement.classList.add('active');
                
                // Scroll to top of content
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }

            // Auto-close mobile nav after selection
            if (window.innerWidth <= 1200 && navPanel) {
                navPanel.style.display = 'none';
            }
        });
    });
    
    // Handle hash navigation
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const targetCommand = document.querySelector(`[data-section="${hash}"]`);
        if (targetCommand) {
            targetCommand.click();
        }
    }
}

// =====================================================
// REAL-TIME CLOCK
// =====================================================

function updateClock() {
    const now = new Date();
    
    // Time
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Date
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const dateString = `${year}.${month}.${day}`;
    
    // Update DOM
    const timeElement = document.getElementById('current-time');
    const dateElement = document.getElementById('current-date');
    
    if (timeElement) timeElement.textContent = timeString;
    if (dateElement) dateElement.textContent = dateString;
}

// =====================================================
// CONTACT FORM
// =====================================================

function setupContactForm() {
    const sendButton = document.getElementById('send-message');
    const formStatus = document.getElementById('form-status');
    
    if (sendButton) {
        sendButton.addEventListener('click', function() {
            const email = document.getElementById('contact-email').value;
            const subject = document.getElementById('contact-subject').value;
            const message = document.getElementById('contact-message').value;
            
            // Basic validation
            if (!email || !subject || !message) {
                showFormStatus('error', '> ERROR: All fields are required');
                return;
            }
            
            if (!isValidEmail(email)) {
                showFormStatus('error', '> ERROR: Invalid email format');
                return;
            }
            
            // Simulate sending
            showFormStatus('success', '> MESSAGE ENQUEUED ✔\n> AWAITING RESPONSE...');
            
            // Create mailto link
            const mailtoLink = `mailto:lotkycyku@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`;
            window.location.href = mailtoLink;
            
            // Clear form after a delay
            setTimeout(() => {
                document.getElementById('contact-email').value = '';
                document.getElementById('contact-subject').value = '';
                document.getElementById('contact-message').value = '';
            }, 2000);
        });
    }
}

function showFormStatus(type, message) {
    const formStatus = document.getElementById('form-status');
    if (formStatus) {
        formStatus.className = 'form-status ' + type;
        formStatus.textContent = message;
        
        // Hide after 5 seconds
        setTimeout(() => {
            formStatus.className = 'form-status';
        }, 5000);
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// =====================================================
// LIVE LOGS SYSTEM
// =====================================================

let logCounter = 0;
const logMessages = [
    'API request processed successfully',
    'Database query optimized',
    'Queue job completed',
    'Cache invalidated and rebuilt',
    'Cron job executed on schedule',
    'Docker container health check passed',
    'Redis connection pool refreshed',
    'Laravel Horizon supervisor running',
    'MongoDB replica set synchronized',
    'Backup completed successfully',
    'SSL certificate renewed',
    'Rate limiting applied',
    'Request authenticated via JWT',
    'Webhook delivered successfully',
    'Email queued for delivery',
    'Session cleanup completed',
    'Log rotation performed',
    'Performance metrics collected',
    'Security scan completed',
    'Database migration executed'
];

function startLiveLogs() {
    const logsContainer = document.getElementById('live-logs');
    
    if (logsContainer) {
        // Add new log every 3-5 seconds
        setInterval(() => {
            addNewLog(logsContainer);
        }, Math.random() * 2000 + 3000);
    }
}

function addNewLog(container) {
    const now = new Date();
    const timestamp = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    
    const randomMessage = logMessages[Math.floor(Math.random() * logMessages.length)];
    const logTypes = ['INFO', 'SUCCESS', 'DEBUG'];
    const randomType = logTypes[Math.floor(Math.random() * logTypes.length)];
    
    const logLine = document.createElement('div');
    logLine.className = 'log-line';
    logLine.textContent = `[${timestamp}] ${randomType}: ${randomMessage}`;
    
    container.appendChild(logLine);
    
    // Keep only last 20 logs
    const allLogs = container.querySelectorAll('.log-line');
    if (allLogs.length > 20) {
        container.removeChild(allLogs[0]);
    }
    
    // Auto scroll to bottom
    container.scrollTop = container.scrollHeight;
}

// =====================================================
// METRICS ANIMATIONS
// =====================================================

function animateMetrics() {
    // Animate CPU and RAM bars
    setInterval(() => {
        const cpuBar = document.querySelector('.metric-block:nth-child(2) .bar-fill');
        const ramBar = document.querySelector('.metric-block:nth-child(3) .bar-fill');
        const cpuValue = document.querySelector('.metric-block:nth-child(2) .metric-value');
        const ramValue = document.querySelector('.metric-block:nth-child(3) .metric-value');
        
        if (cpuBar && ramBar) {
            // Generate random values
            const cpu = Math.floor(Math.random() * 30 + 20); // 20-50%
            const ram = Math.floor(Math.random() * 25 + 45); // 45-70%
            
            cpuBar.style.width = cpu + '%';
            ramBar.style.width = ram + '%';
            
            if (cpuValue) cpuValue.textContent = cpu + '%';
            if (ramValue) ramValue.textContent = ram + '%';
        }
    }, 3000);
    
    // Animate cluster health status
    const healthStatuses = ['OPTIMAL', 'STABLE', 'GOOD'];
    const healthColors = ['optimal', 'stable', 'good'];
    let healthIndex = 0;
    
    setInterval(() => {
        const healthStatus = document.querySelector('.health-status');
        if (healthStatus) {
            healthIndex = (healthIndex + 1) % healthStatuses.length;
            healthStatus.className = 'health-status ' + healthColors[healthIndex];
            healthStatus.querySelector('span:last-child').textContent = healthStatuses[healthIndex];
        }
    }, 8000);
}

// =====================================================
// API COUNTER ANIMATION
// =====================================================

function animateAPICounter() {
    const counterElement = document.getElementById('api-counter');
    
    if (counterElement) {
        let count = 1247;
        
        setInterval(() => {
            count += Math.floor(Math.random() * 10 + 1);
            counterElement.textContent = count.toLocaleString();
        }, 5000);
    }
}

// =====================================================
// KEYBOARD SHORTCUTS
// =====================================================

document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus navigation
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const firstNavCommand = document.querySelector('.nav-command');
        if (firstNavCommand) firstNavCommand.focus();
    }
    
    // Escape to return to home
    if (e.key === 'Escape') {
        const homeCommand = document.querySelector('[data-section="home"]');
        if (homeCommand) homeCommand.click();
    }
});

// =====================================================
// HOLOGRAM EFFECT ENHANCEMENT
// =====================================================

const hologramFrame = document.querySelector('.hologram-frame');
if (hologramFrame) {
    hologramFrame.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        
        this.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
    
    hologramFrame.addEventListener('mouseleave', function() {
        this.style.transform = 'rotateX(0) rotateY(0)';
    });
}

// =====================================================
// PACKAGE ITEMS HOVER EFFECTS
// =====================================================

const packageItems = document.querySelectorAll('.package-item');
packageItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        const bullet = this.querySelector('.pkg-bullet');
        if (bullet) {
            bullet.style.transform = 'scale(1.5) rotate(90deg)';
            bullet.style.transition = 'transform 0.3s ease';
        }
    });
    
    item.addEventListener('mouseleave', function() {
        const bullet = this.querySelector('.pkg-bullet');
        if (bullet) {
            bullet.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// =====================================================
// SERVICE NODES INTERACTION
// =====================================================

const serviceNodes = document.querySelectorAll('.service-node');
serviceNodes.forEach(node => {
    node.addEventListener('click', function() {
        // Add pulse effect
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);
    });
});

// =====================================================
// TERMINAL TYPING EFFECT
// =====================================================

function typeText(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    const interval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(interval);
        }
    }, speed);
}

// =====================================================
// PERFORMANCE OPTIMIZATION
// =====================================================

// Throttle function for performance
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// =====================================================
// MOBILE NAVIGATION TOGGLE
// =====================================================

// Add mobile menu button if needed
if (window.innerWidth <= 1200) {
    const statusBar = document.querySelector('.status-bar');
    const navPanel = document.querySelector('.nav-panel');
    
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-btn';
    menuButton.innerHTML = '☰ MENU';
    menuButton.style.cssText = `
        padding: 0.5rem 1rem;
        background: rgba(0, 246, 255, 0.1);
        border: 1px solid var(--cyber-cyan);
        color: var(--cyber-cyan);
        font-family: var(--font-mono);
        cursor: pointer;
        border-radius: 4px;
    `;
    
    if (statusBar && navPanel) {
        statusBar.appendChild(menuButton);
        
        menuButton.addEventListener('click', () => {
            if (navPanel.style.display === 'block') {
                navPanel.style.display = 'none';
            } else {
                navPanel.style.display = 'block';
                navPanel.style.position = 'fixed';
                navPanel.style.top = '60px';
                navPanel.style.left = '1rem';
                navPanel.style.zIndex = '9999';
            }
        });
    }
}

// =====================================================
// WINDOW RESIZE HANDLER
// =====================================================

window.addEventListener('resize', debounce(function() {
    // Adjust layout on resize if needed
    console.log('Window resized');
}, 250));

// =====================================================
// CONSOLE EASTER EGG
// =====================================================

console.log('%c█████╗ █████╗  █████╗ █████╗ ███╗   ██╗████████╗', 'color: #00f6ff; font-weight: bold;');
console.log('%c██╔══╝██╔══██╗██╔══██╗╚════██║████╗  ██║╚══██╔══╝', 'color: #00f6ff;');
console.log('%c█████╗██║  ██║██║  ██║ █████╔╝██╔██╗ ██║   ██║   ', 'color: #00f6ff;');
console.log('%c██╔══╝██║  ██║██║  ██║ ╚═══██╗██║╚██╗██║   ██║   ', 'color: #00f6ff;');
console.log('%c███████╗╚█████╔╝╚█████╔╝█████╔╝██║ ╚████║   ██║   ', 'color: #00f6ff;');
console.log('%c╚══════╝ ╚════╝  ╚════╝ ╚════╝ ╚═╝  ╚═══╝   ╚═╝   ', 'color: #00f6ff;');
console.log('%c', 'color: inherit;');
console.log('%cWelcome to LOT KYÇYKU\'s Portfolio OS', 'color: #00ff9f; font-size: 16px; font-weight: bold;');
console.log('%cBackend Developer | Laravel Specialist | System Architect', 'color: #00b8ff;');
console.log('%c', 'color: inherit;');
console.log('%cInterested in the code? Check out the GitHub repo!', 'color: #bd00ff;');
console.log('%chttps://github.com/L0t1', 'color: #00f6ff;');
console.log('%c', 'color: inherit;');

// =====================================================
// TERMINAL COMMAND SYSTEM
// =====================================================

function setupTerminalCommands() {
    const homeSection = document.getElementById('home');
    if (!homeSection) return;
    
    // Create command input area
    const terminalOutput = homeSection.querySelector('.terminal-output');
    if (!terminalOutput) return;
    
    const commandInputHTML = `
        <div class="terminal-input-area">
            <span class="terminal-prompt">root@backend-os:~$</span>
            <input type="text" class="terminal-command-input" id="terminal-input" placeholder="← Execute here • try 'help' to explore..." autocomplete="off" title="Type a command">
        </div>
        <div class="terminal-command-output" id="command-output"></div>
    `;
    
    terminalOutput.insertAdjacentHTML('beforeend', commandInputHTML);
    
    const input = document.getElementById('terminal-input');
    const output = document.getElementById('command-output');
    
    // Command history
    let commandHistory = [];
    let historyIndex = -1;
    
    // Available commands
    const commands = {
        help: {
            description: 'Display available commands',
            execute: () => {
                return `
<div class="help-output">
<div class="help-header">╔══════════════════════════════════════════════════════════════╗</div>
<div class="help-header">║               AVAILABLE TERMINAL COMMANDS                    ║</div>
<div class="help-header">╚══════════════════════════════════════════════════════════════╝</div>

<div class="help-section">Navigation Commands:</div>
<div class="help-item"><span class="cmd-name">whoami</span>      <span class="cmd-separator">→</span> <span class="cmd-desc">Display user information</span></div>
<div class="help-item"><span class="cmd-name">skills</span>      <span class="cmd-separator">→</span> <span class="cmd-desc">List installed packages and technologies</span></div>
<div class="help-item"><span class="cmd-name">experience</span>  <span class="cmd-separator">→</span> <span class="cmd-desc">Show work experience log</span></div>
<div class="help-item"><span class="cmd-name">projects</span>    <span class="cmd-separator">→</span> <span class="cmd-desc">Display active services/projects</span></div>
<div class="help-item"><span class="cmd-name">contact</span>     <span class="cmd-separator">→</span> <span class="cmd-desc">Show contact information</span></div>
<div class="help-item"><span class="cmd-name">logs</span>        <span class="cmd-separator">→</span> <span class="cmd-desc">View system logs</span></div>

<div class="help-section">Utility Commands:</div>
<div class="help-item"><span class="cmd-name">help</span>        <span class="cmd-separator">→</span> <span class="cmd-desc">Show this help message</span></div>
<div class="help-item"><span class="cmd-name">clear</span>       <span class="cmd-separator">→</span> <span class="cmd-desc">Clear the terminal output</span></div>
<div class="help-item"><span class="cmd-name">about</span>       <span class="cmd-separator">→</span> <span class="cmd-desc">About this portfolio system</span></div>
<div class="help-item"><span class="cmd-name">status</span>      <span class="cmd-separator">→</span> <span class="cmd-desc">Show system status and metrics</span></div>

<div class="help-section">External Links:</div>
<div class="help-item"><span class="cmd-name">github</span>      <span class="cmd-separator">→</span> <span class="cmd-desc">Open GitHub profile in new tab</span></div>
<div class="help-item"><span class="cmd-name">linkedin</span>    <span class="cmd-separator">→</span> <span class="cmd-desc">Open LinkedIn profile in new tab</span></div>

<div class="help-footer">Tip: Use ↑/↓ arrow keys to navigate command history</div>
</div>`;
            }
        },
        whoami: {
            description: 'Display user information',
            execute: () => {
                navigateToSection('whoami');
                return '<span class="success">→ Navigating to /system/whoami...</span>';
            }
        },
        skills: {
            description: 'List installed packages',
            execute: () => {
                navigateToSection('skills');
                return '<span class="success">→ Navigating to /system/skills...</span>';
            }
        },
        experience: {
            description: 'Show work experience',
            execute: () => {
                navigateToSection('experience');
                return '<span class="success">→ Navigating to /system/experience...</span>';
            }
        },
        projects: {
            description: 'Display projects',
            execute: () => {
                navigateToSection('projects');
                return '<span class="success">→ Navigating to /system/projects...</span>';
            }
        },
        contact: {
            description: 'Show contact info',
            execute: () => {
                navigateToSection('contact');
                return '<span class="success">→ Navigating to /system/contact...</span>';
            }
        },
        logs: {
            description: 'View system logs',
            execute: () => {
                navigateToSection('logs');
                return '<span class="success">→ Navigating to /system/logs...</span>';
            }
        },
        clear: {
            description: 'Clear terminal output',
            execute: () => {
                output.innerHTML = '';
                return '';
            }
        },
        about: {
            description: 'About this portfolio',
            execute: () => {
                return `
<div class="about-output">
<span class="highlight">BACKEND_OS v1.9.22</span>
A futuristic cyber-terminal portfolio interface
Built by: Lot Kyçyku
Stack: HTML, CSS, JavaScript
Theme: Cyberpunk Terminal OS
</div>`;
            }
        },
        github: {
            description: 'Open GitHub profile',
            execute: () => {
                window.open('https://github.com/L0t1', '_blank');
                return '<span class="success">→ Opening GitHub profile...</span>';
            }
        },
        linkedin: {
            description: 'Open LinkedIn profile',
            execute: () => {
                window.open('https://linkedin.com/in/lotuuu', '_blank');
                return '<span class="success">→ Opening LinkedIn profile...</span>';
            }
        },
        status: {
            description: 'Show system status',
            execute: () => {
                return `
<div class="status-output">
<span class="success">SYSTEM STATUS: ONLINE</span>
CPU: 34% | RAM: 58%
Queue Workers: 3 ACTIVE
Cron Jobs: 5 SCHEDULED
DB: MYSQL ✓ | MONGO ✓
Cluster Health: OPTIMAL
</div>`;
            }
        }
    };
    
    // Handle command input
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const command = this.value.trim().toLowerCase();
            if (command) {
                commandHistory.push(command);
                historyIndex = commandHistory.length;
                executeCommand(command);
                this.value = '';
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                this.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                this.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                this.value = '';
            }
        }
    });
    
    function executeCommand(cmd) {
        // Display command
        const commandLine = document.createElement('div');
        commandLine.className = 'command-executed';
        commandLine.innerHTML = `<span class="terminal-prompt">root@backend-os:~$</span> ${cmd}`;
        output.appendChild(commandLine);
        
        // Execute command
        if (commands[cmd]) {
            const result = commands[cmd].execute();
            if (result) {
                const resultDiv = document.createElement('div');
                resultDiv.className = 'command-result';
                resultDiv.innerHTML = result;
                output.appendChild(resultDiv);
            }
        } else {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'command-error';
            errorDiv.innerHTML = `<span class="error">Command not found: ${cmd}</span><br>Type <span class="highlight">help</span> for available commands.`;
            output.appendChild(errorDiv);
        }
    }
    
    function navigateToSection(section) {
        const navLink = document.querySelector(`[data-section="${section}"]`);
        if (navLink) {
            setTimeout(() => {
                navLink.click();
            }, 500);
        }
    }
}

// =====================================================
// INITIALIZATION COMPLETE
// =====================================================

console.log('%c[SYSTEM] Portfolio OS initialized successfully', 'color: #00ff9f;');
