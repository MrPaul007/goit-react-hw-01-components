import PropTypes from 'prop-types';
import css from './Profile.module.css'
import defaultAvatar from "../../img/default-avatar.png";

function Profile({avatar, username, tag, location, stats}) {
    // const {avatar, username, tag, location, stats} = item;
    const {followers, views, likes} = stats;
    return (
      <div className={css.profile}>
        <div className={css.description}>
          <img
            src={avatar}
            alt="User avatar"
            className={css.avatar}
          />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>
      
        <ul className={css.stats}>
          <li>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{followers}</span>
          </li>
          <li>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{views}</span>
          </li>
          <li>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    );
}

Profile.defaultProps = {
  avatar: defaultAvatar,
};

Profile.propTypes = {
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
};
  
export default Profile;
