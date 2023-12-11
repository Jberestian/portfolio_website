const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');
const contactForm = document.querySelector('.contact-form');
const submitBtn = document.querySelector('.submit-btn');
const nameInput = document.querySelector('#user_name');
const emailInput = document.querySelector('#user_email');
const messageInput = document.querySelector('#message');

// feedback form function

const publicKey = 'H1Qy3UEI5MYPz9ACY';
const serverId = 'service_9zacn7d';
const templateId = 'template_1rep73i';

// initialize emailjs with public key

emailjs.init(publicKey);

contactForm.addEventListener('submit', e => {
  e.preventDefault;
  submitBtn.innerText = 'Just A Moment...';

  // Get all input values

  const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  //Send the Emails. Add service, template ID and input fields values.

  emailjs.send(serverId, templateId, inputFields);
  then(
    () => {
      submitBtn.innerText = 'Message send succsessfully';

      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    },
    error => {
      console.log(error);
      submitBtn.innerText = 'Something went wrong';
    }
  );
});

function pageTransitions() {
  //Button clicks active class

  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace(
        'active-btn',
        ''
      );
      this.className += ' active-btn';
    });
  }

  //Sections active class

  allSections.addEventListener('click', e => {
    const id = e.target.dataset.id;
    if (id) {
      //removu selected from the other button

      sectBtns.forEach(btn => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');

      //hide other sections

      sections.forEach(section => {
        section.classList.remove('active');
      });
      const element = document.getElementById(id);
      element.classList.add('active');
    }
  });

  //Toggle theme

  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
  });
}

pageTransitions();
