import PropTypes from 'prop-types';

function FriendListItem({friends}) {
    return (
        friends.map(friend => (
            <li key={friend.id} className="item">
                {friend.isOnline ? <span className="status green"></span> : <span className="status red"></span>}
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