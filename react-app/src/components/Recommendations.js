import ProfileCard from "./profile/ProfileCard";
import constants from "../constants";

function Recommendations(){
    const recommendations = [
        "Grisho",
        "Az",
        "Ti",
        "Toi"
    ];
    return (
        <section class="recommenendations">
            {recommendations.map(recommendation => <ProfileCard 
                                                    username={recommendation} 
                                                    image={constants.image}
                                                    direction={"column"}
                                                    />)}
        </section>
    );
}

export default Recommendations;