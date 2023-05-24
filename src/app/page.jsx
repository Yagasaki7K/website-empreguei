'use client'
import NavigationDetails from "@/components/NavigationDetails";
import Slide from "../components/Slide";

const Home = () => {
    return (
        <div>
            <NavigationDetails>
                <a href="#"><img src="/logo-white.png" alt="Empreguei" /></a>
                <p className="active"><a href="/">ver vagas</a></p>
                <p><a href="/anunciar">anunciar vagas</a></p>

                <button>light mode</button>
            </NavigationDetails>
            <Slide />
        </div>
    );
};

export default Home;
