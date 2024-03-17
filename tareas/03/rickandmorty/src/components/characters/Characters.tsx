import React, { useState } from 'react';
import styles from './Characters.module.css';
import { Character } from '../character/Character';
import useCharacters from '../../hooks/useCharacters.hooks';
import useFilterCharacters from '../../hooks/useFilterCharacters.hooks';
import FilterComponent from '../filters/Filter';

const Characters = () => {
  const { data, isLoading, error, handleParams } = useCharacters();
  const { changeFilterStrategy, filteredCharacters } = useFilterCharacters();
  const characters = data?.results || [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1 className={styles.title}>Characters</h1>
      <FilterComponent changeFilterStrategy={changeFilterStrategy} />
      <div className={styles.buttons}>
        <button
          disabled={!data?.info.prev}
          className={styles.button}
          onClick={() => handleParams(data?.info.prev || '')}
        >
          Prev
        </button>
        <button
          disabled={!data?.info.next}
          className={styles.button}
          onClick={() => handleParams(data?.info.next || '')}
        >
          Next
        </button>
      </div>
      <div className={styles.wrapper}>
        {filteredCharacters(characters).map((character) => (
          <Character key={character.id} {...character} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
