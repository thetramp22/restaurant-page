(()=>{"use strict";function e(e){const t=document.createElement("p");return t.textContent=e,t}function t(e,t){const n=document.createElement("img");return n.src=e,n.alt=t,n}function n(){const e=document.createElement("div");return e.classList.add("line"),e}const a=function(){const n=document.createElement("div"),a=e('"The best tacos in Realtown, USA."'),i=t("./images/tacos.jpg","Delicious Tacos"),c=e("Welcome to Paco's Tacos, serving the finest mexican cuisine since the day we got here.  Family owned and operated.  ");return a.classList.add("quote"),n.appendChild(a),n.appendChild(i),n.appendChild(c),n};class i{constructor(e,t,n,a,i){this.name=e,this.image=t,this.imageAlt=n,this.description=a,this.price=i}getName(){return this.name}getImage(){return this.image}getImageAlt(){return this.imageAlt}getDescription(){return this.description}getPrice(){return this.price}}const c=new i("Tacos","./images/tacos.jpg","Tasty Tacos","Your choice of meat served in fresh made corn tortillas, topped with salsa, onions and cilantro.","1.99ea."),o=new i("Burritos","./images/burritos.jpg","Beautiful Burritos","Your choice of meat wrapped in a fresh made flour tortilla with cheese, sour cream, salsa and guacamole","5.99ea."),d=function(){const n=document.createElement("div"),a=function(){const n=[c,o,c,o,c,o],a=document.createElement("div");a.classList.add("grid");for(let i of n){const n=document.createElement("div"),c=e(i.getName()),o=t(i.getImage(),i.getImageAlt()),d=e(i.getDescription()),r=e(i.getPrice());n.appendChild(c),n.appendChild(o),n.appendChild(d),n.appendChild(r),a.appendChild(n)}return a}();return n.appendChild(a),n},r=function(){const n=document.createElement("div"),a=function(e){const t=document.createElement("h2");return t.textContent="Paco's Tacos",t}(),i=e("1234 Actual Street\nRealtown, ST 12345"),c=t("./images/map.jpeg","Map of Realtown"),o=e("Phone: 555-123-4567");return n.appendChild(a),n.appendChild(i),n.appendChild(c),n.appendChild(o),n};function s(e){const t=document.createElement("button");return t.textContent=e,t.setAttribute("id",e.toLowerCase()),t.classList.add("btn"),t.addEventListener("click",l),t}function l(e){var t;t=e.target.getAttribute("id"),document.getElementById("main").innerHTML="",function(e){const t=document.querySelector(".active"),n=document.getElementById(e);t.classList.remove("active"),n.classList.add("active"),t.addEventListener("click",l),n.removeEventListener("click",l)}(t),function(e){const t=document.getElementById("main");"home"==e?t.appendChild(a()):"menu"==e?t.appendChild(d()):"contact"==e&&t.appendChild(r())}(t)}!function(){const e=document.getElementById("content");e.appendChild(function(){const e=document.createElement("header"),t=document.createElement("h1");return t.textContent="Paco's Tacos",e.appendChild(t),e.appendChild(function(){const e=document.createElement("nav"),t=document.createElement("div"),a=s("Home"),i=s("Menu"),c=s("Contact");return t.classList.add("button-wrapper"),a.classList.add("active"),a.removeEventListener("click",l),e.appendChild(n()),t.appendChild(a),t.appendChild(i),t.appendChild(c),e.appendChild(t),e.appendChild(n()),e}()),e}()),e.appendChild(function(e){const t=document.createElement("main");return t.setAttribute("id","main"),t.appendChild(a()),t}()),e.appendChild(function(){const e=document.createElement("footer");e.classList.add("footer");const t=(new Date).getFullYear();return e.innerHTML=`\n        <p>Copyright &copy; ${t} Scott Starks</p> \n        <a href="https://github.com/thetramp22" target="_blank">\n            <i class="fa-brands fa-github"></i>\n        </a>\n    `,e}())}()})();