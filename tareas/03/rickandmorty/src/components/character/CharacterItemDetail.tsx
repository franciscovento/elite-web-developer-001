import style from './CharacterItemDetail.module.css';

interface Props {
  title: string;
  description: string;
}
const CharacterItemDetail = ({ description, title }: Props) => {
  return (
    <div className={style.wrapper}>
      <h4 className={style.title}>{title}</h4>
      <span className={style.description}>{description}</span>
    </div>
  );
};

export default CharacterItemDetail;
