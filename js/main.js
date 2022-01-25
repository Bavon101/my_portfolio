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
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          beatae ullam dolore hic repellendus ratione dolorum optio sit iure,
          velit consequatur, inventore deserunt, ad fugiat! Ab qui vitae
          laudantium velit tenetur tempore temporibus ex in dolorem nulla! Enim,
          adipisci in!`,
  images: ['', '', '', ''],
  technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  live_link: '#',
  source_link: '#',
},
{
  name: 'Bavon Portfolio ',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          beatae ullam dolore hic repellendus ratione dolorum optio sit iure,
          velit consequatur, inventore deserunt, ad fugiat! Ab qui vitae
          laudantium velit tenetur tempore temporibus ex in dolorem nulla! Enim,
          adipisci in!`,
  images: ['', '', '', ''],
  technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  live_link: '#',
  source_link: '#'
},
{
  name: 'Bavon Portfolio ',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          beatae ullam dolore hic repellendus ratione dolorum optio sit iure,
          velit consequatur, inventore deserunt, ad fugiat! Ab qui vitae
          laudantium velit tenetur tempore temporibus ex in dolorem nulla! Enim,
          adipisci in!`,
  images: ['', '', '', ''],
  technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  live_link: '#',
  source_link: '#'
},
{
  name: 'Bavon Portfolio ',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          beatae ullam dolore hic repellendus ratione dolorum optio sit iure,
          velit consequatur, inventore deserunt, ad fugiat! Ab qui vitae
          laudantium velit tenetur tempore temporibus ex in dolorem nulla! Enim,
          adipisci in!`,
  images: ['', '', '', ''],
  technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  live_link: '#',
  source_link: '#'
},
{
  name: 'Bavon Portfolio ',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          beatae ullam dolore hic repellendus ratione dolorum optio sit iure,
          velit consequatur, inventore deserunt, ad fugiat! Ab qui vitae
          laudantium velit tenetur tempore temporibus ex in dolorem nulla! Enim,
          adipisci in!`,
  images: ['', '', '', ''],
  technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  live_link: '#',
  source_link: '#'
},
{
  name: 'Bavon Portfolio ',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          beatae ullam dolore hic repellendus ratione dolorum optio sit iure,
          velit consequatur, inventore deserunt, ad fugiat! Ab qui vitae
          laudantium velit tenetur tempore temporibus ex in dolorem nulla! Enim,
          adipisci in!`,
  images: ['', '', '', ''],
  technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  live_link: '#',
  source_link: '#'
}
];

const projectImageClass = 'project_image';

function appendProjects() {
  const projectsSection = document.getElementById('mobile_projects');
  for (let i = 0; i < projects.length; i++) {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project_card');
    const projectDetails = document.createElement('div');
    projectDetails.classList.add('project_details_card');
    const projectName = document.createElement('h2');
    projectName.classList.add('project_name');
    const textName = document.createTextNode(projects[i].name);
    projectName.appendChild(textName);
    const projectsTechContainer = document.createElement('div');
    projectsTechContainer.classList.add('project_tecs_container');
    const techList = document.createElement('ul');
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
      techValue.appendChild(techText);
      tecCard.appendChild(techValue);
      listItem.appendChild(tecCard);
      techList.appendChild(listItem);
    });
    projectsTechContainer.appendChild(techList);
    const projectId = `project_${i}`;
    const projectButton = document.createElement('button');
    projectButton.classList.add('see_project');
    projectButton.setAttribute('id', projectId);
    const buttonText = document.createTextNode('See this project');
    projectButton.appendChild(buttonText);
    const buttonIcon = document.createElement('i');
    buttonIcon.classList.add('arrow_forward');
    projectButton.appendChild(buttonIcon);
    projectDetails.appendChild(projectName);
    projectDetails.appendChild(projectsTechContainer);
    projectDetails.appendChild(projectButton);


    const projectImage = document.createElement('div');
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
var projectsButton = document.querySelector('.see_project');
const detailsCard = document.getElementById('view_project');
const vanishPoint = document.querySelectorAll('.can_dissapear');

