import '../styles/debug.css'
import '../styles/landing.scss'

document.querySelector<HTMLDivElement>('#navigation')!.innerHTML = `
<div id="navigation" class="hf-sizing">
    <div class="content">
            <div id="logo">
                <img src="./src/assets/Logo-Caffiend-Desktop.png" alt="Caffiend Games logo"/>
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
`

document.querySelector<HTMLDivElement>('#toggle-modes')!.innerHTML = `

`