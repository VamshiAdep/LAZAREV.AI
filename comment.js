 // imgmove.forEach(function(img) {
  //   img.style.transform = 'scale(0)'; // Ensure initial scale is 0
  
  //   document.querySelector('.sec-right').addEventListener('mousemove', function(event) {
  //     img.style.opacity = 1;
  //     img.style.transform = 'scale(1)'; // Scale the image to make it visible
  //     const rect = this.getBoundingClientRect();
  //     const x = event.clientX - rect.left - (img.clientWidth / 2);
  //     const y = event.clientY - rect.top - (img.clientHeight / 2);
  //     img.style.transform = `translate(${x}px, ${y}px) scale(1)`;
  //   });
  
  //   document.querySelector('.sec-right').addEventListener('mouseleave', function() {
  //     img.style.opacity = 0;
  //     img.style.transform = 'scale(0)'; // Scale the image back to 0 on mouse leave
  //   });
  // });


//   <img class="imgmove"
//   src="https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65c5011d306a52274ebea027_cover.webp"
//   alt=""
// />

 /* .imgmove  img {
  height: 50vw;
  width: 5vw;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  transition: opacity 0.3s ease, transform 0.023s ease, scale 0.3s ease;
  opacity: 0;
  z-index: 1;
  transform: scale(0);
}*/