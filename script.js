// Select all buttons in the cards
const cartButtons = document.querySelectorAll('.card button');

// Create an empty cart array
let cart = [];

// Function to handle adding product to cart
cartButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const card = event.target.closest('.card'); // Find the parent card

    // Extract product details
    const productName = card.querySelector('h1').textContent;
    const productPrice = card.querySelector('p').textContent;
    const productImage = card.querySelector('img').src;

    // Create a product object
    const product = {
      name: productName,
      price: productPrice,
      image: productImage
    };

    // Add product to the cart array
    cart.push(product);
    alert(`${productName} added to cart!`);

    // Log the current cart (for testing)
    console.log(cart);
  });
});

const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;
nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);
});
prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

// Get the "Coming Soon" button
const comingSoonBtn = document.querySelector('#comingSoonBtn');

// Products data (Men's wear and Headphones)
const comingSoonProducts = [
  { category: 'Men\'s Wear', name: 'Casual Shirt', price: '$50.00', image: 'https://via.placeholder.com/150' },
  { category: 'Men\'s Wear', name: 'Jeans', price: '$60.00', image: 'https://via.placeholder.com/150' },
  { category: 'Men\'s Wear', name: 'Jacket', price: '$100.00', image: 'https://via.placeholder.com/150' },
  { category: 'Headphones', name: 'Wireless Headphone', price: '$150.00', image: 'https://via.placeholder.com/150' },
  { category: 'Headphones', name: 'Noise Cancelling Headphone', price: '$200.00', image: 'https://via.placeholder.com/150' }
];

// Function to show coming soon products
comingSoonBtn.addEventListener('click', () => {
  // Check if the coming soon section is already visible
  const existingSection = document.querySelector('#comingSoonContainer');
  if (existingSection && existingSection.innerHTML !== '') return; // If already exists, do nothing

  // Loop through the products data and create product elements
  comingSoonProducts.forEach(product => {
    // Create product div
    const productDiv = document.createElement('div');
    productDiv.style.border = '1px solid #ccc';
    productDiv.style.padding = '10px';
    productDiv.style.margin = '10px';
    productDiv.style.display = 'inline-block';
    productDiv.style.width = '200px';

    // Product image
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.name;
    img.style.width = '100%';

    // Product details
    const productName = document.createElement('h3');
    productName.textContent = product.name;

    const productCategory = document.createElement('p');
    productCategory.textContent = `Category: ${product.category}`;

    const productPrice = document.createElement('p');
    productPrice.textContent = `Price: ${product.price}`;

    // Append product details to the div
    productDiv.appendChild(img);
    productDiv.appendChild(productName);
    productDiv.appendChild(productCategory);
    productDiv.appendChild(productPrice);

    // Append the product div to the container
    document.querySelector('#comingSoonContainer').appendChild(productDiv);
  });
});
