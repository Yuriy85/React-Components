import classes from './SortArea.module.css';

export type Sort = 'name' | 'length' | 'model';

function SortArea(props: {
  loading: boolean;
  setSort: React.Dispatch<React.SetStateAction<Sort>>;
}) {
  return (
    <select
      disabled={props.loading}
      className={classes.select}
      onChange={(event) => {
        props.setSort(event.target.value as Sort);
      }}
    >
      <option disabled>Choose sort</option>
      <option>name</option>
      <option>model</option>
      <option>length</option>
    </select>
  );
}

export default SortArea;
