import PropTypes from 'prop-types';
import css from './Frendlist.module.css';


export default function FriendItem({ id, avatar, name, isOnline }) {
    return (
        <li className={css.friendCard} key={id}>
            <span className={css.status}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.nameFriend}>{name}</p>
        </li>
    )
}

FriendItem.propTypes = { 
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
}
