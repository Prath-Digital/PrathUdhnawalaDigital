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
    }
    return [];
}

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    if (!skillsContainer) return;
    let skillHTML = "";
    skills.forEach(skill => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src="${skill.icon}" alt="skill" />
                <span>${skill.name}</span>
              </div>
            </div>`;
    });
    skillsContainer.innerHTML = skillHTML;

    // Trigger ScrollReveal for skills bars AFTER innerHTML is populated
    if (typeof ScrollReveal !== 'undefined') {
        const srtop = ScrollReveal({
            origin: 'top',
            distance: '80px',
            duration: 1200,
            reset: true,
            mobile: false,
            easing: 'cubic-bezier(0.5, 0, 0, 1)'
        });
        srtop.reveal('.skills .container .bar', { origin: 'bottom', interval: 60 });
    }
}

function showAchievements(achievements) {
    let achievementsContainer = document.querySelector("#achievements .box-container");
    if (!achievementsContainer) return;

    let path = window.location.pathname.toLowerCase();
    let isAchievementsPage = path.includes("achievements");
    let isMainPage = !isAchievementsPage;
    
    // Sort so certificates appear first, then badges
    let sortedAchievements = achievements.sort((a, b) => {
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

    // tilt js effect
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".tilt"), {
            max: 15,
        });
    }

    // Simple flexbox-friendly filter
    if (document.querySelector('.work .button-group')) {
        let filterButtons = document.querySelectorAll('.work .button-group .btn');
        let boxes = achievementsContainer.querySelectorAll('.box');

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
            mobile: false,
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
        mobile: false,
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