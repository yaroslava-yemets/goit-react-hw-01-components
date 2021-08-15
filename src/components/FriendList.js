import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

function FriendList({friends}) {
    return (
        <ul className="friend-list">
            <FriendListItem friends={friends} />
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;