// ✅mouseover and mouseout
// let abcd = document.querySelector("#abcd");
// abcd.addEventListener("mouseover", (e) => {
//   abcd.style.backgroundColor = "yellow";
// });
// abcd.addEventListener("mouseout", (e) => {
//   abcd.style.backgroundColor = "red";
// });

// ✅To put listener on all over the screen we use window object
window.addEventListener("mousemove", (e) => {
  console.log(e.clientX, e.clientY);
  abcd.style.top = e.clientY + "px"
  abcd.style.left = e.clientX + "px"
});

// line-through
let ul = document.querySelector("ul")
ul.addEventListener("click",(e)=>{
  e.target.style.textDecoration = "line-through"
})
