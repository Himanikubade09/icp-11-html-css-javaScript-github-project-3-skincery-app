const name = prompt("Enter your name: ");
const agelimit = prompt("Enter your age: ");

if(agelimit === null || agelimit === "")
{
    alert(`Hii ${name} ! You didn't enter your age.`);
}
else if (agelimit < 18)
{
    alert(`Hii ${name}  your age is  ${agelimit} ! You are not allowed to use this product.`);
}
else{
    alert(`Hii ${name}  your age is  ${agelimit}. You are allowed to use this product`);
}

  window.addEventListener('load', () => {
      document.getElementById('tagline').classList.add('visible');
    });

    const slides = document.querySelectorAll('.slide');
    const bgColors = ["#fce4ec", "#e3f2fd", "#f3e5f5"]; 

    let index = 0;

    function autoSlide() {
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
    document.body.style.backgroundColor = bgColors[index];
    }

    setInterval(autoSlide, 2000); 