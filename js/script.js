const imageDisplay = document.querySelector('.image-display');
const thumbImages = document.querySelectorAll('.thumb-image');

const shadow = document.querySelector('.shadow');
const imagePreview = document.querySelector('.imagePreview');
const closePreview = document.querySelector('#closePreview');

let amount = 0;

imageDisplay.addEventListener('click', () => {
    shadow.classList.remove('hidden');
});

closePreview.addEventListener('click', () => {
    shadow.classList.add('hidden');
});

thumbImages.forEach(thumb => {
    thumb.addEventListener('click', () => {
        thumbImages.forEach(aux => {
            aux.classList.remove('sel');
        });

        imageDisplay.src = `./images/image-product-${thumb.alt}.jpg`;
        imagePreview.src = `./images/image-product-${thumb.alt}.jpg`;
        thumb.classList.add('sel');
    })
});

function toggleAmount(value) {
    if (!value && amount > 0) {
        amount--;
    } else if (value) amount++;
    document.querySelector('#amount').innerHTML = amount;
}