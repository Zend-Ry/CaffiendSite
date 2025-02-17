"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
var carousel_data_ts_1 = require("../Data/carousel-data.ts");
var team_member_data_ts_1 = require("../Data/team-member-data.ts");
require("../styles/landing.css");
require("../styles/team-member.css");
function CreateCarousel(props, start, end) {
    var children = [];
    for (var i = start; i < end; i++) {
        children.push((0, react_1.createElement)('div', { className: 'carousel-item' }, (0, react_1.createElement)('img', { src: props[i].imageUrl, alt: "image of " + props[i].title }), (0, react_1.createElement)('div', { className: 'carousel-info' }, (0, react_1.createElement)('h2', null, props[i].title), (0, react_1.createElement)('p', null, props[i].description))));
    }
    return (0, react_1.createElement)('div', { className: 'carousel' }, children);
}
var carouselA = document.createElement('div');
var rootA = (0, client_1.createRoot)(carouselA);
rootA.render(CreateCarousel(carousel_data_ts_1.carouselList, 0, 1));
// @ts-ignore: Object is possibly 'null'.
document.getElementById('carouselA').appendChild(carouselA);
document.querySelector('#navigation').innerHTML = "\n<div id=\"navigation\" class=\"hf-sizing\">\n    <div class=\"content\">\n            <div>\n                <img id=\"logo\" src=\"../src/assets/Logo-Caffiend-Desktop.png\" alt=\"Caffiend Games logo\"/>\n            </div>\n            <div id=\"nav\">\n                <a class=\"nav-link\" href=\"#about-us\">About Us</a>\n                <a class=\"nav-link\" href=\"#games\">Games</a>\n                <a class=\"nav-link\" href=\"#download-scroll-point\">Download</a>\n                <a class=\"nav-link\" href=\"#gallery\">Gallery</a>\n                <a class=\"nav-link\" href=\"#team\">Team</a>\n            </div>\n    </div>\n</div>\n";
// ----------------- Team Members -----------------
function TeamMembers(props) {
    return (0, react_1.createElement)('div', { className: 'team-member' }, (0, react_1.createElement)('a', { href: '#' + props.name }, (0, react_1.createElement)('img', { src: props.imageUrl, alt: "image of " + props.name }), (0, react_1.createElement)('div', { className: 'info' }, (0, react_1.createElement)('h2', null, props.name), (0, react_1.createElement)('h3', null, props.title)), (0, react_1.createElement)('div', { className: 'socials' }, props.website ? (0, react_1.createElement)('a', {
        href: props.website,
        target: "_blank",
        className: 'Website',
    }, (0, react_1.createElement)('i', { className: 'fa-solid fa-globe' })) : null, props.linkedin ? (0, react_1.createElement)('a', {
        href: props.linkedin,
        target: "_blank",
        className: 'LinkedIn'
    }, (0, react_1.createElement)('i', { className: 'fa-brands fa-linkedin-in' })) : null, props.instagram ? (0, react_1.createElement)('a', {
        href: props.instagram,
        target: "_blank",
        className: 'Instagram'
    }, (0, react_1.createElement)('i', { className: 'fa-brands fa-instagram' })) : null, props.github ? (0, react_1.createElement)('a', {
        href: props.github,
        target: "_blank",
        className: 'GitHub'
    }, (0, react_1.createElement)('i', { className: 'fa-brands fa-github' })) : null, props.artStation ? (0, react_1.createElement)('a', {
        href: props.artStation,
        target: "_blank",
        className: 'ArtStation'
    }, (0, react_1.createElement)('i', { className: 'fa-brands fa-artstation' })) : null)));
}
// Contacts
for (var i = 0; i <= 3; i++) {
    var teamMember = document.createElement('div');
    var root = (0, client_1.createRoot)(teamMember);
    root.render(TeamMembers(team_member_data_ts_1.teamMembers[i]));
    // @ts-ignore: Object is possibly 'null'.
    document.getElementById('team-contacts').appendChild(teamMember);
}
// Artists
for (var i = 4; i <= 6; i++) {
    var teamMember = document.createElement('div');
    var root = (0, client_1.createRoot)(teamMember);
    root.render(TeamMembers(team_member_data_ts_1.teamMembers[i]));
    /*if (teamMembers[i].name === 'Jada Gordon') {
        // Create a #href link to the team member's location in the page
        createElement('a', { href: '#' + teamMembers[i].name });
    }*/
    // @ts-ignore: Object is possibly 'null'.
    document.getElementById('team-artists').appendChild(teamMember);
}
// Programmers
for (var i = 7; i <= team_member_data_ts_1.teamMembers.length; i++) {
    var teamMember = document.createElement('div');
    var root = (0, client_1.createRoot)(teamMember);
    root.render(TeamMembers(team_member_data_ts_1.teamMembers[i]));
    // @ts-ignore: Object is possibly 'null'.
    document.getElementById('team-programmers').appendChild(teamMember);
}
