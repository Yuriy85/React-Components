import classes from './MyButton.module.css';

const MyButton = function ({ ...props }) {
  return (
    <button {...props} className={classes.myBtn}>
      {props.children}
    </button>
  );
};

export default MyButton;
