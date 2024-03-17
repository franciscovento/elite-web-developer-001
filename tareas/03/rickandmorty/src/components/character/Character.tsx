import React from 'react';
import style from './Character.module.css';
import CharacterItemDetail from './CharacterItemDetail';
import { Character as CharacterProps } from '../../types';

export const Character: React.FC<CharacterProps> = ({
  name,
  status,
  image,
  species,
  location,
  origin,
}) => {
  return (
    <div className={style.character}>
      <div className={style.imgContainer}>
        <img src={image} alt="" />
      </div>
      <div className={style.wrapper}>
        <div>
          <h3 className={style.name}>{name}</h3>
          <div className={style.top}>
            <span
              className={style.bullet + ' ' + style[status.toLocaleLowerCase()]}
            ></span>
            <span>
              {status} - {species}
            </span>
          </div>
        </div>
        <CharacterItemDetail
          title="Last known location:"
          description={location.name}
        />
        <CharacterItemDetail title="First seen:" description={origin.name} />
      </div>
    </div>
  );
};
