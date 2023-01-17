async function apiGET() {
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data =>{ 
        console.info(data)
        for (i=0; i<data.length;i++){
            const list =  document.querySelector(".cosa")
            list.innerHTML += `<p id="${i}" class="usuarios">${data[i].name}</p>`
               
        }
        document.querySelectorAll(".usuarios").forEach(el => {
            el.addEventListener("click", e => {
              const id = e.target.getAttribute("id");
              document.querySelector(".cosadentrodecosa").innerHTML =""
              document.querySelector(".cosadentrodecosa").innerHTML += `<p>${data[id].username}</p>` 
              document.querySelector(".cosadentrodecosa").innerHTML += `<p>${data[id].email}</p>`
              document.querySelector(".cosadentrodecosa").innerHTML += `<p>${data[id].phone}</p>`
              document.querySelector(".cosadentrodecosa").innerHTML += `<p>${data[id].website}</p>`
            });
          });      
    });    
    }    

apiGET()


// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(data =>{ 
//         for (let i=0; i<data.length;i++){
//           var body = document.querySelector("body");
//           const nombres = document.createElement('div')
//           nombres.textContent = data[i].name
//           body.appendChild(nombres)
//           const info =document.createElement('div')
//           body.appendChild(info)
//           nombres.addEventListener("click",()=>{
//             info.innerHTML = data[i].username
//           })

//         }
//       })