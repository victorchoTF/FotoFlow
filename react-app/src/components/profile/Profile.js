import ProfileData from "./ProfileData";
import ProfileImages from "./ProfileImages";
import "./profile.css";

function Profile(){
    return (
        <section className="profile">
            <ProfileData />
            <ProfileImages imageCount={10}/>
        </section>
    );
}

export default Profile;