import "./profile.css";

function ProfileCard({username, image, direction}){
    return (
        <div className="profile-card" style={direction ? {flexDirection: "column"} : {}}>
            <img src={image} alt="profile"/>
             <label className="username">
                {username}
             </label>
        </div>
    );
}

export default ProfileCard;