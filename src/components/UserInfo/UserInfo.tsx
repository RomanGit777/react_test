import userInfoStyles from './UserInfo.module.css'
import avatar from "/imgs/avatar.avif";

export const UserInfo = () => {
    return (
        <div className={userInfoStyles.userProfile} id={'userProfile'}>
            <img id={'avatar'} src={avatar}
                 alt="user profile"/>
            <p>John Doe</p>
        </div>
    );
};