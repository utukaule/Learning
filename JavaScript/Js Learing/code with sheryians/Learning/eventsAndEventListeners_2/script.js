// ✅ Event Listener and event
// addEventListener
// let h1 = document.querySelector("h1");

// h1.addEventListener("click", () => {
//   let div = document.createElement("div");
//   div.textContent = "this is div inside of h1 tag";
//   h1.append(div);
// });

// let input = document.querySelector("input");
// let div = document.createElement("div");
// let p = document.createElement("p");
// div.append(p);
// document.body.append(div);

// input.addEventListener("input", (e) => {
//   console.log(e.target.value);
//   p.textContent = e.target.value;
// });

// // ✅change
// let onChange = document.createElement("h1")
// onChange.textContent = "select device"
// div.append(onChange)
// let change = document.querySelector("select");
// change.addEventListener("change", (e) => {
//     let device = e.target.value
//     console.log(e.target.value);

//   onChange.textContent = `Selected device is ${device}`
// });

// ✅small project window.addEventListener
// let miniProject = document.querySelector("h1")

// window.addEventListener("keydown",(e)=>{
//     if(e.key == " "){
//         miniProject.textContent = "SPC"
//     }
//     else{
//         miniProject.textContent = e.key
//     }
//     console.log(e.key)
// })

// ✅file upload

// let btn = document.querySelector("#btn");
// let fileInput = document.querySelector("#fileInput");
// btn.addEventListener("click", () => {
//   fileInput.click();
// });

// fileInput.addEventListener("change", (e) => {
//   const file = e?.target?.files[0]?.name;
//   if (file) {
//     btn.textContent = e?.target?.files[0]?.name;
//     // console.log(e.target.files[0].name)
//   }
// });

// ✅input and submit
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("profile");

  let img = document.createElement("img");
  img.setAttribute("src", inputs[0].value);

  let h3 = document.createElement("h3");
  h3.textContent = inputs[1].value;
  let h5 = document.createElement("h5");
  h5.textContent = inputs[2].value;
  let p = document.createElement("p");
  p.textContent = inputs[3].value;

  profile.appendChild(img);
  card.appendChild(profile);

  card.appendChild(h3);
  card.appendChild(h5);
  card.appendChild(p);

  main.appendChild(card);

    inputs.forEach((input) => {
      if(input.type !=="submit"){
          input.value = ""
      }
    })
});
