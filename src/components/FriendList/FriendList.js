import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import './FriendList.css';

function FriendList({friends}) {
    return (
        <ul className="FriendList">
            <FriendListItem friends={friends} />
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object),
};

export default FriendList;