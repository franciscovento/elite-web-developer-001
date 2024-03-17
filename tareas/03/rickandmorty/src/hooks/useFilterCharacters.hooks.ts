import React from "react";
import { Character } from "../types";
import { Filter, NoFilter } from "../utils/filterCharacterStrategy.utils";

interface UseFilterCharacters {
  filteredCharacters: (characters: Character[]) => Character[];
  changeFilterStrategy: (strategy: Filter) => void;
}

const useFilterCharacters = ():UseFilterCharacters => {
  const [filterStrategy, setFilterStrategy] = React.useState<Filter>(new NoFilter());


  const filteredCharacters = (characters:Character[]) => {
    return filterStrategy.filter(characters);
  }

  const changeFilterStrategy = (strategy:Filter) => {
    setFilterStrategy(strategy);
  }


  return {
    filteredCharacters,
    changeFilterStrategy,
  }
}

export default useFilterCharacters;