import { Character } from "./interfaces/characters.interfaces";
import { getCharacters } from "./services";

const getApiData = async () => {
  const data = await getCharacters();
  return {
    info: data.info,	
    results: data.results
  }
}

const template = (data: Character[]) => {
  const div = document.getElementById("output") as HTMLDivElement;
  for(const char of data) {
    const divContainer = document.createElement("div")
    const span = document.createElement("p");
    const img = document.createElement("img");
    img.src = char.image
    span.innerText = char.name;
    divContainer.append(span)
    divContainer.append(img)    
    div.append(divContainer)
    
  }
}


const app = async () => {
  const apiData = await getApiData();
  template(apiData.results)
  console.log(apiData)
}

app()

