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
  images: ['./src/img/svg/project_image.svg', './src/img/svg/project_image.svg', './src/img/svg/project_image.svg', './src/img/svg/project_image.svg'],
  technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  live_link: '#',
  source_link: '#',
  desktop_data: {
    container: 'project_card_macro',
    details_card: 'project_details_card',
    project_name: ['project_name'],
  },
},
{
  name: 'Bavon Portfolio ',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          beatae ullam dolore hic repellendus ratione dolorum optio sit iure,
          velit consequatur, inventore deserunt, ad fugiat! Ab qui vitae
          laudantium velit tenetur tempore temporibus ex in dolorem nulla! Enim,
          adipisci in!`,
  images: ['./src/img/svg/project_image_1.svg', './src/img/svg/project_image_1.svg', './src/img/svg/project_image_1.svg', './src/img/svg/project_image_1.svg'],
  technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  live_link: '#',
  source_link: '#',
  desktop_data: {
    container: 'project_image_1',
    details_card: 'project_details_card_mini_1',
    project_name: ['project_name', 'project_name_mini'],
  },
},
{
  name: 'Bavon Portfolio ',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          beatae ullam dolore hic repellendus ratione dolorum optio sit iure,
          velit consequatur, inventore deserunt, ad fugiat! Ab qui vitae
          laudantium velit tenetur tempore temporibus ex in dolorem nulla! Enim,
          adipisci in!`,
  images: ['./src/img/svg/project_image_2.svg', './src/img/svg/project_image_2.svg', './src/img/svg/project_image_2.svg', './src/img/svg/project_image_2.svg'],
  technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  live_link: '#',
  source_link: '#',
  desktop_data: {
    container: 'project_image_2',
    details_card: 'project_details_card_mini_2',
    project_name: ['project_name', 'project_name_mini'],
  },
},
{
  name: 'Bavon Portfolio ',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          beatae ullam dolore hic repellendus ratione dolorum optio sit iure,
          velit consequatur, inventore deserunt, ad fugiat! Ab qui vitae
          laudantium velit tenetur tempore temporibus ex in dolorem nulla! Enim,
          adipisci in!`,
  images: ['./src/img/svg/project_image_3.svg', './src/img/svg/project_image_3.svg', './src/img/svg/project_image_3.svg', './src/img/svg/project_image_3.svg'],
  technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  live_link: '#',
  source_link: '#',
  desktop_data: {
    container: 'desktop_image_geometry_4',
    details_card: 'project_details_card_mini_5',
    project_name: ['project_name', 'project_name_mini'],
  },
},
{
  name: 'Bavon Portfolio ',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          beatae ullam dolore hic repellendus ratione dolorum optio sit iure,
          velit consequatur, inventore deserunt, ad fugiat! Ab qui vitae
          laudantium velit tenetur tempore temporibus ex in dolorem nulla! Enim,
          adipisci in!`,
  images: ['./src/img/svg/project_image_4.svg', './src/img/svg/project_image_4.svg', './src/img/svg/project_image_4.svg', './src/img/svg/project_image_4.svg'],
  technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  live_link: '#',
  source_link: '#',
  desktop_data: {
    container: 'project_image_4',
    details_card: 'project_details_card_mini_4',
    project_name: ['project_name', 'project_name_mini'],
  },
},
{
  name: 'Bavon Portfolio ',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          beatae ullam dolore hic repellendus ratione dolorum optio sit iure,
          velit consequatur, inventore deserunt, ad fugiat! Ab qui vitae
          laudantium velit tenetur tempore temporibus ex in dolorem nulla! Enim,
          adipisci in!`,
  images: ['./src/img/svg/project_image_5.svg', './src/img/svg/project_image_5.svg', './src/img/svg/project_image_5.svg', './src/img/svg/project_image_5.svg'],
  technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  live_link: '#',
  source_link: '#',
  desktop_data: {
    container: 'project_image_5',
    details_card: 'project_details_card_mini',
    project_name: ['project_name', 'project_name_mini'],
  },
},
];

const projectImageClass = 'project_image';

function appendProjects() {
  const projectsSection = document.getElementById('mobile_projects');
  for (let i = 0; i < projects.length; i += 1) {
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
    projects[i].technologies.forEach((t) => {
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

function appendDesktopProjects() {
  const projectsSection = document.getElementById('Portfolio');
  const desktopProjectsImagesList = document.getElementById('destop_projects_list');
  for (let i = 0; i < projects.length; i += 1) {
    const projectCard = document.createElement('div');
    projectCard.classList.add(projects[i].desktop_data.container);
    const detailsCard = document.createElement('div');
    detailsCard.classList.add(projects[i].desktop_data.details_card);
    const projectName = document.createElement('h2');
    projectName.classList.add(...projects[i].desktop_data.project_name);
    const projectNameText = document.createTextNode(projects[i].name);
    projectName.appendChild(projectNameText);
    detailsCard.appendChild(projectName);
    const projectTecContainer = document.createElement('div');
    projectTecContainer.classList.add('project_tecs_container');
    const techList = document.createElement('ul');
    techList.classList.add('ul');
    projects[i].technologies.forEach((t) => {
      const techItem = document.createElement('li');
      techItem.classList.add('li');
      const techName = document.createElement('p');
      techName.classList.add('tech_text');
      const techNameText = document.createTextNode(t);
      techName.appendChild(techNameText);
      techItem.appendChild(techName);
      techList.appendChild(techItem);
    });
    projectTecContainer.appendChild(techList);
    detailsCard.appendChild(projectTecContainer);
    const seeProjectBtn = document.createElement('button');
    seeProjectBtn.classList.add('see_project');
    seeProjectBtn.setAttribute('id', `see_desktop_pop_${i}`);
    const btnText = document.createTextNode('See this project');
    seeProjectBtn.appendChild(btnText);
    const btnIcon = document.createElement('i');
    btnIcon.classList.add('arrow_forward');
    seeProjectBtn.appendChild(btnIcon);
    detailsCard.appendChild(seeProjectBtn);
    projectCard.appendChild(detailsCard);
    if (i === 0) {
      projectsSection.appendChild(projectCard);
    } else {
      desktopProjectsImagesList.appendChild(projectCard);
    }
  }
  projectsSection.appendChild(desktopProjectsImagesList);
}

appendProjects();
appendDesktopProjects();
const projectsButton = document.querySelector('.see_project');
const detailsCard = document.getElementById('view_project');
const vanishPoint = document.querySelectorAll('.can_dissapear');

function togleVanishPoint() {
  vanishPoint.forEach((e) => {
    e.classList.toggle('has_dissapeared');
  });
}

function closeDetailsPop() {
  detailsCard.style.display = 'none';
  togleVanishPoint();
  detailsCard.replaceChildren();
}

function createProjectDetails(id, desktop) {
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
  });
  projectDataCard.appendChild(techList);
  const imagesContainer = document.createElement('div');
  imagesContainer.classList.add('project_images_container');
  const mainProjectImage = document.createElement('div');
  mainProjectImage.classList.add('main_project_image');
  mainProjectImage.style.backgroundImage = `url(${project.images[0]})`;
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
    smallImage.classList.add('project_small_image');
    smallImage.style.backgroundImage = `url(${i})`;
    imagesCollection.appendChild(smallImage);
  });
  imagesContainer.appendChild(imagesCollection);
  projectDataCard.appendChild(imagesContainer);
  const projectDescription = document.createElement('p');
  projectDescription.classList.add('projects_popup_text');
  const descriptionText = document.createTextNode(project.description);
  projectDescription.appendChild(descriptionText);
  projectDataCard.appendChild(projectDescription);
  const btnContainer = document.createElement('div');
  btnContainer.classList.add('pop_up_btn_container');
  const viewLiveButton = document.createElement('button');
  viewLiveButton.classList.add('reversed_button');
  const viewBtnText = document.createTextNode('See live');
  viewLiveButton.appendChild(viewBtnText);
  const viewBtnIcon = document.createElement('i');
  viewBtnIcon.classList.add('project_live_btn');
  viewLiveButton.appendChild(viewBtnIcon);
  btnContainer.appendChild(viewLiveButton);
  const viewSourceBtn = document.createElement('button');
  viewSourceBtn.classList.add('reversed_button');
  const viewSourceTxt = document.createTextNode('See source');
  viewSourceBtn.appendChild(viewSourceTxt);
  const viewSourceIcon = document.createElement('i');
  viewSourceIcon.classList.add('project_github_btn');
  viewSourceBtn.appendChild(viewSourceIcon);
  btnContainer.appendChild(viewSourceBtn);
  projectDataCard.appendChild(btnContainer);
  if (desktop) {
    const controlsContainer = document.createElement('div');
    controlsContainer.classList.add('project_view_controll_container');
    const prevIconbtn = document.createElement('div');
    prevIconbtn.classList.add('icon_btn');
    const previousBtn = document.createElement('button');
    previousBtn.classList.add('project_contols_btn');
    const previousBtnIcon = document.createElement('i');
    previousBtnIcon.classList.add('back_icon');
    prevIconbtn.appendChild(previousBtnIcon);
    const previousBtnText = document.createTextNode('Previous project');
    previousBtn.appendChild(previousBtnText);
    prevIconbtn.appendChild(previousBtn);
    controlsContainer.appendChild(prevIconbtn);
    const nextIconBtn = document.createElement('div');
    nextIconBtn.classList.add('icon_btn');
    const nextBtn = document.createElement('button');
    nextBtn.classList.add('project_contols_btn');
    const nxtBtnText = document.createTextNode('Next project');
    nextBtn.appendChild(nxtBtnText);
    nextIconBtn.appendChild(nextBtn);
    const nxtBtnIcon = document.createElement('i');
    nxtBtnIcon.classList.add('forward_icon');
    nextIconBtn.appendChild(nxtBtnIcon);
    controlsContainer.appendChild(nextIconBtn);
    projectDataCard.appendChild(controlsContainer);
  }
  detailsCard.appendChild(projectDataCard);
  togleVanishPoint();
}

function onProjectClick(id) {
  const buttonId = id;
  const projectId = buttonId.replace('project_', '').replace('see_desktop_pop_', '');
  const index = parseInt(projectId, 10);
  if (index !== undefined) {
    createProjectDetails(index, id.includes('see_desktop_pop_'));
    detailsCard.style.display = 'block';
  }
}
projectsButton.addEventListener('click', onProjectClick, false);

function listenOnBody(event) {
  if (event.target.id === 'close_project_details') {
    closeDetailsPop();
  } else if (event.target.id.includes('project_') || event.target.id.includes('see_desktop_pop_')) {
    onProjectClick(event.target.id);
  }
}
document.body.addEventListener('click', listenOnBody);
let email = document.getElementById('email');
const form = document.getElementById('contact_form');
const errorContainer = document.getElementById('error_msg');
function isLowercase(e) {
  if (e.toLowerCase() === e) {
    return true;
  } else {
    return false
  };
}
function alertValidation() {
  const validity = email.validity;
  if (validity.valueMissing) {
    errorContainer.textContent = 'Please provide an email address';
  } else if (validity.typeMismatch) {
    errorContainer.textContent = 'Please provide a valid address';
  } else if (!isLowercase(email.value)) {
    errorContainer.textContent = 'Your email address should be in lowercase';
  }
  errorContainer.style.padding = '4px 0';
}
function hideValidation() {
  errorContainer.style.padding = '0';
  errorContainer.textContent = '';
}
function validateEmail(e) {
  const emailValue = email.value;
  if (!isLowercase(emailValue)) {
    alertValidation();
    e.preventDefault();
  } else {
    hideValidation();
  }
}
function validateSubmission(e) {
  const emailValue = email.value;
  if (!isLowercase(emailValue)) {
    alertValidation();
    e.preventDefault();
  } else {
    hideValidation();
  }
}
email.addEventListener('input', validateEmail);
form.addEventListener('submit', validateSubmission);
