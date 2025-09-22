document.addEventListener('DOMContentLoaded', function() {
    // Data for the portfolio sections
    const portfolioData = {
        hero: {
            intro: "Hi, I’m Keneilwe 👩‍💻",
            roles: ["Full-Stack Developer", "Data Analyst", "Researcher"]
        },
        about: "I am a <b>full-stack developer</b> with a diploma in <b>Email Sciences</b> and a certificate in <b>Data Sciences</b>. I recently completed a <b>full-stack leadership internship at Shaper</b>, where I gained hands-on experience in building robust, end-to-end applications using modern frameworks. My expertise spans both front-end and back-end development, complemented by a strong background in <b>data analysis and machine learning</b>. I have a proven track record of working on impactful projects, from developing agricultural resource tracking platforms to analyzing complex datasets to predict outcomes. I am a collaborative problem-solver who enjoys exploring the latest tech innovations and contributing to projects that make a tangible difference.",
        skills: [
            { name: 'HTML', icon: '<i class="fab fa-html5"></i>' },
            { name: 'CSS', icon: '<i class="fab fa-css3-alt"></i>' },
            { name: 'JavaScript', icon: '<i class="fab fa-js-square"></i>' },
            { name: 'Angular', icon: '<i class="fab fa-angular"></i>' },
            { name: 'Java', icon: '<i class="fab fa-java"></i>' },
            { name: 'Spring Boot', icon: '<i class="fas fa-leaf"></i>' },
            { name: 'GitHub', icon: '<i class="fab fa-github"></i>' },
            { name: 'PostgreSQL', icon: '<i class="fas fa-database"></i>' },
            { name: 'MySQL', icon: '<i class="fas fa-database"></i>' },
            { name: 'Python', icon: '<i class="fab fa-python"></i>' },
            { name: 'SQL', icon: '<i class="fas fa-database"></i>' },
            { name: 'React', icon: '<i class="fab fa-react"></i>' },
            { name: 'Power BI', icon: '<i class="fas fa-chart-bar"></i>' }
        ],
        projects: [
            {
                id: 1,
                title: "AgriTrek",
                shortDesc: "Developed a robust full-stack platform for agricultural resource tracking.",
                longDesc: "This comprehensive platform was built to help farmers and agricultural businesses efficiently manage resources. The application features user authentication, a detailed dashboard for monitoring crop health and resource allocation, and a real-time data visualization module to track key metrics. Technologies used: Angular, Spring Boot, PostgreSQL, Chart.js.",
                technologies: "Angular, Spring Boot, PostgreSQL, Chart.js",
                imageUrl: "https://placehold.co/100x100/4F46E5/ffffff?text=AgriTrek"
            },
            {
                id: 2,
                title: "E-commerce Microservice Backend",
                shortDesc: "Architected and implemented a scalable microservices-based e-commerce backend.",
                longDesc: "I designed and implemented a scalable microservices-based backend for an e-commerce platform. The system is responsible for handling user authentication, product management, and order processing, demonstrating expertise in distributed systems and API design. Technologies used: Java, Spring Boot, MySQL.",
                technologies: "Java, Spring Boot, MySQL",
                imageUrl: "https://placehold.co/100x100/4F46E5/ffffff?text=E-Commerce"
            },
            {
                id: 3,
                title: "River Health Project",
                shortDesc: "Conducted a data analysis of river health metrics to identify pollution trends.",
                longDesc: "In this project, I performed a comprehensive data analysis of river health metrics to identify pollution trends and sewage discharge patterns. I utilized Python for data cleaning and statistical analysis, and created interactive dashboards with Power BI to visualize the findings. Technologies used: Python (Pandas, NumPy), Power BI.",
                technologies: "Python (Pandas, NumPy), Power BI",
                imageUrl: "https://placehold.co/100x100/4F46E5/ffffff?text=River+Health"
            },
            {
                id: 4,
                title: "Employment ML Model",
                shortDesc: "Built and evaluated machine learning models to predict income levels.",
                longDesc: "I built and evaluated machine learning models (Random Forest, Gradient Boosting) to predict income levels based on demographic and employment data. My work focused on feature engineering and model interpretability to provide actionable insights for a research study. Technologies used: Python (Scikit-learn, Pandas).",
                technologies: "Python (Scikit-learn, Pandas)",
                imageUrl: "https://placehold.co/100x100/4F46E5/ffffff?text=ML+Model"
            }
        ],
        experience: {
            title: "Full-Stack Intern – Shaper",
            description: "Contributed to the development of a company-wide internal resource management application. My responsibilities included developing new features in the Angular front end, designing and implementing REST APIs with Spring Boot, and managing database schema updates in PostgreSQL. This role honed my collaborative skills and full-stack proficiency in an agile environment.",
            duration: "[Start Date] - [End Date]"
        },
        timeline: [
            { year: 2024, title: "Full-Stack Internship at Shaper", description: "Honed full-stack development skills in a professional, agile environment." },
            { year: 2023, title: "Data Science Certificate", description: "Completed a certificate focusing on machine learning and data analysis." },
            { year: 2022, title: "Launched AgriTrek Project", description: "First major personal project, a full-stack resource tracking platform." },
            { year: 2021, title: "Began Diploma in Email Sciences", description: "Started formal education in technology and data." }
        ]
    };

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.classList.add(savedTheme + '-theme');
    themeIcon.className = savedTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            themeIcon.className = 'fas fa-moon';
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            themeIcon.className = 'fas fa-sun';
        }
    });

    // Typing Effect
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedTextElement = document.getElementById('typed-text');

    function type() {
        const currentRole = portfolioData.hero.roles[roleIndex];
        if (isDeleting) {
            typedTextElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedTextElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentRole.length) {
            typeSpeed = 1000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % portfolioData.hero.roles.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }
    type();

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.2
    });

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Populate static content
    document.getElementById('about-content').innerHTML = portfolioData.about;

