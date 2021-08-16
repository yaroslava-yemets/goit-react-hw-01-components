import PropTypes from 'prop-types';
import './FriendList.css';

function FriendListItem({friends}) {
    return (
        friends.map(friend => (
            <li key={friend.id} className="FriendList__item">
                <span className={friend.isOnline ? 'status green' : 'status red'}></span>
                <img 
                    className="avatar" 
                    src={friend.avatar}
                    alt="avatar of user" 
                    width="48" 
                />
                <p className="name">{friend.name}</p>
            </li>
        ))
    );
};

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendListItem;