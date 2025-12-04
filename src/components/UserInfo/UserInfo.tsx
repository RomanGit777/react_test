import avatar from "../../imgs/avatar.avif";

export const UserInfo = () => {
    return (
        <div className={'user-profile'}>
            <img src={avatar}
                 alt="user profile"/>
            <p>John Doe</p>
        </div>
    );
};