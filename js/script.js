let navbar_1 = document.querySelector('.navbar_1');
let navbar_2 = document.querySelector('.navbar_2');
document.querySelector('#menu-btn').onclick = () => {
    navbar_1.classList.toggle('active');
    navbar_2.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
};

let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar_1.classList.remove('active');
    navbar_2.classList.remove('active');
    cartItem.classList.remove('active');
};

let cartItem = document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    navbar_1.classList.remove('active');
    navbar_2.classList.remove('active');
    searchForm.classList.remove('active');
};

let searchInput = document.querySelector('#search-box');
searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
                event.preventDefault();            
        searchForm.classList.remove('active');
    }
});

function closeAll() {
    navbar_1.classList.remove('active');
    navbar_2.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

document.addEventListener('click', function(event) {    
    if (!navbar_1.contains(event.target) &&
        !navbar_2.contains(event.target) &&
        !searchForm.contains(event.target) &&
        !cartItem.contains(event.target) &&
        !event.target.closest('#menu-btn') && 
        !event.target.closest('#search-btn') && 
        !event.target.closest('#cart-btn')) { 
        closeAll();
    }
});

document.querySelector('#menu-btn').addEventListener('click', function(event) {
    event.stopPropagation(); 
});

document.querySelector('#search-btn').addEventListener('click', function(event) {
    event.stopPropagation(); 
});

document.querySelector('#cart-btn').addEventListener('click', function(event) {
    event.stopPropagation(); 
});

const boxes = document.querySelectorAll('.box');

        boxes.forEach(box => {
            fetch('https://randomuser.me/api')
                .then(response => response.json())
                .then(data => {
                    const userImage = data.results[0].picture.large;
                    const userName = `${data.results[0].name.first} ${data.results[0].name.last}`;
                    box.querySelector('.user').src = userImage;
                    box.querySelector('.name').textContent = userName;
                })
                .catch(error => console.error('Error fetching user:', error));
        });
