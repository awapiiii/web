const images = [
    'https://i.pinimg.com/736x/40/1c/54/401c541931fe54d99cdba80594123852.jpg',  
    'https://i.pinimg.com/736x/d2/21/68/d221687d668a11cb454a8ac7461f7709.jpg',  
    'https://i.pinimg.com/736x/07/03/c7/0703c771ceecfd6142ce0ca726c056e7.jpg'   
];

let currentIndex = 0;

function changeImage(direction) {
if (direction === 'previous') {
    currentIndex = (currentIndex - 1 + images.length) % images.length; 
} else if (direction === 'next') {
    currentIndex = (currentIndex + 1) % images.length; 
}

document.getElementById('collect-image').src = images[currentIndex];
}
  