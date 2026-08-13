$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

});


if (document.querySelector('.typing-text')) {
    var typed = new Typed(".typing-text", {
        strings: ["Data Analysis", "Artificial Intelligence", "Data Science", "Machine Learning", "Deep Learning", "Neural Networks", "AI Development", "Blockchain Technology", "3D Animation", "VFX"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
    });
}
// <!-- typed js effect ends -->

const fallbackSkillsData = [
    { "name": "Python", "icon": "/assets/images/skills/python.svg" },
    { "name": "MySQL", "icon": "/assets/images/skills/mysql.svg" },
    { "name": "Machine Learning", "icon": "/assets/images/skills/machine-learning.svg" },
    { "name": "Deep Learning", "icon": "/assets/images/skills/deep-learning.svg" },
    { "name": "Statistics", "icon": "/assets/images/skills/statistics.svg" },
    { "name": "Data Analysis", "icon": "/assets/images/skills/data-analysis.svg" },
    { "name": "Data Science", "icon": "/assets/images/skills/data-science.svg" },
    { "name": "Power BI", "icon": "/assets/images/skills/power-bi.svg" },
    { "name": "Advanced Excel", "icon": "/assets/images/skills/excel.svg" },
    { "name": "C++", "icon": "/assets/images/skills/cpp.svg" },
    { "name": "C", "icon": "/assets/images/skills/c.svg" },
    { "name": "HTML5", "icon": "/assets/images/skills/html5.svg" },
    { "name": "CSS3", "icon": "/assets/images/skills/css3.svg" },
    { "name": "JavaScript", "icon": "/assets/images/skills/js.svg" },
    { "name": "Git", "icon": "/assets/images/skills/git.svg" },
    { "name": "GitHub", "icon": "/assets/images/skills/github.svg" },
    { "name": "Firebase", "icon": "/assets/images/skills/firebase.svg" },
    { "name": "Animation & VFX", "icon": "/assets/images/skills/blender.svg" },
    { "name": "Figma", "icon": "/assets/images/skills/figma.svg" }
];

const fallbackAchievementsData = [
    {
        "name": "Use AI Responsibly",
        "provider": "Coursera",
        "image": "/assets/achievements/Coursera 0O7QWG62P5M4.png",
        "pdf": "/assets/achievements/Coursera 0O7QWG62P5M4.png",
        "link": "/assets/achievements/Coursera 0O7QWG62P5M4.png",
        "type": "certificate"
    },
    {
        "name": "Loops and Strings",
        "provider": "Coursera",
        "image": "/assets/achievements/Coursera 30SJ4JCD5323.png",
        "pdf": "/assets/achievements/Coursera 30SJ4JCD5323.pdf",
        "link": "/assets/achievements/Coursera 30SJ4JCD5323.pdf",
        "type": "certificate"
    },
    {
        "name": "Supervised Machine Learning: Regression and Classification",
        "provider": "Coursera",
        "image": "/assets/achievements/Coursera 3ZM3RWVWK1TP.png",
        "pdf": "/assets/achievements/Coursera 3ZM3RWVWK1TP.pdf",
        "link": "/assets/achievements/Coursera 3ZM3RWVWK1TP.pdf",
        "type": "certificate"
    },
    {
        "name": "Maximize Productivity With AI Tools",
        "provider": "Coursera",
        "image": "/assets/achievements/Coursera 46UHCYULAE5F.png",
        "pdf": "/assets/achievements/Coursera 46UHCYULAE5F.pdf",
        "link": "/assets/achievements/Coursera 46UHCYULAE5F.pdf",
        "type": "certificate"
    },
    {
        "name": "Introduction to AI",
        "provider": "Coursera",
        "image": "/assets/achievements/Coursera 831POPUHD5N1.png",
        "pdf": "/assets/achievements/Coursera 831POPUHD5N1.pdf",
        "link": "/assets/achievements/Coursera 831POPUHD5N1.pdf",
        "type": "certificate"
    },
    {
        "name": "Advanced Learning Algorithms",
        "provider": "Coursera",
        "image": "/assets/achievements/Coursera GGNK2LCJNGQ9.png",
        "pdf": "/assets/achievements/Coursera GGNK2LCJNGQ9.pdf",
        "link": "/assets/achievements/Coursera GGNK2LCJNGQ9.pdf",
        "type": "certificate"
    },
    {
        "name": "Hello, Python!",
        "provider": "Coursera",
        "image": "/assets/achievements/Coursera I6AAC42TKZLW.png",
        "pdf": "/assets/achievements/Coursera I6AAC42TKZLW.pdf",
        "link": "/assets/achievements/Coursera I6AAC42TKZLW.pdf",
        "type": "certificate"
    },
    {
        "name": "Machine Learning Specialization",
        "provider": "Coursera",
        "image": "/assets/achievements/Coursera IJOGKMTMN7S0.png",
        "pdf": "/assets/achievements/Coursera IJOGKMTMN7S0.pdf",
        "link": "/assets/achievements/Coursera IJOGKMTMN7S0.pdf",
        "type": "certificate"
    },
    {
        "name": "Discover the Art of Prompting",
        "provider": "Coursera",
        "image": "/assets/achievements/Coursera ISDX8LH8MHXU.png",
        "pdf": "/assets/achievements/Coursera ISDX8LH8MHXU.pdf",
        "link": "/assets/achievements/Coursera ISDX8LH8MHXU.pdf",
        "type": "certificate"
    },
    {
        "name": "Stay Ahead of the AI Curve",
        "provider": "Coursera",
        "image": "/assets/achievements/Coursera J8MY1ZPFEKBW.png",
        "pdf": "/assets/achievements/Coursera J8MY1ZPFEKBW.pdf",
        "link": "/assets/achievements/Coursera J8MY1ZPFEKBW.pdf",
        "type": "certificate"
    },
    {
        "name": "Unsupervised Learning, Recommenders, Reinforcement Learning",
        "provider": "Coursera",
        "image": "/assets/achievements/Coursera KN3U77CNUSWZ.png",
        "pdf": "/assets/achievements/Coursera KN3U77CNUSWZ.pdf",
        "link": "/assets/achievements/Coursera KN3U77CNUSWZ.pdf",
        "type": "certificate"
    },
    {
        "name": "Functions and Conditional Statements",
        "provider": "Coursera",
        "image": "/assets/achievements/Coursera V5S8C92637ZC.png",
        "pdf": "/assets/achievements/Coursera V5S8C92637ZC.pdf",
        "link": "/assets/achievements/Coursera V5S8C92637ZC.pdf",
        "type": "certificate"
    },
    {
        "name": "Google AI Essentials",
        "provider": "Coursera",
        "image": "/assets/achievements/Coursera WJIU9BNAS7H2.png",
        "pdf": "/assets/achievements/Coursera WJIU9BNAS7H2.pdf",
        "link": "/assets/achievements/Coursera WJIU9BNAS7H2.pdf",
        "type": "certificate"
    },
    {
        "name": "Google AI Essentials Badge",
        "provider": "Google",
        "image": "/assets/achievements/google-ai-essentials-v1.png",
        "pdf": "/assets/achievements/GoogleAIEssentialsV1_Badge20260617-30-emy8d4.pdf",
        "link": "/assets/achievements/GoogleAIEssentialsV1_Badge20260617-30-emy8d4.pdf",
        "type": "badge"
    },
    {
        "name": "Python",
        "provider": "Kaggle",
        "image": "/assets/achievements/Prath Udhnawala - Python.png",
        "pdf": "/assets/achievements/Prath Udhnawala - Python.png",
        "link": "/assets/achievements/Prath Udhnawala - Python.png",
        "type": "certificate"
    },
    {
        "name": "Data Structures in Python",
        "provider": "Coursera",
        "image": "/assets/achievements/Coursera HTHE4FKOXMSX.png",
        "pdf": "/assets/achievements/Coursera HTHE4FKOXMSX.pdf",
        "link": "/assets/achievements/Coursera HTHE4FKOXMSX.pdf",
        "type": "certificate"
    }
];

async function fetchData(type = "skills") {
    let filename = type === "skills" ? "skills.json" : "achievements.json";
    let urlsToTry = [`/${filename}`, `./${filename}`, filename];
    
    for (let u of urlsToTry) {
        try {
            let response = await fetch(u);
            if (response.ok) {
                let data = await response.json();
                if (Array.isArray(data) && data.length > 0) {
                    return data;
                }
            }
        } catch (e) {
            console.warn(`Fetch attempt for ${u} failed:`, e);
        }
    }
    
    if (type === "skills") {
        return fallbackSkillsData;
    } else {
        return fallbackAchievementsData;
    }
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    if (!skillsContainer) return;
    let skillList = (Array.isArray(skills) && skills.length > 0) ? skills : fallbackSkillsData;
    let skillHTML = "";
    skillList.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src="${skill.icon}" alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`;
    });
    skillsContainer.innerHTML = skillHTML;

    // Ensure elements are visible
    let bars = skillsContainer.querySelectorAll('.bar');
    bars.forEach(bar => {
        bar.style.visibility = 'visible';
        bar.style.opacity = '1';
    });

    if (typeof ScrollReveal !== 'undefined') {
        const srtop = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 1200,
            reset: true,
            mobile: true,
            easing: 'cubic-bezier(0.5, 0, 0, 1)'
        });
        srtop.reveal('.skills .container .bar', { origin: 'bottom', interval: 60 });
    }
}

function showAchievements(achievements) {
    let achievementsContainer = document.querySelector("#achievements .box-container");
    if (!achievementsContainer) return;

    let achievementList = (Array.isArray(achievements) && achievements.length > 0) ? achievements : fallbackAchievementsData;

    let path = window.location.pathname.toLowerCase();
    let isAchievementsPage = path.includes("achievements");
    let isMainPage = !isAchievementsPage;
    
    // Sort so certificates appear first, then badges
    let sortedAchievements = achievementList.sort((a, b) => {
        let typeA = a.type || 'certificate';
        let typeB = b.type || 'certificate';
        if (typeA === typeB) return 0;
        return typeA === 'certificate' ? -1 : 1;
    });

    let displayAchievements = isMainPage ? sortedAchievements.slice(0, 3) : sortedAchievements;

    let achievementHTML = "";
    displayAchievements.forEach(ach => {
        let achType = ach.type || "certificate";
        let descHtml = ach.desc ? `<p>${ach.desc}</p>` : '';

        if (achType === "badge") {
            achievementHTML += `
            <div class="box badge-card tilt ${achType}">
              <div class="badge-inner">
                <div class="badge-front">
                  <img draggable="false" src="${ach.image}" alt="badge" onerror="this.onerror=null; this.src='/assets/images/certificate-placeholder.svg';" />
                </div>
                <div class="badge-back">
                  <h3>${ach.name}</h3>
                  ${descHtml}
                  <div class="btns">
                    <a href="${ach.link}" class="btn" target="_blank"><i class="fas fa-external-link-alt"></i> Verify</a>
                  </div>
                </div>
              </div>
            </div>`;
        } else {
            achievementHTML += `
            <div class="box tilt ${achType}">
              <img draggable="false" src="${ach.image}" alt="achievement" onerror="this.onerror=null; this.src='/assets/images/certificate-placeholder.svg';" />
              <div class="content">
                <div class="tag">
                <h3>${ach.name}</h3>
                </div>
                <div class="desc">
                  ${descHtml}
                  <div class="btns">
                    <a href="${ach.link}" class="btn" target="_blank"><i class="fas fa-external-link-alt"></i> Verify</a>
                  </div>
                </div>
              </div>
            </div>`;
        }
    });
    achievementsContainer.innerHTML = achievementHTML;

    // Ensure elements are immediately visible even if ScrollReveal fails or is on mobile
    let boxes = achievementsContainer.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.visibility = 'visible';
        box.style.opacity = '1';
        box.style.display = 'block';
    });

    // tilt js effect
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".tilt"), {
            max: 15,
        });
    }

    // Simple flexbox-friendly filter
    if (document.querySelector('.work .button-group')) {
        let filterButtons = document.querySelectorAll('.work .button-group .btn');

        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                filterButtons.forEach(b => b.classList.remove('is-checked'));
                btn.classList.add('is-checked');

                let filterValue = btn.getAttribute('data-filter');

                boxes.forEach(box => {
                    if (filterValue === '*' || box.classList.contains(filterValue.replace('.', ''))) {
                        box.style.display = 'block';
                        box.style.visibility = 'visible';
                        box.style.opacity = '1';
                        box.style.transform = 'none';
                    } else {
                        box.style.display = 'none';
                    }
                });
            });
        });
    }

    /* ===== SCROLL REVEAL ANIMATION ===== */
    if (typeof ScrollReveal !== 'undefined') {
        const srtop = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 1200,
            reset: true,
            viewFactor: 0.1,
            mobile: true,
            easing: 'cubic-bezier(0.5, 0, 0, 1)'
        });
        srtop.reveal('.work .box', { origin: 'bottom', interval: 80 });
    }
}

fetchData("skills").then(data => {
    showSkills(data);
});

fetchData("achievements").then(data => {
    showAchievements(data);
});

// <!-- tilt js effect starts -->
if (typeof VanillaTilt !== 'undefined') {
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
    });
}

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

/* ===== SCROLL REVEAL ANIMATION ===== */
if (typeof ScrollReveal !== 'undefined') {
    const srtop = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1200,
        reset: true,
        mobile: true,
        easing: 'cubic-bezier(0.5, 0, 0, 1)'
    });

    srtop.reveal('.about .content h3', { origin: 'bottom' });
    srtop.reveal('.about .content .tag', { origin: 'bottom' });
    srtop.reveal('.about .content p', { origin: 'bottom' });
    srtop.reveal('.about .content .box-container', { origin: 'bottom' });
    srtop.reveal('.about .content .resumebtn', { origin: 'bottom' });
    srtop.reveal('.about .image', { origin: 'left' });
    srtop.reveal('.skills .container', { origin: 'bottom' });
    srtop.reveal('.education .box', { origin: 'bottom' });
    srtop.reveal('.contact .container', { origin: 'bottom' });
}