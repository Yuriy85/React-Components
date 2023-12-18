import classes from './ItemPerPageArea.module.css';

function ItemPerPageArea(props: {
  loading: boolean;
  max: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <select
      disabled={props.loading}
      className={classes.select}
      onChange={(event) => {
        props.setCount(+event.target.value);
      }}
    >
      <option disabled>Choose count per page</option>
      <option value={5}>5 cards per page</option>
      <option value={10}>10 cards per page</option>
      <option value={15}>15 cards per page</option>
      <option value={props.max}>All</option>
    </select>
  );
}

export default ItemPerPageArea;
