const menu1 = document.querySelector('.nav-btn');
const menu2 = document.querySelector('.close-drawer-btn');
const navBars = document.querySelector('.open-nav');

function disappear() {
  const menuDis1 = document.querySelector('.navbar');
  menuDis1.classList.toggle('disappear');
  const menuDis2 = document.querySelector('.open-nav');
  menuDis2.classList.toggle('disappear');
  menuDis2.classList.toggle('menu-drawer-height');
}

function closeOnAtag(e) {
  const anchor = e.target.closest('a');
  if (anchor !== null) {
    disappear();
  }
}
menu1.addEventListener('click', disappear);
menu2.addEventListener('click', disappear);
navBars.addEventListener('click', closeOnAtag, false);

const projects = [{
    name: 'Bavon Portfolio ',
    description: 'My Portfolio',
    images: [],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    live_link: "#",
    source_link: "#",
  },
  {
    name: 'Bavon Portfolio ',
    description: 'My Portfolio',
    images: [],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    live_link: "#",
    source_link: "#"
  },
  {
    name: 'Bavon Portfolio ',
    description: 'My Portfolio',
    images: [],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    live_link: "#",
    source_link: "#"
  },
  {
    name: 'Bavon Portfolio ',
    description: 'My Portfolio',
    images: [],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    live_link: "#",
    source_link: "#"
  },
  {
    name: 'Bavon Portfolio ',
    description: 'My Portfolio',
    images: [],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    live_link: "#",
    source_link: "#"
  },
  {
    name: 'Bavon Portfolio ',
    description: 'My Portfolio',
    images: [],
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    live_link: "#",
    source_link: "#"
  }
];

const projectImageClass = 'project_image';

function appendProjects() {
  const projectsSection = document.getElementById('mobile_projects');
  for (let i = 0; i < projects.length; i++) {
    //!create project card
    const projectCard = document.createElement('div');
    //! add card class
    projectCard.classList.add('project_card');
    //!create details container
    const projectDetails = document.createElement('div');
    //! add card class
    projectDetails.classList.add('project_details_card');
    //!create h2 for project name
    const projectName = document.createElement('h2');
    //! assign class
    projectName.classList.add('project_name');
    //!create name text and append
    const textName = document.createTextNode(projects[i].name);
    projectName.appendChild(textName);

    //! project tecs
    const projectsTechContainer = document.createElement('div');
    //! assign class
    projectsTechContainer.classList.add('project_tecs_container');
    //! add tech list
    const techList = document.createElement('ul');
    //! assign class
    techList.classList.add('ul');
    const technologies = projects[i].technologies;
    technologies.forEach((t) => {
      const listItem = document.createElement('li');
      listItem.classList.add('li');
      const tecCard = document.createElement('div');
      tecCard.classList.add('tech_card');
      const techValue = document.createElement('p');
      techValue.classList.add('tech_text');
      const techText = document.createTextNode(t);
      //! append children
      techValue.appendChild(techText);
      tecCard.appendChild(techValue);
      listItem.appendChild(tecCard);
      //! add item to list
      techList.appendChild(listItem);
    })
    //! add list to card
    projectsTechContainer.appendChild(techList);
    //! add project button

    const projectButton = document.createElement('button');
    projectButton.classList.add('see_project');
    const buttonText = document.createTextNode('See this project');
    projectButton.appendChild(buttonText);
    const buttonIcon = document.createElement('i');
    buttonIcon.classList.add('arrow_forward');
    projectButton.appendChild(buttonIcon);

    //! add all projects details
    projectDetails.appendChild(projectName);
    projectDetails.appendChild(projectsTechContainer);
    projectDetails.appendChild(projectButton);


    let projectImage = document.createElement('div');
    if (i === 0) {
      projectImage.classList.add(projectImageClass);
    } else {
      projectImage.classList.add(`${projectImageClass}_${i}`);

    }
    projectCard.appendChild(projectImage);
    projectCard.appendChild(projectDetails);
    projectsSection.appendChild(projectCard);
  }
}

appendProjects();