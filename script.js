document.addEventListener('DOMContentLoaded', function() {
    // Data for the portfolio sections
    const portfolioData = {

    hero: {
        intro: "Hi, I'm Keneilwe 👩‍💻",
        roles: [
            "Software Developer",
            "Junior Full Stack Developer",
            "IT Support Specialist",
            "Team Leader",
            "Data Analyst"
        ]
    },

    about: `
        I am a <b>Software Developer</b> with a multidisciplinary background in
        <b>Animal Sciences</b>, <b>Data Science</b>, and
        <b>Information Technology</b>.

        <br><br>

        I hold a Diploma in Animal Sciences, a Certificate in Data Science,
        an IT Systems Support Level 5 Certificate, and an AWS Cloud Practitioner Certification.

        <br><br>

        My experience spans full-stack software development,
        networking, server administration, database management,
        troubleshooting, cloud technologies, and data analytics.

        <br><br>

        I currently volunteer at <b>Proto Care (Pty) Ltd</b> as a
        <b>Junior Full Stack Developer & Team Leader</b>,
        where I contribute to healthcare software development while
        leading development teams and coordinating project delivery.

        <br><br>

        I enjoy solving real-world problems through technology,
        continuously learning new skills,
        and building software that creates meaningful impact.
    `,

    skills: [

        { name: "HTML5", icon: '<i class="fab fa-html5"></i>' },
        { name: "CSS3", icon: '<i class="fab fa-css3-alt"></i>' },
        { name: "JavaScript", icon: '<i class="fab fa-js-square"></i>' },
        { name: "TypeScript", icon: '<i class="fas fa-code"></i>' },

        { name: "React", icon: '<i class="fab fa-react"></i>' },
        { name: "Angular", icon: '<i class="fab fa-angular"></i>' },

        { name: "Java", icon: '<i class="fab fa-java"></i>' },
        { name: "Spring Boot", icon: '<i class="fas fa-leaf"></i>' },

        { name: "Python", icon: '<i class="fab fa-python"></i>' },

        { name: "SQL", icon: '<i class="fas fa-database"></i>' },
        { name: "PostgreSQL", icon: '<i class="fas fa-database"></i>' },
        { name: "MongoDB", icon: '<i class="fas fa-database"></i>' },
        { name: "MySQL", icon: '<i class="fas fa-database"></i>' },

        { name: "Power BI", icon: '<i class="fas fa-chart-bar"></i>' },

        { name: "Git", icon: '<i class="fab fa-git-alt"></i>' },
        { name: "GitHub", icon: '<i class="fab fa-github"></i>' },

        { name: "REST APIs", icon: '<i class="fas fa-plug"></i>' },

        { name: "Networking", icon: '<i class="fas fa-network-wired"></i>' },
        { name: "LAN Configuration", icon: '<i class="fas fa-network-wired"></i>' },
        { name: "Server Administration", icon: '<i class="fas fa-server"></i>' },
        { name: "IT Support", icon: '<i class="fas fa-headset"></i>' },
        { name: "Troubleshooting", icon: '<i class="fas fa-screwdriver-wrench"></i>' },

        { name: "Cloud Technologies", icon: '<i class="fas fa-cloud"></i>' },

        { name: "Leadership", icon: '<i class="fas fa-users"></i>' }

    ],

    projects: [
        {
            id: 1,
            title: "HarvestTrust",
            shortDesc: "Ethical finance platform for Kenyan growers with AI-powered loans.",
            longDesc: "An AI-powered platform providing ethical, harvest-aligned loans to Kenyan farmers. Features a Harvest Cycle Planner, financial literacy tips, and a 'Dignity Filter' for transparent decision-making.",
            technologies: "AI, Financial Services, Web App",
            imageUrl: "./assets/harvestTrust.png",
            demoUrl: "https://harvesttrustapp.vercel.app/",
            githubUrl: ""
        },
        {
            id: 2,
            title: "AgriTrack",
            shortDesc: "Full-stack farm management platform.",
            longDesc: "Developed a full-stack agricultural resource management application helping farmers manage livestock, crops, expenses and resources.",
            technologies: "React, Node.js, MongoDB",
            imageUrl: "./assets/Agritrack.png",
            demoUrl: "",
            githubUrl: "https://github.com/keneilweRangw/Agritrack.git"
        },
        {
            id: 3,
            title: "UniNest Go",
            shortDesc: "Student accommodation platform.",
            longDesc: "Developed a scalable accommodation platform using Angular, Java and Spring Boot.",
            technologies: "Angular, Java, Spring Boot, PostgreSQL",
            imageUrl: "./assets/Macbook.png",
            demoUrl: "",
            githubUrl: ""
        },
        {
            id: 4,
            title: "HydroTrek",
            shortDesc: "River health and pollution analysis.",
            longDesc: "Analysed environmental datasets using Python and Power BI to identify pollution trends.",
            technologies: "Python, Pandas, Power BI",
            imageUrl: "./assets/Logo.jpeg",
            demoUrl: "",
            githubUrl: ""
        },
        {
            id: 5,
            title: "Mastering Avocado Prices",
            shortDesc: "Machine learning price prediction project.",
            longDesc: "Analysed avocado prices between 2015 and 2023 using Python and predictive analytics.",
            technologies: "Python, Scikit-learn, Pandas",
            imageUrl: "./assets/avo.jpeg",
            demoUrl: "",
            githubUrl: "https://github.com/keneilweRangw/Mastering-Avocado-Prices.git"
        }
    ],

    experience: [
        {
            company: "Proto Care (Pty) Ltd",
            title: "Junior Full Stack Developer & Team Leader (Volunteer)",
            duration: "October 2025 - Present",
            responsibilities: [
                "Develop healthcare software solutions focusing on frontend development.",
                "Build responsive and user-friendly interfaces.",
                "Lead and coordinate development meetings.",
                "Assign tasks and monitor project progress.",
                "Mentor and support developers.",
                "Collaborate with cross-functional teams."
            ],
            achievements: [
                "Promoted to Team Leader.",
                "Improved team collaboration.",
                "Contributed to healthcare software used by medical professionals."
            ]
        },
        {
            company: "Shaper (The Digital Academy)",
            title: "Junior Full Stack Developer",
            duration: "April 2026 - June 2026",
            responsibilities: [
                "Developed Angular applications.",
                "Built Spring Boot REST APIs.",
                "Worked with SQL databases.",
                "Collaborated in Agile teams.",
                "Used Git and GitHub.",
                "Optimized application performance."
            ]
        },
        {
            company: "Sand Technologies",
            title: "Data Science & Analytics Intern",
            duration: "September 2024 - December 2024",
            responsibilities: [
                "Performed exploratory data analysis.",
                "Built dashboards.",
                "Worked with cloud storage.",
                "Optimized data pipelines.",
                "Integrated APIs.",
                "Created visual reports."
            ]
        }
    ],

    achievements: [
        {
            title: "🥈 2nd Place - HackToHire",
            description: "Built Spazex AI in a team of five developers during the HackToHire Hackathon."
        },
        {
            title: "Team Leader",
            description: "Promoted to Team Leader while volunteering at Proto Care."
        },
        {
            title: "IT Systems Support Level 5",
            description: "Completed certification covering networking, servers, databases and IT support."
        },
        {
            title: "AWS Cloud Practitioner",
            description: "Completed AWS Cloud Practitioner certification covering cloud fundamentals and AWS core services."
        }
    ],

    timeline: [
        {
            year: "2026",
            title: "HackToHire - 2nd Place",
            description: "Built Spazex AI and placed second."
        },
        {
            year: "2026",
            title: "Completed Full Stack Programme",
            description: "Completed Junior Full Stack Developer programme at Shaper."
        },
        {
            year: "2026",
            title: "IT Systems Support Level 5",
            description: "Completed IT Systems Support qualification."
        },
        {
            year: "2025",
            title: "Joined Proto Care",
            description: "Started volunteering as a Junior Full Stack Developer."
        },
        {
            year: "2024",
            title: "Data Science Certificate",
            description: "Completed Data Science programme."
        },
        {
            year: "2022",
            title: "Diploma in Animal Sciences",
            description: "Graduated from Tshwane University of Technology."
        }
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
    const modalGithub = document.getElementById('modal-github');

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
    
                // Show or hide GitHub button
                if (project.githubUrl) {
                    modalGithub.style.display = 'inline-flex';
                    modalGithub.href = project.githubUrl;
                } else {
                    modalGithub.style.display = 'none';
                    modalGithub.href = '#';
                }
    
                projectModal.classList.add('open');
            }
        }
    });
    
    // Close modal logic
    document.querySelector('.modal-close-btn').addEventListener('click', () => {
        projectModal.classList.remove('open');
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            projectModal.classList.remove('open');
        }
    });

    // ================= EXPERIENCE =================
    const experienceContainer = document.getElementById("experience-container");

    portfolioData.experience.forEach(job => {
        const card = document.createElement("div");
        card.className = "section-card experience-card";

        // Build responsibilities list
        let responsibilitiesHTML = '';
        if (job.responsibilities && job.responsibilities.length > 0) {
            responsibilitiesHTML = '<p class="mt-3"><strong>Responsibilities</strong></p><ul class="list-disc list-inside space-y-1 opacity-80">';
            job.responsibilities.forEach(resp => {
                responsibilitiesHTML += `<li>${resp}</li>`;
            });
            responsibilitiesHTML += '</ul>';
        }

        // Build achievements list
        let achievementsHTML = '';
        if (job.achievements && job.achievements.length > 0) {
            achievementsHTML = '<p class="mt-3"><strong>Key Achievements</strong></p><ul class="list-disc list-inside space-y-1 opacity-80">';
            job.achievements.forEach(ach => {
                achievementsHTML += `<li>${ach}</li>`;
            });
            achievementsHTML += '</ul>';
        }

        card.innerHTML = `
            <h3 class="font-bold text-2xl">${job.title}</h3>
            <h4 class="text-lg font-medium">${job.company}</h4>
            <p class="text-sm opacity-70 mb-3">${job.duration}</p>
            ${responsibilitiesHTML}
            ${achievementsHTML}
        `;

        experienceContainer.appendChild(card);
    });

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

    const form = document.getElementById('contact-form');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    function showToast(message, type = 'success') {
      toastMessage.textContent = message;
      toast.style.backgroundColor = type === 'success' ? '#16a34a' : '#dc2626';
      toast.classList.remove('hidden');
      toast.classList.add('flex');

      setTimeout(() => {
        toast.classList.add('hidden');
        toast.classList.remove('flex');
      }, 3000);
    }

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
        });

        if (response.ok) {
          showToast('✅ Message sent successfully!', 'success');
          form.reset();
        } else {
          showToast('⚠️ Something went wrong. Please try again.', 'error');
        }
      } catch (error) {
        showToast('❌ Network error. Please try again later.', 'error');
        console.error(error);
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

// Dynamic Resume Download
const resumeButton = document.querySelector('.btn.btn-primary[href="#"]');

if (resumeButton) {
    resumeButton.addEventListener('click', (e) => {
        e.preventDefault();

        const link = document.createElement('a');
        link.href = './assets/Keneilwe_Rangwaga_Resume.pdf';
        link.download = 'Keneilwe_Rangwaga_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}