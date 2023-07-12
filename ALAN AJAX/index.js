function solicitudAJAX(params) {
    var url = "https://pokeapi.co/api/v2/pokemon?limit=905";
    let tarjetas = document.querySelector("#nPokemon");
    var objXMLHttpRequest = new XMLHttpRequest();
  
    objXMLHttpRequest.onreadystatechange = function () {
      if (objXMLHttpRequest.readyState === 4) {
        if (objXMLHttpRequest.status === 200) {
          let json = JSON.parse(objXMLHttpRequest.responseText);
          tarjetas.data = json;
          for (let i = 0; i < json.results.length; i++) {
            buscarPorURL(json.results[i].url);
          }
        } else {
          alert("no hay pokemones: " + objXMLHttpRequest.status);
          alert("no hay pokemones: " + objXMLHttpRequest.statusText);
        }
      }
    };
    objXMLHttpRequest.open("GET", url);
    objXMLHttpRequest.send();
  }
  
  function buscarPorURL(urlPokemon) {
    var objXMLHttpRequest = new XMLHttpRequest();
    let div = document.querySelector("#ConteinerCard");
  
    objXMLHttpRequest.onreadystatechange = function () {
      if (objXMLHttpRequest.readyState === 4) {
        if (objXMLHttpRequest.status === 200) {
          let json = JSON.parse(objXMLHttpRequest.responseText);
          let nombre = json.name;
          let uriImg = json.sprites.other.home.front_default;
          let vida = json.stats[0].hp;
          let ataque = json.stats[1].attack;
          let defensa = json.stats[2].attack;
          let ataque_especial = json.stats[3].attackspecial;
          let defensa_especial = json.stats[4].defensaespecial;
          let velocidad = json.stats[5].speed;
          let html =
            `<div class="card" style="width: 18rem;">
    <img src="` +
            uriImg +
            `" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">` +
            nombre +
            `</h5>
      <p class="card-text"></p>
     
    </div>
  </div>`;
          div.appendChild(html);
          console.log(div);
        } else {
          alert("no hay pokemones: " + objXMLHttpRequest.status);
          alert("no hay pokemones: " + objXMLHttpRequest.statusText);
        }
      }
    };
    objXMLHttpRequest.open("GET", urlPokemon);
    objXMLHttpRequest.send();
  }
  
  function buscar() {
    let tarjetas = document.querySelector("#ConteinerCard");
    var data = document.querySelector("#nPokemon").data;
    var busqueda = document.querySelector("#nPokemon").value;
  
    if(busqueda <= 0 || busqueda > 905){
      alert("Debe ingresar una ID entre 0 y 905");
    }
    
    else if (busqueda >  0) {
      var objXMLHttpRequest = new XMLHttpRequest();
      var url = data.results[busqueda - 1].url;
  
      objXMLHttpRequest.onreadystatechange = function () {
        if (objXMLHttpRequest.readyState === 4) {
          if (objXMLHttpRequest.status === 200) {
            let json = JSON.parse(objXMLHttpRequest.responseText);
            let nombre = json.species.name;
            let uriImg = json.sprites.other.home.front_default;
            let vida = json.stats[0].base_stat;
            console.log(vida);
            let ataque = json.stats[1].base_stat;
            console.log(ataque);
            let defensa= json.stats[1].base_stat;
            console.log(defensa);
            let ataque_especial = json.stats[3].base_stat;
            console.log(ataque_especial);
            let defensa_especial = json.stats[4].base_stat;
            console.log(defensa_especial);
            let speed = json.stats[5].base_stat;
            console.log(speed);
            console.log(json);
            let html =
              `<div class="card" style="width: 25rem;">
    <img src="` +
              uriImg +
              `" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">` +
             "NOMBRE: " + nombre +
              `</h5>
      <p class="card-text"></p>
    </div>
    <div class="card-body">
      <h5 class="card-title">` +
             "❤️  VIDA : " + vida +
           "⚔️ ATAQUE: " + ataque +
            `</h5>
    <p class="card-text"></p>
  </div>
  <div class="card-body">
    <h5 class="card-title">` +
           "⚔️🔥 ATQ ESP: " + ataque_especial +
           " 🛡️🔥DEF ESP: " + defensa_especial +
            `</h5>
    <p class="card-text"></p>
  </div>
  <div class="card-body">
  <h5 class="card-title">` +
         "✨VELOCIDAD: " + speed +
         " 🛡️DEF: " + defensa +

          `</h5>
  <p class="card-text"></p>
</div>
  </div>`;
            tarjetas.innerHTML = html;
          } 
        }
      };
      objXMLHttpRequest.open("GET", url);
      objXMLHttpRequest.send();
    } 
  }
  