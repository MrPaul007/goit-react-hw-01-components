import PropTypes from 'prop-types';
import Friend from './Friend.js';
import css from "./FriendList.module.css";

function FriendList({ items }) {
    return (
        <ul className={css.friendList}>
            {items.map(item => (  
                <Friend 
                 avatar = {item.avatar}
                 name = {item.name}
                 isOnline = {item.isOnline}
                 id = {item.id}
                />
            ))}   
        </ul>
    );
}

FriendList.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }),
    ),
  };

export default FriendList;
