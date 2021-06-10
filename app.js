const product = document.querySelectorAll(".imgs");
const modal = document.querySelector(".pop_up");
const close = document.querySelector(".times");
const modalImg = document.querySelector(".popup__img");

product.forEach(function (items) {
    const productImg = items.querySelector(".product__img").getAttribute('src');
    items.addEventListener("click", (e) => {
        modal.style.display = "block";
        modalImg.setAttribute('src', productImg);
    })
})

close.addEventListener('click', () => {
    modal.style.display = "none";
});

function closeBtn () {
    modal.style.display = "none";
}