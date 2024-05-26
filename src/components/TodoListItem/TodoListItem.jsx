import style from './TodoListItem.module.css';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';

export const TodoListItem = ({ text, count, handleDelete, id }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{count}
      </Text>
      <Text>{text}</Text>
      <button
        onClick={() => handleDelete(id)}
        className={style.deleteButton}
        type="button"
      >
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};
