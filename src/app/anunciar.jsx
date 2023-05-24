'use client'
import NavigationDetails from "@/components/NavigationDetails";

const Home = () => {
    return (
        <div>
            <NavigationDetails>
                <a href="#"><img src="/logo-white.png" alt="Empreguei" /></a>
                <p><a href="/">ver vagas</a></p>
                <p className="active"><a href="/announce">anunciar vagas</a></p>

                <button>light mode</button>
            </NavigationDetails>
        </div>
    );
};

export default Home;
