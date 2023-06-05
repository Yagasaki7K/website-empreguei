'use client'
import Navigation from "@/components/Navigation";
import Slide from "@/components/Slide";
import CardDetails from "@/components/CardDetails";

const Home = () => {
    return (
        <div>
            <Navigation isOtherPage={false} />
            <Slide />

            <CardDetails>
                <a href="">
                    <div className="card">
                        <div className="card-header">
                            <h3>Desenvolvedor Front-end</h3>
                            <p>25/05/2023</p>
                            <p>CLT • Remoto</p>
                            <p><b>Salário</b>: <span>R$ 2.000,00</span></p>
                            <p><b>Empresa</b>: <span>Empreguei</span></p>
                            <p><b>Local</b>: <span>Remoto</span></p>
                        </div>
                        <div className="card-body">
                            <p><b>Descrição</b>: <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatumLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</span></p>
                            <p><b>Requisitos</b>: <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatumLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</span></p>
                        </div>
                    </div>
                </a>
            </CardDetails>

        </div>
    );
};

export default Home;
