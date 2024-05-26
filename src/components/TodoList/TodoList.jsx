import { Grid, GridItem, TodoListItem } from 'components';

export const TodoList = ({ todos, handleDelete }) => {
  return (
    <>
      <Grid>
        {todos.map((todo, index) => (
          <GridItem key={todo.id}>
            <TodoListItem text={todo.text} id={todo.id} count={index + 1} handleDelete={handleDelete} />
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