function togleVanishPoint() {
  vanishPoint.forEach((e) => {
    e.classList.toggle('has_dissapeared');
  })
}

function closeDetailsPop() {
  detailsCard.style.display = 'none';
  togleVanishPoint();
  detailsCard.replaceChildren();
}

function createProjectDetails(id) {
  const project = projects[id];
  if (project === null || project === undefined) {
    return;
  }
  const closeButton = document.createElement('button');
  closeButton.classList.add('project_detials_close');
  closeButton.setAttribute('id', 'close_project_details');
  detailsCard.appendChild(closeButton);
  const projectDataCard = document.createElement('article');
  projectDataCard.classList.add('projects_main');
  const projectName = document.createElement('h2');
  const projectNameText = document.createTextNode(project.name);
  projectName.appendChild(projectNameText);
  projectDataCard.appendChild(projectName);
  const techList = document.createElement('ul');
  techList.classList.add('project_tech_container_popup');
  project.technologies.forEach((t) => {
    const listItem = document.createElement('li');
    listItem.classList.add('project_tech_item');
    const tech = document.createTextNode(t);
    listItem.appendChild(tech);
    techList.appendChild(listItem);
  })
  projectDataCard.appendChild(techList);
  const imagesContainer = document.createElement('div');
  imagesContainer.classList.add('project_images_container');
  const mainProjectImage = document.createElement('div');
  mainProjectImage.classList.add('main_project_image');
  const backIcon = document.createElement('button');
  backIcon.classList.add('project_navigation_button_left');
  mainProjectImage.appendChild(backIcon);
  const forwardIcon = document.createElement('button');
  forwardIcon.classList.add('project_navigation_button_right');
  mainProjectImage.appendChild(forwardIcon);
  imagesContainer.appendChild(mainProjectImage);
  const imagesCollection = document.createElement('div');
  imagesCollection.classList.add('project_image_collection');
  project.images.forEach((i) => {
    const smallImage = document.createElement('div');
    smallImage.classList.add(`project_small_image${i}`);
    imagesCollection.appendChild(smallImage);
  });
  imagesContainer.appendChild(imagesCollection);
  projectDataCard.appendChild(imagesContainer);
  const projectDescription = document.createElement('p');
  projectDescription.classList.add('projects_popup_text');
  const descriptionText = document.createTextNode(project.description);
  projectDescription.appendChild(descriptionText);
  projectDataCard.appendChild(projectDescription);
  const viewLiveButton = document.createElement('button');
  viewLiveButton.classList.add('reversed_button');
  const viewBtnText = document.createTextNode('See live');
  viewLiveButton.appendChild(viewBtnText);
  const viewBtnIcon = document.createElement('i');
  viewBtnIcon.classList.add('project_live_btn');
  viewLiveButton.appendChild(viewBtnIcon);
  projectDataCard.appendChild(viewLiveButton);
  const viewSourceBtn = document.createElement('button');
  viewSourceBtn.classList.add('reversed_button');
  const viewSourceTxt = document.createTextNode('See source');
  viewSourceBtn.appendChild(viewSourceTxt);
  const viewSourceIcon = document.createElement('i');
  viewSourceIcon.classList.add('project_github_btn');
  viewSourceBtn.appendChild(viewSourceIcon);
  projectDataCard.appendChild(viewSourceBtn);
  detailsCard.appendChild(projectDataCard);
  togleVanishPoint();
}

function onProjectClick(id) {
  const buttonId = id;
  const projectId = buttonId.replace('project_', '');
  const index = parseInt(projectId);
  if (index !== undefined) {
    createProjectDetails(index);
    detailsCard.style.display = 'block';
  }
}
projectsButton.addEventListener('click', onProjectClick, false);

document.body.addEventListener('click', function (event) {
  const id = event.target.id;
  if (id === 'close_project_details') {
    closeDetailsPop();
  }else if (id.includes('project_')) {
    onProjectClick(id);
  }
});