import classes from './MyCard.module.css'

const MyCard = (props) => {
  const myclass = `${classes.mycard} ${props.className}`;

  return <div className={myclass}>{props.children}</div>
 };

export default MyCard;
