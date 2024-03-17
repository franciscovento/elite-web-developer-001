import React from 'react';
import { filters } from '../../utils/filters.utils';
import { Filter } from '../../utils/filterCharacterStrategy.utils';

interface Props {
  changeFilterStrategy: (strategy: Filter) => void;
}
const FilterComponent: React.FC<Props> = ({ changeFilterStrategy }) => {
  return (
    <div>
      Filters:
      <div>
        {filters.map((filter) => {
          return (
            <button onClick={() => changeFilterStrategy(filter.strategy)}>
              {filter.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FilterComponent;
