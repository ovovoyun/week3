const pageLink = document.querySelectorAll(".page-link");
const prevBtn = document.querySelector(".page-preBtn");
const nextBtn = document.querySelector(".page-nextBtn");

let currentPage = 1;

function updatePage() {
    pageLink.forEach(link => link.classList.remove("page-active"));
    pageLink[currentPage - 1].classList.add("page-active");
}

updatePage();

prevBtn.addEventListener("click", function() {
    if (currentPage > 1) {
        currentPage--;
        updatePage();
    }
});

nextBtn.addEventListener("click", function() {
    if (currentPage < pageLink.length) {
        currentPage++;
        updatePage();
    }
});

pageLink.forEach((link, index) => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        currentPage = index + 1;
        updatePage();
    });
});