import { Character, CharacterResponse } from "./interfaces/characters.interfaces";
import { getCharacters } from "./services";
import './styles.css'

let apiCall = "https://rickandmortyapi.com/api/character";
let apiResponse: CharacterResponse;

const template = (data: Character[]) => {
  const div = document.getElementById("output") as HTMLDivElement;
  div.innerHTML = "";
  for(const char of data) {
    const divContainer = document.createElement("div")
    divContainer.classList.add("card")
    const paragraph = document.createElement("p");
    paragraph.classList.add("name")
    const img = document.createElement("img");
    img.classList.add("image")
    img.src = char.image
    paragraph.innerText = char.name;
    divContainer.append(paragraph)
    divContainer.append(img)    
    div.append(divContainer)
    
  }
}

const next = async () => {
  const nextButton = document.getElementById("next")
  nextButton?.addEventListener("click", async () => {
    if (apiResponse.info.next) {
      const resp = await getCharacters(apiResponse.info.next)
      apiResponse = resp;
      template(apiResponse?.results);
    } else {
      console.log("No hay más personajes disponibles");
    }
  })
}


const prev = async () => {
  const prevButton = document.getElementById("prev")
  prevButton?.addEventListener("click", async () => {
    if (apiResponse.info.prev) {
      const resp = await getCharacters(apiResponse.info.prev)
      apiResponse = resp;
      template(apiResponse?.results);
    } else {
      console.log("No hay más personajes disponibles");
    }
  })
}


const app = async () => {
  apiResponse = await getCharacters(apiCall);
  template(apiResponse?.results)
  next();
  prev()

}

app()

