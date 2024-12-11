import { createElement } from 'react';
import ReactDOM from 'react-dom/client';
import { teamMembers } from "../Data/team-member-data.ts";
import '../styles/team-member.scss';
function TeamMembers(props) {
    return createElement('div', { className: 'team-member' }, createElement('img', { src: props.imageUrl, alt: "image of " + props.name }), createElement('div', { className: 'info' }, createElement('h2', null, props.name), createElement('h3', null, props.title)), createElement('div', { className: 'socials' }, props.website ? createElement('a', {
        href: props.website,
        target: "_blank",
        className: 'Website'
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
for (let i = 0; i <= 3; i++) {
    let teamMember = document.createElement('div' + i);
    let root = ReactDOM.createRoot(teamMember);
    root.render(TeamMembers(teamMembers[i]));
    document.getElementById('team-contacts').appendChild(teamMember); // This is not working, I don't know why
}
// Artists
for (let i = 4; i <= 6; i++) {
    let teamMember = document.createElement('div' + i);
    let root = ReactDOM.createRoot(teamMember);
    root.render(TeamMembers(teamMembers[i]));
    document.getElementById('team-artists').appendChild(teamMember); // This is not working, I don't know why
}
// Programmers
for (let i = 7; i <= teamMembers.length; i++) {
    let teamMember = document.createElement('div' + i);
    let root = ReactDOM.createRoot(teamMember);
    root.render(TeamMembers(teamMembers[i]));
    document.getElementById('team-programmers').appendChild(teamMember); // This is not working, I don't know why
}
