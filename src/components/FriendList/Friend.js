import PropTypes from "prop-types";
import css from "./FriendList.module.css";

function Friend({ avatar, name, isOnline, id }) {
  return(
    <li key={id} className={css.item}>
        <span className={css.status} style={{
        backgroundColor:isOnline?"green":"red",
        }}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li> 
  )   
}

Friend.defaultProps = {
    percentage: 0,
    isOnline: false,
    avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
};
  
Friend.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default Friend;