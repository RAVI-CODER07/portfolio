const projectList = [
    {
        id: 1,
        number: "01",
        title:"FullStack Thread Clone",
        description:
        "Modern full-stack web app designed for seamless micro-blogging, featuring secure JWT authentication, dynamic feed rendering, and full CRUD functionality.",
        techStack:["MongoDB", "Express", "React", "Node"],
        image:"assests/html_files/project1.webp",
        liveLink: "#",
        githubLink: "#",
    },
    {
        id: 2,
        number: "02",
        title:"SAAS Canva Website",
        description:"A web-based SAAS platform for intuitive graphic design and template customization. Powered by Next.js for high performance and Strapi CMS for flexible backend asset management, user handling, and scalable API integration.",
        techStack: ["Next JS", "Strapi"],
        image: "assests/html_files/project2.webp",
        liveLink: "#",
        githubLink: "#",
    }
];

const projects = document.querySelector(".projects");

let currentIndex = 0;

const renderProject = (index) => {
    const projectContent = projectList[index];

    const previousDisabled = currentIndex === 0;

    const nextDisabled = currentIndex === projectList.length - 1;

    projects.innerHTML = `
    <div class="project-info">
      <h3>${projectContent?.number}</h3>
      <h4>${projectContent?.title}</h4>
      <p>${projectContent?.description}</p>

      <div class="tech-stack">
      ${
        projectContent?.techStack?.map((tech , i) =>{
            return`
            <span key=${i}>${tech}</span>
            `;
      })}
    </div>
       <hr />

        <div class="links">
            <a href="${projectContent?.liveLink}">
              <i class="ph ph-arrow-right"></i>
            </a>
            <a href="${projectContent?.githubLink}">
             <i class="ph ph-github-logo"></i>
            </a>
        </div>
    </div>
        <div class="carousel">
          <img src="${projectContent?.image}"
             alt=${projectContent?.title}/>

                <div class="arrows">
                        <a hrerf="#" id="previous" class=${
                            previousDisabled ? "disabled-btn": ""
                        }>
                            <i class="ph ph-caret-left"></i>
                        </a>
                         <a href="#" id="next" class=${
                                nextDisabled ? "disabled-btn": ""}>
                            <i class="ph ph-caret-right"></i>
                        </a>
                    </div>
                </div>
    `;

    document.getElementById('previous')?.addEventListener("click",(e)=>{
        e.preventDefault();

        if (currentIndex > 0) {
            currentIndex--;
            renderProject(currentIndex);
        }
    });

    document.getElementById('next')?.addEventListener("click",(e)=>{
        e.preventDefault();

        if (currentIndex < projectList.length -1) {
            currentIndex++;
            renderProject(currentIndex);
        }
    });
};

renderProject(currentIndex);