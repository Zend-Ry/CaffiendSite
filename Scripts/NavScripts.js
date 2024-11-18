/*#region ScrollTop*/
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        document.getElementById("scroll-to-top").style.right= "30px";
    } else {
        document.getElementById("scroll-to-top").style.right = "-100px";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
/*#endregion*/

/*#region NavHamburger*/
document.querySelectorAll(".menu a").forEach((link) => {
    link.addEventListener("click",() => {
        scrollable();
    });
});

function notScrollable() {
    document.getElementById("menu-toggle").checked = true;
    document.body.classList.add("hide");
}

function scrollable() {
    document.getElementById("menu-toggle").checked = false;
    document.body.classList.remove("hide");
}

function checkState(element) {
    if (element.checked) {
        notScrollable();
    } else {
        scrollable();
    }
}
/*#endregion*/