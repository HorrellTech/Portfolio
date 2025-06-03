/* ======================================
   APP.JS - Portfolio Application Logic
   ====================================== */

class PortfolioApp {
    constructor() {
        this.pages = new Map();
        this.currentPage = null;
        this.sidebarOpen = false;
        
        this.init();
    }
    
    init() {
        this.setupEventListeners();
        this.setupDefaultPages();
        this.loadInitialPage();
    }
    
    /**
     * Add a new page to the portfolio navigation
     * @param {string} label - The display name for the navigation item
     * @param {string} link - The page identifier/route
     * @param {string} icon - Font Awesome icon class (optional)
     * @param {function} contentGenerator - Function that returns page content (optional)
     */
    addPage(label, link, icon = 'fas fa-file', contentGenerator = null) {
        // Store page information
        this.pages.set(link, {
            label,
            link,
            icon,
            contentGenerator: contentGenerator || this.getDefaultPageContent.bind(this, label, link)
        });
        
        // Create navigation item
        this.createNavItem(label, link, icon);
        
        console.log(`✅ Added page: ${label} (${link})`);
    }
    
    /**
     * Create navigation item in the sidebar
     */
    createNavItem(label, link, icon) {
        const navMenu = document.getElementById('navMenu');
        const navItem = document.createElement('li');
        navItem.className = 'nav-item';
        
        const navLink = document.createElement('a');
        navLink.href = '#';
        navLink.className = 'nav-link';
        navLink.dataset.page = link;
        navLink.innerHTML = `<i class="${icon}"></i>${label}`;
        
        // Add click event listener
        navLink.addEventListener('click', (e) => {
            e.preventDefault();
            this.navigateToPage(link);
            if (window.innerWidth <= 768) {
                this.closeSidebar();
            }
        });
        
        navItem.appendChild(navLink);
        navMenu.appendChild(navItem);
    }
    
    /**
     * Navigate to a specific page
     */
    navigateToPage(pageLink) {
        const page = this.pages.get(pageLink);
        if (!page) {
            console.error(`Page not found: ${pageLink}`);
            return;
        }
        
        // Update active navigation item
        this.updateActiveNavItem(pageLink);
        
        // Generate and display page content
        const content = page.contentGenerator();
        this.displayPageContent(content);
        
        this.currentPage = pageLink;
        
        // Update URL hash
        window.location.hash = pageLink;
    }
    
