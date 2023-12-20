import classes from './MyButton.module.css';

const MyButton = function ({ active = false, ...props }) {
  return (
    <button {...props} className={active ? classes.myBtnAct : classes.myBtn}>
      {props.children}
    </button>
  );
};

export default MyButton;
