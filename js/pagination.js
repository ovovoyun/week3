const pageLink = document.querySelectorAll(".page-link");
const prevBtn = document.querySelector(".page-preBtn");
const nextBtn = document.querySelector(".page-nextBtn");

let currentPage = 1;

//移除原先頁數樣式，(陣列從0開始須-1)新頁數顯示active樣式
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
    link.addEventListener("click", function(e) {
        e.preventDefault();
        currentPage = index + 1;
        updatePage();
    });
});