/* ======================================
   DEMO.JS - Example Custom Pages
   ====================================== */

// This file demonstrates how to add custom pages to your portfolio
// Include this script after app.js in your HTML to see these demo pages

// Example 1: Simple page with default content
app.addPage('Blog', 'blog', 'fas fa-blog');

// Example 2: Custom page with rich content
app.addPage('Services', 'services', 'fas fa-cogs', () => {
    return `
        <div class="page-section">
            <h1 class="page-title">My Services</h1>
            <div class="page-subtitle">
                Professional development services tailored to your needs
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 3rem;">
                <div class="card">
                    <div class="card-content">
                        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                            <i class="fas fa-laptop-code"></i> Web Development
                        </h3>
                        <p style="margin-bottom: 1rem;">
                            Full-stack web development using modern technologies and best practices.
                        </p>
                        <ul style="color: var(--text-secondary); line-height: 1.8;">
                            <li>Responsive design</li>
                            <li>Performance optimization</li>
                            <li>SEO implementation</li>
                            <li>Cross-browser compatibility</li>
                        </ul>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-content">
                        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                            <i class="fas fa-gamepad"></i> Game Development
                        </h3>
                        <p style="margin-bottom: 1rem;">
                            Custom game development for web and mobile platforms.
                        </p>
                        <ul style="color: var(--text-secondary); line-height: 1.8;">
                            <li>2D/3D game design</li>
                            <li>Interactive experiences</li>
                            <li>Performance optimization</li>
                            <li>Multi-platform deployment</li>
                        </ul>
                    </div>
                </div>
                
                <div class="card">
                    <div class="card-content">
                        <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                            <i class="fas fa-mobile-alt"></i> App Development
                        </h3>
                        <p style="margin-bottom: 1rem;">
                            Native and cross-platform mobile application development.
                        </p>
                        <ul style="color: var(--text-secondary); line-height: 1.8;">
                            <li>iOS & Android apps</li>
                            <li>React Native development</li>
                            <li>App store optimization</li>
                            <li>Maintenance & support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
});

// Example 3: Skills/Resume page
app.addPage('Skills', 'skills', 'fas fa-chart-bar', () => {
    return `
        <div class="page-section">
            <h1 class="page-title">Technical Skills</h1>
            <div class="page-subtitle">
                A comprehensive overview of my technical expertise and proficiency levels
            </div>
            
            <div style="margin-top: 3rem;">
                <div class="card" style="margin-bottom: 2rem;">
                    <div class="card-content">
                        <h3 style="margin-bottom: 2rem; color: var(--text-primary);">Programming Languages</h3>
                        
                        <div style="margin-bottom: 1.5rem;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                <span>JavaScript</span>
                                <span style="color: var(--primary-color);">95%</span>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" style="width: 95%;"></div>
                            </div>
                        </div>
                        
                        <div style="margin-bottom: 1.5rem;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                <span>HTML/CSS</span>
                                <span style="color: var(--primary-color);">90%</span>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" style="width: 90%;"></div>
                            </div>
                        </div>
                        
                        <div style="margin-bottom: 1.5rem;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                <span>Python</span>
                                <span style="color: var(--primary-color);">85%</span>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" style="width: 85%;"></div>
                            </div>
                        </div>
                        
                        <div style="margin-bottom: 1.5rem;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                                <span>TypeScript</span>
                                <span style="color: var(--primary-color);">80%</span>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" style="width: 80%;"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="skills-grid">
                    <div class="skill-category">
                        <h3><i class="fas fa-palette"></i> Design Tools</h3>
                        <div class="skill-list">
                            <span class="skill-item">Figma</span>
                            <span class="skill-item">Adobe XD</span>
                            <span class="skill-item">Photoshop</span>
                            <span class="skill-item">Illustrator</span>
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <h3><i class="fas fa-database"></i> Databases</h3>
                        <div class="skill-list">
                            <span class="skill-item">MongoDB</span>
                            <span class="skill-item">PostgreSQL</span>
                            <span class="skill-item">MySQL</span>
                            <span class="skill-item">Redis</span>
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <h3><i class="fas fa-cloud"></i> Cloud & DevOps</h3>
                        <div class="skill-list">
                            <span class="skill-item">AWS</span>
                            <span class="skill-item">Docker</span>
                            <span class="skill-item">Git</span>
                            <span class="skill-item">CI/CD</span>
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <h3><i class="fab fa-js-square"></i> Frameworks</h3>
                        <div class="skill-list">
                            <span class="skill-item">React</span>
                            <span class="skill-item">Vue.js</span>
                            <span class="skill-item">Node.js</span>
                            <span class="skill-item">Express</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
});

