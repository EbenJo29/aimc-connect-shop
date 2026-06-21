
const params = new URLSearchParams(window.location.search);
const cat = params.get("cat");

const container = document.getElementById("products");

function generateProducts(category){
 let items = [];
 for(let i=1;i<=200;i++){
   items.push({
     title: category + " Product " + i,
     type: i % 5 === 0 ? "video" : "image",
     src: i % 5 === 0 
       ? "https://www.w3schools.com/html/mov_bbb.mp4"
       : "https://via.placeholder.com/200"
   });
 }
 return items;
}

if(container){
 let products = generateProducts(cat || "category");

 products.forEach(p=>{
   let div = document.createElement("div");
   div.className = "card";

   if(p.type === "video"){
     div.innerHTML = `<video controls src="${p.src}"></video><p>${p.title}</p>`;
   } else {
     div.innerHTML = `<img src="${p.src}"><p>${p.title}</p>`;
   }

   container.appendChild(div);
 });
}
