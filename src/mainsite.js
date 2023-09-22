function createHeader() {
    const header = document.createElement('header');
    const pageTitle = document.createElement('h1');

    pageTitle.textContent = "Paco's Tacos";

    header.appendChild(pageTitle);
    // header.appendChild(createNavbar());

    return header;
}

function createNavbar() {
    const nav = document.createElement('nav');
    const navlist = document.createElement('ul');
    const home = createNavlistEntry("Home");
    const menu = createNavlistEntry("Menu");
    const contact = createNavlistEntry("Contact");

    navlist.appendChild(home);
    navlist.appendChild(menu);
    navlist.appendChild(contact);
    nav.appendChild(navlist);

    return nav;
}

function createNavlistEntry(text) {
    const entry = document.createElement('li');
    const paragraph = document.createElement('p');

    paragraph.textContent = text;

    entry.appendChild(paragraph);

    return entry
}

function initializeMainsite() {
    const mainsite = document.getElementById('content');

    mainsite.appendChild(createHeader());

    return mainsite;
}

export default initializeMainsite;