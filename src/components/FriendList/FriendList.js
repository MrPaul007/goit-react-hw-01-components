import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem.js';
import css from "./FriendList.module.css";

function FriendList({ friends }) {
    return (
        <ul className={css.friendList}>
            {friends.map(item => (  
                <FriendListItem 
                 avatar = {item.avatar}
                 name = {item.name}
                 isOnline = {item.isOnline}
                 key = {item.id}
                />
            ))}   
        </ul>
    );
}

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool
      }),
    ),
  };

export default FriendList;
