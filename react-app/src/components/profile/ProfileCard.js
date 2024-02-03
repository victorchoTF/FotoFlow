import "./profile.css";

function ProfileCard({username, image}){
    return (
        <div className="profile-card">
            <img src={image} alt="profile"/>
             <label className="username">
                {username}
             </label>
        </div>
    );
}

export default ProfileCard;