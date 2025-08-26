// ✅ Event Listener and event
// addEventListener
let h1 = document.querySelector("h1");

h1.addEventListener("click", () => {
  let div = document.createElement("div");
  div.textContent = "this is div inside of h1 tag";
  h1.append(div);
});

let input = document.querySelector("input");
let div = document.createElement("div");
let p = document.createElement("p");
div.append(p);
document.body.append(div);

input.addEventListener("input", (e) => {
  console.log(e.target.value);
  p.textContent = e.target.value;
});

// change
let onChange = document.createElement("h1")
onChange.textContent = "select device"
div.append(onChange)
let change = document.querySelector("select");
change.addEventListener("change", (e) => {
    let device = e.target.value
    console.log(e.target.value);

  onChange.textContent = `Selected device is ${device}`
});
