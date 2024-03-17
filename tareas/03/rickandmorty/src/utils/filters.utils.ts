import { Filter, GenderFilter, StatusFilter } from "./filterCharacterStrategy.utils";
type filtersType = "Gender" | "Status" | "Species"

interface FilterProps {
  name: string;
  strategy: Filter,
  type: filtersType
}

export const filters: FilterProps[] = [
  {
    name: "Alive", strategy: new StatusFilter("Alive"), type: "Status"
  }, 
  {
    name: "Dead", strategy: new StatusFilter("Dead"), type: "Status"
  },
  {
    name: "Unknown", strategy: new StatusFilter("unknown"), type: "Status"
  },
  {
    name: "Male", strategy: new GenderFilter("Male"), type: "Gender"
  }, 
  {
    name: "Female", strategy: new GenderFilter("Female"), type: "Gender"
  },
  {
    name: "Unknown", strategy: new GenderFilter("unknown"), type: "Gender"
  }
]