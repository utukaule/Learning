// dom manipulation
// html se element select karna
// text badalna
// html badalna
// css badalna
// attributes
// event listeners

// ✅TOPIC:-getElementById & getElementsByClassName

// let abcd = document.getElementById("heading")
// console.dir(abcd)

// let classs = document.getElementsByClassName("heading_class")
// console.log(classs)

// ✅TOPIC:- querySelector, querySelectorAll
// queryselector only seletes the first html tag after body tag which
// we are looking for
// let one = document.querySelector("h1")
// console.log(one)
// let two = document.querySelectorAll("h1")
// console.log(two)

// ✅innerHTML,innerText, textContent
// let h1 = document.querySelector("h1");
// h1.textContent = "hello kese ho ji";

// let h2 = document.querySelector("h1");
// we will add new tag inside of h1 tag
// h2.innerHTML = "<h6>hello kese ho ji</h6>";
// console.log(h2)

// ✅TOPIC:- getAttribute, setAttribute, removeAttribute
// let link = document.querySelector("a")
// link.setAttribute("href","https://www.google.com")
// console.log(link)
// link.getAttribute("href")
// console.dir(link)
// link.removeAttribute('href')
// console.log(link)

// ✅Dynamic DOM manipulation
// createElement, appendChild, removeChild, prepend
// let p = document.createElement("p");
// p.textContent = "this is paragraph";

// document.body.prepend(p)
// document.body.append(p)
// document.body.removeChild(p)

// revise
let shem = document.querySelector(".shem");
// shem.innerHTML = "<h1>This is converted in to heading</h1>"
// console.log("this is shem",shem)




// ✅js se css badalna
// style,classList, remove, toggle
shem.style.color = "red";
