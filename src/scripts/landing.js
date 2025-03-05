import { createElement } from "https://cdn.jsdelivr.net/npm/react@16.13.1/umd/react.production.min.j";
import { createRoot } from "https://cdn.jsdelivr.net/npm/react-dom@16.13.1/umd/react-dom.production.min.js";
import { carouselList } from "../Data/carousel-data.js";
import { teamMembers } from "../Data/team-member-data.js";
import '../styles/landing.css';
import '../styles/team-member.css';
// ----------------- Carousel -----------------
function CreateCarousel(props, start, end) {
    var children = [];
    for (var i = start; i < end; i++) {
        children.push(createElement('div', { className: 'carousel-item' }, createElement('img', { src: props[i].imageUrl, alt: "image of " + props[i].title })));
    }
    var slide = createElement('div', { className: 'carousel-slide' }, children);
    // Return two slides to allow for wrapping
    return createElement('div', { className: 'wrapper' }, slide, slide);
}
var carouselA = document.createElement('div');
var rootA = createRoot(carouselA);
rootA.render(CreateCarousel(carouselList, 0, 5));
// @ts-ignore: Object is possibly 'null'.
document.getElementById('carouselA').appendChild(carouselA);
var carouselB = document.createElement('div');
var rootB = createRoot(carouselB);
rootB.render(CreateCarousel(carouselList, 0, 5));
// @ts-ignore: Object is possibly 'null'.
document.getElementById('carouselB').appendChild(carouselB);
var carouselC = document.createElement('div');
var rootC = createRoot(carouselC);
rootC.render(CreateCarousel(carouselList, 0, 5));
// @ts-ignore: Object is possibly 'null'.
document.getElementById('carouselC').appendChild(carouselC);
// Slowly scroll the carousel to the right allowing it to go off-screen and wrap back around
// ----------------- Navigation -----------------
document.querySelector('#navigation').innerHTML = "\n<div id=\"navigation\" class=\"hf-sizing\">\n    <div class=\"content\">\n            <div>\n                <img id=\"logo\" src=\"/assets/Logo-Caffiend-Desktop.png\" alt=\"Caffiend Games logo\"/>\n            </div>\n            <div id=\"nav\">\n                <a class=\"nav-link\" href=\"#about-us\">About Us</a>\n                <a class=\"nav-link\" href=\"#games\">Games</a>\n                <a class=\"nav-link\" href=\"#download-scroll-point\">Download</a>\n                <a class=\"nav-link\" href=\"#gallery\">Gallery</a>\n                <a class=\"nav-link\" href=\"#team\">Team</a>\n            </div>\n    </div>\n</div>\n";
// ----------------- Team Members -----------------
function TeamMembers(props) {
    return createElement('div', { className: 'team-member' }, createElement('img', { src: props.imageUrl, alt: "image of " + props.name }), createElement('div', { className: 'info' }, createElement('h2', null, props.name), createElement('h3', null, props.title)), createElement('div', { className: 'socials' }, props.website ? createElement('a', {
        href: props.website,
        target: "_blank",
        className: 'Website',
    }, createElement('i', { className: 'fa-solid fa-globe' })) : null, props.linkedin ? createElement('a', {
        href: props.linkedin,
        target: "_blank",
        className: 'LinkedIn'
    }, createElement('i', { className: 'fa-brands fa-linkedin-in' })) : null, props.instagram ? createElement('a', {
        href: props.instagram,
        target: "_blank",
        className: 'Instagram'
    }, createElement('i', { className: 'fa-brands fa-instagram' })) : null, props.github ? createElement('a', {
        href: props.github,
        target: "_blank",
        className: 'GitHub'
    }, createElement('i', { className: 'fa-brands fa-github' })) : null, props.artStation ? createElement('a', {
        href: props.artStation,
        target: "_blank",
        className: 'ArtStation'
    }, createElement('i', { className: 'fa-brands fa-artstation' })) : null));
}
// Contacts
for (var i = 0; i <= 2; i++) {
    var teamMember = document.createElement('div');
    var root = createRoot(teamMember);
    root.render(TeamMembers(teamMembers[i]));
    // @ts-ignore: Object is possibly 'null'.
    document.getElementById('team-contacts').appendChild(teamMember);
}
// Artists
for (var i = 3; i <= 5; i++) {
    var teamMember = document.createElement('div');
    var root = createRoot(teamMember);
    root.render(TeamMembers(teamMembers[i]));
    // @ts-ignore: Object is possibly 'null'.
    document.getElementById('team-artists').appendChild(teamMember);
}
// Programmers part 1
for (var i = 6; i <= 8; i++) {
    var teamMember = document.createElement('div');
    var root = createRoot(teamMember);
    root.render(TeamMembers(teamMembers[i]));
    // @ts-ignore: Object is possibly 'null'.
    document.getElementById('team-programmers-1').appendChild(teamMember);
}
// Programmers part 2
for (var i = 9; i <= teamMembers.length; i++) {
    var teamMember = document.createElement('div');
    var root = createRoot(teamMember);
    root.render(TeamMembers(teamMembers[i]));
    // @ts-ignore: Object is possibly 'null'.
    document.getElementById('team-programmers-2').appendChild(teamMember);
}
//# sourceMappingURL=landing.js.map