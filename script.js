const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }));
}

document.querySelector('#year').textContent = new Date().getFullYear();

const cellProfiles = {
  mechanical: {
    title: 'Mechanical',
    members: [
      ['HT', 'Hamza Tawfiq', 'Mechanical cell'],
      ['SZ', 'Saad Zakaria', 'Mechanical cell'],
      ['TM', 'Taous Med Amir', 'Mechanical cell'],
      ['YS', 'Yahya Sarsif', 'Mechanical cell'],
      ['IR', 'Idriss Rhondali', 'Mechanical cell'],
      ['KB', 'Karim Bella', 'Mechanical cell']
    ]
  },
  electrical: {
    title: 'Electrical',
    members: [
      ['YB', 'Yahya Behate', 'Electrical cell'],
      ['SI', 'Saad Imssaadane', 'Electrical cell'],
      ['AB', 'Akram Boulboul', 'Electrical cell']
    ]
  },
  software: {
    title: 'Software',
    members: [
      ['AS', 'Amine Sabbouri', 'Software cell'],
      ['MB', 'Malak Benezzi', 'Software cell'],
      ['SA', 'Safouane Aittaleb', 'Software cell'],
      ['ML', 'Mohamed Louki', 'Software cell']
    ]
  },
  outreach: {
    title: 'Outreach',
    members: [
      ['RB', 'Rokaya EL Bouhi', 'Outreach cell'],
      ['YH', 'Youssra Hanafi', 'Outreach cell'],
      ['MC', 'Meriem Coco', 'Outreach cell'],
      ['RD', 'Raziq Douaa', 'Outreach cell']
    ]
  }
};

const dialog = document.querySelector('.cell-dialog');
const dialogTitle = document.querySelector('#dialog-title');
const dialogMembers = document.querySelector('#dialog-members');

document.querySelectorAll('.cell-open').forEach(button => {
  button.addEventListener('click', () => {
    const cell = cellProfiles[button.dataset.cell];
    if (!cell || !dialog) return;
    dialogTitle.innerHTML = `${cell.title} <em>cell.</em>`;
    dialogMembers.replaceChildren();
    cell.members.forEach(([initials, name, role]) => {
      const row = document.createElement('article');
      row.className = 'dialog-member';
      const avatar = document.createElement('div');
      avatar.className = 'dialog-avatar';
      avatar.textContent = initials;
      const info = document.createElement('div');
      const heading = document.createElement('h3');
      heading.textContent = name;
      const description = document.createElement('p');
      description.textContent = role;
      info.append(heading, description);
      const badge = document.createElement('span');
      badge.textContent = 'PROFILE';
      row.append(avatar, info, badge);
      dialogMembers.append(row);
    });
    dialog.showModal();
  });
});

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) dialog.close();
});