// Populate skills with icons
const skillsList = document.getElementById('skills-list');
portfolioData.skills.forEach(skill => {
    const li = document.createElement('li');
    li.className = 'section-card skill-item';
    li.innerHTML = `${skill.icon} <span class="font-semibold text-lg ml-2">${skill.name}</span>`;
    skillsList.appendChild(li);
});


    // Populate projects
    const projectsGrid = document.getElementById('projects-grid');
    const projectModal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalTech = document.getElementById('modal-tech');
    const modalImage = document.getElementById('modal-image');

    portfolioData.projects.forEach(project => {
        const div = document.createElement('div');
        div.className = 'section-card project-card';
        div.innerHTML = `
            <div class="flex items-center space-x-4 mb-4">
                <img src="${project.imageUrl}" alt="${project.title} Image" class="w-14 h-14 rounded-xl" style="width:3.5rem; height:3.5rem;">
                <h3 class="font-bold text-2xl">${project.title}</h3>
            </div>
            <p class="mt-2 opacity-80">${project.shortDesc}</p>
            <p class="text-sm mt-4 opacity-60">
                <b>Technologies:</b> ${project.technologies}
            </p>
            <button class="btn btn-primary mt-6 view-details" data-id="${project.id}">View Details</button>
        `;
        projectsGrid.appendChild(div);
    });

    // Project modal logic
    projectsGrid.addEventListener('click', (e) => {
        if (e.target.classList.contains('view-details')) {
            const projectId = parseInt(e.target.dataset.id);
            const project = portfolioData.projects.find(p => p.id === projectId);
            if (project) {
                modalTitle.textContent = project.title;
                modalDesc.textContent = project.longDesc;
                modalTech.innerHTML = `<b>Technologies:</b> ${project.technologies}`;
                modalImage.src = project.imageUrl.replace('100x100', '400x300');
                projectModal.classList.add('open');
            }
        }
    });

    document.querySelector('.modal-close-btn').addEventListener('click', () => {
        projectModal.classList.remove('open');
    });
    window.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.classList.remove('open');
        }
    });
    
    // Populate experience
    document.getElementById('experience-title').textContent = portfolioData.experience.title;
    document.getElementById('experience-description').textContent = portfolioData.experience.description;
    document.getElementById('experience-duration').innerHTML = `<b>Duration:</b> ${portfolioData.experience.duration}`;

    // Populate timeline
    const timelineContainer = document.getElementById('timeline-container');
    portfolioData.timeline.forEach(item => {
        const div = document.createElement('div');
        div.className = 'timeline-item';
        div.innerHTML = `
            <h3 class="font-bold text-xl">${item.year}</h3>
            <h4 class="font-semibold mt-1">${item.title}</h4>
            <p class="mt-2 opacity-80">${item.description}</p>
        `;
        timelineContainer.appendChild(div);
    });

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        
        if (data.name && data.email && data.message) {
            console.log('Form submitted:', data);
            formStatus.textContent = 'Message sent successfully! Thank you.';
            formStatus.style.color = 'var(--accent)';
            contactForm.reset();
        } else {
            formStatus.textContent = 'Please fill in all fields.';
            formStatus.style.color = '#EF4444';
        }
    });
    
    // Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});