    /**
     * Update active navigation item styling
     */
    updateActiveNavItem(activeLink) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === activeLink) {
                link.classList.add('active');
            }
        });
    }
    
    /**
     * Display page content in the main content area
     */
    displayPageContent(content) {
        const pageContent = document.getElementById('pageContent');
        pageContent.innerHTML = content;
        
        // Add fade-in animation
        pageContent.classList.remove('fade-in-up');
        setTimeout(() => {
            pageContent.classList.add('fade-in-up');
        }, 10);
    }
    
    /**
     * Setup event listeners for mobile navigation and other interactions
     */
    setupEventListeners() {
        // Mobile sidebar toggle
        const sidebarToggle = document.getElementById('sidebarToggle');
        const mobileOverlay = document.getElementById('mobileOverlay');
        const sidebar = document.getElementById('sidebar');
        
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', () => {
                this.toggleSidebar();
            });
        }
        
        if (mobileOverlay) {
            mobileOverlay.addEventListener('click', () => {
                this.closeSidebar();
            });
        }
        
        // Handle browser back/forward navigation
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.substring(1);
            if (hash && this.pages.has(hash)) {
                this.navigateToPage(hash);
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                this.closeSidebar();
            }
        });
    }
    
    /**
     * Toggle mobile sidebar
     */
    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const mobileOverlay = document.getElementById('mobileOverlay');
        
        this.sidebarOpen = !this.sidebarOpen;
        
        if (this.sidebarOpen) {
            sidebar.classList.add('open');
            mobileOverlay.classList.add('show');
        } else {
            sidebar.classList.remove('open');
            mobileOverlay.classList.remove('show');
        }
    }
    
    /**
     * Close mobile sidebar
     */
    closeSidebar() {
        const sidebar = document.getElementById('sidebar');
        const mobileOverlay = document.getElementById('mobileOverlay');
        
        this.sidebarOpen = false;
        sidebar.classList.remove('open');
        mobileOverlay.classList.remove('show');
    }
    
    /**
     * Setup default pages (Home, Projects, About, Contact)
     */
    setupDefaultPages() {
        // Home page
        this.addPage('Home', 'home', 'fas fa-home', () => this.getHomePageContent());
        
        // Projects page
        this.addPage('Projects', 'projects', 'fas fa-folder-open', () => this.getProjectsPageContent());
        
        // About page
        this.addPage('About', 'about', 'fas fa-user', () => this.getAboutPageContent());
        
        // Contact page
        this.addPage('Contact', 'contact', 'fas fa-envelope', () => this.getContactPageContent());
    }
    
    /**
     * Load initial page based on URL hash or default to home
     */
    loadInitialPage() {
        const hash = window.location.hash.substring(1);
        const initialPage = hash && this.pages.has(hash) ? hash : 'home';
        this.navigateToPage(initialPage);
    }
    
    /**
     * Generate default page content for custom pages
     */
    getDefaultPageContent(label, link) {
        return `
            <div class="page-section">
                <h1 class="page-title">${label}</h1>
                <div class="page-subtitle">
                    This is the ${label.toLowerCase()} page. You can customize this content by providing a content generator function when adding the page.
                </div>
                <div class="card">
                    <div class="card-content">
                        <p>To customize this page content, use the <code>addPage</code> method with a content generator function:</p>
                        <pre style="background: var(--bg-tertiary); padding: 1rem; border-radius: 8px; margin-top: 1rem; overflow-x: auto;"><code>app.addPage('${label}', '${link}', 'fas fa-icon', () => {
    return 'Your custom HTML content here';
});</code></pre>
                    </div>
                </div>
            </div>
        `;
    }
    
    /**
     * Generate home page content
     */
    getHomePageContent() {
        return `
            <div class="page-section">
                <h1 class="page-title">Welcome to My Portfolio</h1>
                <div class="page-subtitle">
                    I'm a passionate developer creating amazing websites and games. 
                    Explore my work and get to know more about my journey in tech.
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 3rem;">
                    <div class="card">
                        <div class="card-content">
                            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                                <i class="fas fa-code"></i> Web Development
                            </h3>
                            <p>Creating modern, responsive websites with cutting-edge technologies and best practices.</p>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-content">
                            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                                <i class="fas fa-gamepad"></i> Game Development
                            </h3>
                            <p>Building engaging games with immersive experiences and innovative gameplay mechanics.</p>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-content">
                            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                                <i class="fas fa-palette"></i> UI/UX Design
                            </h3>
                            <p>Designing beautiful, user-friendly interfaces that provide exceptional user experiences.</p>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 3rem;">
                    <a href="#projects" class="btn btn-primary btn-lg" onclick="app.navigateToPage('projects'); return false;">
                        <i class="fas fa-arrow-right"></i> View My Work
                    </a>
                </div>
            </div>
        `;
    }
    
    /**
     * Generate projects page content
     */
    getProjectsPageContent() {
        return `
            <div class="page-section">
                <h1 class="page-title">My Projects</h1>
                <div class="page-subtitle">
                    Here's a showcase of my recent work including websites, games, and other creative projects.
                </div>
                
                <div class="projects-grid">
                    <div class="project-card">
                        <div class="project-image">
                            <i class="fas fa-globe"></i>
                        </div>
                        <div class="project-info">
                            <h3 class="project-title">Sample Website Project</h3>
                            <p class="project-description">
                                A modern, responsive website built with the latest web technologies.
                                Features include dynamic content, smooth animations, and optimized performance.
                            </p>
                            <div class="project-tech">
                                <span class="tech-tag">HTML5</span>
                                <span class="tech-tag">CSS3</span>
                                <span class="tech-tag">JavaScript</span>
                                <span class="tech-tag">Responsive</span>
                            </div>
                            <div class="project-links">
                                <a href="#" class="project-link">
                                    <i class="fas fa-external-link-alt"></i> Live Demo
                                </a>
                                <a href="#" class="project-link secondary">
                                    <i class="fab fa-github"></i> Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="project-card">
                        <div class="project-image">
                            <i class="fas fa-gamepad"></i>
                        </div>
                        <div class="project-info">
                            <h3 class="project-title">Sample Game Project</h3>
                            <p class="project-description">
                                An engaging browser-based game with smooth gameplay mechanics,
                                stunning visuals, and addictive progression system.
                            </p>
                            <div class="project-tech">
                                <span class="tech-tag">JavaScript</span>
                                <span class="tech-tag">Canvas</span>
                                <span class="tech-tag">WebGL</span>
                                <span class="tech-tag">Game Design</span>
                            </div>
                            <div class="project-links">
                                <a href="#" class="project-link">
                                    <i class="fas fa-play"></i> Play Game
                                </a>
                                <a href="#" class="project-link secondary">
                                    <i class="fab fa-github"></i> Source Code
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="project-card">
                        <div class="project-image">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <div class="project-info">
                            <h3 class="project-title">Mobile App Concept</h3>
                            <p class="project-description">
                                A sleek mobile application design with intuitive user interface
                                and seamless user experience across all devices.
                            </p>
                            <div class="project-tech">
                                <span class="tech-tag">React Native</span>
                                <span class="tech-tag">UI/UX</span>
                                <span class="tech-tag">Mobile</span>
                                <span class="tech-tag">Cross-platform</span>
                            </div>
                            <div class="project-links">
                                <a href="#" class="project-link">
                                    <i class="fas fa-eye"></i> View Design
                                </a>
                                <a href="#" class="project-link secondary">
                                    <i class="fas fa-file-pdf"></i> Case Study
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center; margin-top: 3rem;">
                    <p style="color: var(--text-secondary); font-size: 1.1rem;">
                        Want to see more? Check out my 
                        <a href="#" style="color: var(--primary-color); text-decoration: none;">GitHub profile</a> 
                        for additional projects and contributions.
                    </p>
                </div>
            </div>
        `;
    }
    
    /**
     * Generate about page content
     */
    getAboutPageContent() {
        return `
            <div class="page-section">
                <h1 class="page-title">About Me</h1>
                <div class="page-subtitle">
                    Learn more about my background, skills, and passion for creating digital experiences.
                </div>
                
                <div class="about-content">
                    <div class="about-image">
                        <i class="fas fa-user-circle"></i>
                    </div>
                    <div class="about-text">
                        <p>
                            Hello! I'm a passionate developer with a love for creating innovative websites and games. 
                            My journey in tech started several years ago, and I've been constantly learning and 
                            evolving my skills to stay at the forefront of technology.
                        </p>
                        <p>
                            I specialize in modern web development technologies and have a keen interest in game 
                            development. I believe in writing clean, efficient code and creating user experiences 
                            that are both functional and delightful.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, playing games, 
                            or working on personal projects that challenge me to grow as a developer.
                        </p>
                    </div>
                </div>
                
                <div class="skills-grid">
                    <div class="skill-category">
                        <h3><i class="fas fa-code"></i> Frontend Development</h3>
                        <div class="skill-list">
                            <span class="skill-item">HTML5</span>
                            <span class="skill-item">CSS3</span>
                            <span class="skill-item">JavaScript</span>
                            <span class="skill-item">React</span>
                            <span class="skill-item">Vue.js</span>
                            <span class="skill-item">TypeScript</span>
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <h3><i class="fas fa-server"></i> Backend Development</h3>
                        <div class="skill-list">
                            <span class="skill-item">Node.js</span>
                            <span class="skill-item">Python</span>
                            <span class="skill-item">Express.js</span>
                            <span class="skill-item">MongoDB</span>
                            <span class="skill-item">PostgreSQL</span>
                            <span class="skill-item">REST APIs</span>
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <h3><i class="fas fa-gamepad"></i> Game Development</h3>
                        <div class="skill-list">
                            <span class="skill-item">Unity</span>
                            <span class="skill-item">JavaScript Games</span>
                            <span class="skill-item">Canvas API</span>
                            <span class="skill-item">WebGL</span>
                            <span class="skill-item">Game Design</span>
                            <span class="skill-item">2D/3D Graphics</span>
                        </div>
                    </div>
                    
                    <div class="skill-category">
                        <h3><i class="fas fa-tools"></i> Tools & Technologies</h3>
                        <div class="skill-list">
                            <span class="skill-item">Git</span>
                            <span class="skill-item">VS Code</span>
                            <span class="skill-item">Figma</span>
                            <span class="skill-item">Photoshop</span>
                            <span class="skill-item">Docker</span>
                            <span class="skill-item">AWS</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    
    /**
     * Generate contact page content
     */
    getContactPageContent() {
        return `
            <div class="page-section">
                <h1 class="page-title">Get In Touch</h1>
                <div class="page-subtitle">
                    I'm always interested in new opportunities and collaborations. 
                    Let's connect and discuss how we can work together!
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 3rem;">
                    <div class="card">
                        <div class="card-content" style="text-align: center;">
                            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                                <i class="fas fa-envelope"></i> Email
                            </h3>
                            <p style="margin-bottom: 1rem;">Send me a message and I'll get back to you soon!</p>
                            <a href="mailto:your.email@example.com" class="btn btn-primary">
                                <i class="fas fa-paper-plane"></i> Send Email
                            </a>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-content" style="text-align: center;">
                            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                                <i class="fab fa-github"></i> GitHub
                            </h3>
                            <p style="margin-bottom: 1rem;">Check out my code and contribute to my projects!</p>
                            <a href="https://github.com/yourusername" class="btn btn-secondary" target="_blank">
                                <i class="fas fa-external-link-alt"></i> View Profile
                            </a>
                        </div>
                    </div>
                    
                    <div class="card">
                        <div class="card-content" style="text-align: center;">
                            <h3 style="color: var(--primary-color); margin-bottom: 1rem;">
                                <i class="fab fa-linkedin"></i> LinkedIn
                            </h3>
                            <p style="margin-bottom: 1rem;">Let's connect professionally and network!</p>
                            <a href="https://linkedin.com/in/yourprofile" class="btn btn-secondary" target="_blank">
                                <i class="fas fa-external-link-alt"></i> Connect
                            </a>
                        </div>
                    </div>
                </div>
                
                <div class="card" style="margin-top: 3rem;">
                    <div class="card-header">
                        <h3 class="card-title">Contact Form</h3>
                    </div>
                    <div class="card-content">
                        <form style="display: grid; gap: 1rem;">
                            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                                <div>
                                    <label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Name</label>
                                    <input type="text" class="input" placeholder="Your Name" required>
                                </div>
                                <div>
                                    <label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Email</label>
                                    <input type="email" class="input" placeholder="your.email@example.com" required>
                                </div>
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Subject</label>
                                <input type="text" class="input" placeholder="What's this about?" required>
                            </div>
                            <div>
                                <label style="display: block; margin-bottom: 0.5rem; color: var(--text-secondary);">Message</label>
                                <textarea class="input textarea" placeholder="Your message..." required style="min-height: 120px;"></textarea>
                            </div>
                            <div style="text-align: right;">
                                <button type="submit" class="btn btn-primary">
                                    <i class="fas fa-paper-plane"></i> Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;
    }
}

// Initialize the portfolio application
const app = new PortfolioApp();

// Example of how to add custom pages:
// app.addPage('Blog', 'blog', 'fas fa-blog', () => {
//     return `
//         <div class="page-section">
//             <h1 class="page-title">My Blog</h1>
//             <div class="page-subtitle">Latest thoughts and tutorials</div>
//             <!-- Your custom blog content here -->
//         </div>
//     `;
// });

console.log('🚀 Portfolio app initialized!');
