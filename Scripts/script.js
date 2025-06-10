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