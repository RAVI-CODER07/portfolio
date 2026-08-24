const aboutTabs = document.querySelectorAll(".sidebar .tabs span");

const aboutContent = document.querySelectorAll(".tab-content");

document.addEventListener("DOMContentLoaded", () => {
  if (aboutTabs) {
   aboutTabs[0].click();
  }
});

aboutTabs.forEach((tab) => {
    tab.addEventListener("click", (e) => {
        e.preventDefault();

        aboutTabs.forEach((a) => {
            a.classList.remove("active");
        });

        tab.classList.add("active");

        aboutContent.forEach((c) => {
            c.classList.remove("active");
        });

        const activeTab = tab.dataset.section;

        document.getElementById(activeTab).classList.add("active");

      if(activeTab === "experience") {
       const experiences = document.querySelector(".experience-list");

      const experienceList = [
                {
                    id: 1,
                    date: "2026 - On Going",
                    position: "Frontent Developer",
                    company: "RM Group",
                    details: 
                    "Built responsive and optimized UIs using React.js and Tailwind CSS. Collaborated with backend teams to integrate APIs and improve user experience.",
                },
                {
                    id: 2,
                    date: "2026 - On Going",
                    position: "MERN Stack Intern",
                    company: "RM Group",
                    details: 
                    "Worked on full-stack web applications using the MERN stack. Gained hands-on experience in authentication, REST APIs, and MongoD",
                },
                {
                   id: 3,
                   date: "2026 - On Going",
                   position: "Freelance Web Developer",
                   company: "RM Group",
                   details: 
                   "Developed custom websites for local businesses using HTML, CSS, JavaScript, and WordPress. Focused on performance, SEO, and mobile-first design.",
                },
       ];

       const experienceContent = experienceList.map((ele) => {
        return `
          <div class="experience-box" key=${ele?.id}>
             <h4>${ele?.date}</h4>
             <h3>${ele?.position}</h3>
             <div class="company-name">
               <span></span>
               <p>${ele?.company}</p>
             </div>
               <p>
               ${ele?.details}
              </p>
            </div>
        `;
        })
        .join("");

      if(experiences){
       experiences.innerHTML = experienceContent;
      }
    }else if (activeTab === "education"){
        const education = document.querySelector(".education-list");

        const educationList = [
            {
              id:1,
              date: "2026 - going On",
              degree: "Bachelor of Computer Aplication(BCA)",
              institution: "Marwari College Bhagalpur",
              details:"Studied core subjects like Data Structures, Web Development, and Operating Systems. Built multiple academic projects using JavaScript and the MERN stack.",
            },

            {
              id: 2,
              date: "2024 - 2026",
              degree: "Higher Secondary Education (HSC - Science)",
              institution: "+2 SIH School",
              details: "Focused on Physics, Chemistry, and Mathematics. Developed a strong foundation in logical thinking and problem-solving.",
            },

            {
              id: 3,
              date: "2023 - 2024",
              degree: "Matric",
              institution: "U U M S Basantpur",
              details: "I study 10th syllabus. studies core subjects like science, economics, physics, engllish",
            },
        ];

        const educationContent = educationList.map((ele)=>{
            return `
            <div class="experience-box" key=${ele?.id}>
             <h4>${ele?.date}</h4>
             <h3>${ele?.degree}</h3>
             <div class="company-name">
               <span></span>
               <p>${ele?.institution}</p>
             </div>
               <p>
               ${ele?.details}
              </p>
            </div>
            `;
        })
        .join("");

        if(education) {
          education.innerHTML = educationContent;
        }
    }else if (activeTab === "skills") {
      const skills = document.querySelector(".skill-list");

      const skillList = [
        {
          id: 1,
          name:"HTML - Hyper Text Markup Language",
          icon: "assests/html_files/html.png",
        },
        {
          id: 2,
          name:"CSS - Cascading Style Sheet",
          icon: "assests/html_files/css.png",
        },
        {
          id: 3,
          name:"JavaScript",
          icon: "assests/html_files/js.png",
        },
        {
          id: 4,
          name: "MongoDB",
          icon: "assests/html_files/mongodb.png",
        },
        {
          id: 5,
          name: "Bootstrap",
          icon: "assests/html_files/bootstrap.png",
        },
        {
          id: 6,
          name: "Node JS",
          icon: "assests/html_files/node.png",
        },
        {
          id: 7,
          name: "React JS",
          icon: "assests/html_files/react.png",
        },
      ];

      const skillContent = skillList.map((ele)=>{
        return `
         <div class="skill-box" key=${ele?.id}>
              <img src=${ele?.icon}
              alt=${ele?.name}
              title=${ele?.name}
              loading=lazy />
          </div>
        `;
      })
      .join("");

      if (skills) {
        skills.innerHTML = skillContent;
      }
    }
   });
}); 