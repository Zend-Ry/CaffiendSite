import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { CarouselData, carouselList } from "../Data/carousel-data.js";
import { TeamMemberData, teamMembers } from "../Data/team-member-data.js";

import '../styles/landing.css';
import '../styles/team-member.css';

// ----------------- Carousel -----------------

function CreateCarousel(props: CarouselData[], start: number, end: number) {
    const children = [];
        for (let i = start; i < end; i++) {
            children.push(
                createElement('div', {className: 'carousel-item'},
                    createElement('img', {src: props[i].imageUrl, alt: "image of " + props[i].title}),
                )
            );
        }
        let slide = createElement('div', {className: 'carousel-slide'}, children);

        // Return two slides to allow for wrapping
        return createElement('div', {className: 'wrapper'}, slide, slide);
}

let carouselA = document.createElement('div');
let rootA = createRoot(carouselA);
rootA.render(CreateCarousel(carouselList, 0, 5));
// @ts-ignore: Object is possibly 'null'.
document.getElementById('carouselA')!.appendChild(carouselA);
let carouselB = document.createElement('div');
let rootB = createRoot(carouselB);
rootB.render(CreateCarousel(carouselList, 0, 5));
// @ts-ignore: Object is possibly 'null'.
document.getElementById('carouselB')!.appendChild(carouselB);
let carouselC = document.createElement('div');
let rootC = createRoot(carouselC);
rootC.render(CreateCarousel(carouselList, 0, 5));
// @ts-ignore: Object is possibly 'null'.
document.getElementById('carouselC')!.appendChild(carouselC);


// Slowly scroll the carousel to the right allowing it to go off-screen and wrap back around

// ----------------- Navigation -----------------

document.querySelector<HTMLDivElement>('#navigation')!.innerHTML = `
<div id="navigation" class="hf-sizing">
    <div class="content">
            <div>
                <img id="logo" src="/assets/Logo-Caffiend-Desktop.png" alt="Caffiend Games logo"/>
            </div>
            <div id="nav">
                <a class="nav-link" href="#about-us">About Us</a>
                <a class="nav-link" href="#games">Games</a>
                <a class="nav-link" href="#download-scroll-point">Download</a>
                <a class="nav-link" href="#gallery">Gallery</a>
                <a class="nav-link" href="#team">Team</a>
            </div>
    </div>
</div>
`;

// ----------------- Team Members -----------------

function TeamMembers(props: TeamMemberData) {
    return createElement(
        'div',
        { className: 'team-member' },
            createElement('img', { src: props.imageUrl, alt: "image of " + props.name }),
            createElement('div', { className: 'info' },
                createElement('h2', null, props.name),
                createElement('h3', null, props.title),
            ),
            createElement('div', { className: 'socials' },
                props.website ? createElement('a', {
                    href: props.website,
                    target: "_blank",
                    className: 'Website',
                }, createElement('i', { className: 'fa-solid fa-globe' })) : null,
                props.linkedin ? createElement('a', {
                    href: props.linkedin,
                    target: "_blank",
                    className: 'LinkedIn'
                }, createElement('i', { className: 'fa-brands fa-linkedin-in' })) : null,
                props.instagram ? createElement('a', {
                    href: props.instagram,
                    target: "_blank",
                    className: 'Instagram'
                }, createElement('i', { className: 'fa-brands fa-instagram' })) : null,
                props.github ? createElement('a', {
                    href: props.github,
                    target: "_blank",
                    className: 'GitHub'
                }, createElement('i', { className: 'fa-brands fa-github' })) : null,
                props.artStation ? createElement('a', {
                    href: props.artStation,
                    target: "_blank",
                    className: 'ArtStation'
                }, createElement('i', { className: 'fa-brands fa-artstation' })) : null
            ));
}

// Contacts
for (let i = 0; i <= 2; i++) {
    let teamMember = document.createElement('div');
    let root = createRoot(teamMember);
    root.render(TeamMembers(teamMembers[i]));
    // @ts-ignore: Object is possibly 'null'.
    document.getElementById('team-contacts').appendChild(teamMember);
}
// Artists
for (let i = 3; i <= 5; i++) {
    let teamMember = document.createElement('div');
    let root = createRoot(teamMember);
    root.render(TeamMembers(teamMembers[i]));
    // @ts-ignore: Object is possibly 'null'.
    document.getElementById('team-artists').appendChild(teamMember);
}
// Programmers part 1
for (let i = 6; i <= 8; i++) {
    let teamMember = document.createElement('div');
    let root = createRoot(teamMember);
    root.render(TeamMembers(teamMembers[i]));
    // @ts-ignore: Object is possibly 'null'.
    document.getElementById('team-programmers-1').appendChild(teamMember);
}
// Programmers part 2
for (let i = 9; i <= teamMembers.length; i++) {
    let teamMember = document.createElement('div');
    let root = createRoot(teamMember);
    root.render(TeamMembers(teamMembers[i]));
    // @ts-ignore: Object is possibly 'null'.
    document.getElementById('team-programmers-2').appendChild(teamMember);
}
