import FriendItem from "./FriendItem";
import css from './Frendlist.module.css';

export default function FriendsList({ friends }) {
    return (
        <ul className={css.listF}> 
            {friends.map(friend => (<FriendItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                key={friend.id}  
            />))}
        </ul>
    )
}



