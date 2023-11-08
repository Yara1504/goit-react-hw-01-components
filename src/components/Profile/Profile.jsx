import PropTypes from 'prop-types';
import css from './Profile.module.css';


export default function Profile(props) {
    const { username, tag, location, avatar, stats } = props;
    return (
        <div className={css.profile}>
            <div className={css.profileInfo}>
                <img className={css.avatar}
                    src={avatar}
                    alt="avatar"
                />
                <p className={css.quantity}>{username}</p>
                <p className={css.quantity}>{tag}</p>
                <p className={css.quantity}>{location}</p>
            </div>
            <ul className={css.stats}>
                <li className={css.item}>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{stats.followers}</span>
                </li>
                <li className={css.item}>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{stats.views}</span>
                </li>
                <li className={css.item}>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    )
}

Profile.propTypes = { 
    username: PropTypes.string.isRequired, 
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
}