// Example 4: Interactive demo page with controls
app.addPage('Demo', 'demo', 'fas fa-flask', () => {
    return `
        <div class="page-section">
            <h1 class="page-title">Interactive Demo</h1>
            <div class="page-subtitle">
                Explore the reusable controls and components available in this portfolio system
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 2rem; margin-top: 3rem;">
                
                <!-- Buttons Demo -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Button Variations</h3>
                    </div>
                    <div class="card-content">
                        <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
                            <button class="btn btn-primary">Primary</button>
                            <button class="btn btn-secondary">Secondary</button>
                            <button class="btn btn-outline">Outline</button>
                            <button class="btn btn-ghost">Ghost</button>
                        </div>
                        <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1rem;">
                            <button class="btn btn-primary btn-sm">Small</button>
                            <button class="btn btn-primary">Normal</button>
                            <button class="btn btn-primary btn-lg">Large</button>
                        </div>
                    </div>
                </div>
                
                <!-- Form Controls Demo -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Form Controls</h3>
                    </div>
                    <div class="card-content">
                        <div style="display: grid; gap: 1rem;">
                            <input type="text" class="input" placeholder="Text input">
                            <select class="input select">
                                <option>Select option</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                            </select>
                            <textarea class="input textarea" placeholder="Textarea"></textarea>
                        </div>
                    </div>
                </div>
                
                <!-- Checkboxes & Switches -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Checkboxes & Switches</h3>
                    </div>
                    <div class="card-content">
                        <div style="display: grid; gap: 1rem;">
                            <label class="checkbox-container">
                                <input type="checkbox" class="checkbox" checked>
                                Checkbox option
                            </label>
                            <label class="radio-container">
                                <input type="radio" class="radio" name="radio-demo" checked>
                                Radio option 1
                            </label>
                            <label class="radio-container">
                                <input type="radio" class="radio" name="radio-demo">
                                Radio option 2
                            </label>
                            <label class="switch">
                                <input type="checkbox" checked>
                                <span class="switch-slider"></span>
                            </label>
                        </div>
                    </div>
                </div>
                  <!-- Progress & Sliders -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Progress & Sliders</h3>
                    </div>
                    <div class="card-content">
                        <div style="display: grid; gap: 1.5rem;">
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem;">Progress Bar (<span id="progressValue">70</span>%)</label>
                                <div class="progress">
                                    <div class="progress-bar" id="progressBar" style="width: 70%;"></div>
                                </div>
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem;">Slider</label>
                                <input type="range" class="slider" id="demoSlider" min="0" max="100" value="70">
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem;">Loading Spinner</label>
                                <div class="spinner"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Badges & Tags -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Badges & Tags</h3>
                    </div>
                    <div class="card-content">
                        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                            <span class="badge badge-primary">Primary</span>
                            <span class="badge badge-secondary">Secondary</span>
                            <span class="badge badge-success">Success</span>
                            <span class="badge badge-error">Error</span>
                            <span class="badge badge-warning">Warning</span>
                        </div>
                    </div>
                </div>
                
                <!-- Tooltips Demo -->
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">Tooltips</h3>
                    </div>
                    <div class="card-content">
                        <div style="display: flex; gap: 1rem;">
                            <div class="tooltip">
                                <button class="btn btn-primary">Hover me</button>
                                <span class="tooltip-text">This is a tooltip!</span>
                            </div>
                            <div class="tooltip">
                                <span class="badge badge-secondary">Info</span>
                                <span class="tooltip-text">More information here</span>
                            </div>
                        </div>
                    </div>                </div>
            </div>
        </div>
    `;
});

// Add interactive functionality to the demo page
// This will be called whenever the page content changes
function setupDemoInteractivity() {
    // Sync slider with progress bar
    const slider = document.getElementById('demoSlider');
    const progressBar = document.getElementById('progressBar');
    const progressValue = document.getElementById('progressValue');
    
    if (slider && progressBar && progressValue) {
        slider.addEventListener('input', function() {
            const value = this.value;
            progressBar.style.width = value + '%';
            progressValue.textContent = value;
        });
        console.log('✅ Demo interactivity set up - slider and progress bar are synced!');
    }
}

// Override the app's displayPageContent method to add our interactivity setup
document.addEventListener('DOMContentLoaded', function() {
    const originalDisplayPageContent = app.displayPageContent;
    app.displayPageContent = function(content) {
        originalDisplayPageContent.call(this, content);
        // Set up demo interactivity after content is loaded
        setTimeout(setupDemoInteractivity, 100);
    };
});

console.log('🎨 Demo pages added! Check out Blog, Services, Skills, and Demo pages.');
