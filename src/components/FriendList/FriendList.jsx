import PropTypes from 'prop-types';
import css from './FriendList.module.css';
export const FriendList = props => {
  return (
    <ul className={css.friend_list}>
      {props.friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li className={css.item} key={id}>
            <span
              className={`${css.status} ${isOnline ? css.online : css.offline}`}
            ></span>
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
