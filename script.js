
document.addEventListener("DOMContentLoaded", () => {



    const links = document.querySelectorAll(".navbar a");
    const container = document.getElementById("cc");

    let page = 0;

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = Number.parseInt(link.getAttribute("data-target"));
            page = targetId;
            container.style.setProperty("--page", page);
        });
    });
});