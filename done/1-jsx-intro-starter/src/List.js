// create List component
import ListItem from './ListItem';

const List = ({ fruits }) => {
  return (
    <div className='list'>
      <h1>List Component</h1>
      <ul>
        {fruits.map(({id, name})=>(
          <ListItem key={id} fruit={name} />
          // <li key={singleFruit.id}>{singleFruit.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
