'use client'
import Navigation from "@/components/Navigation";
import SignUpDetails from "@/components/SignUpDetails";
import Footer from "@/components/Footer";

const SignUp = () => {
    return (
        <div>
            <Navigation isOtherPage={true} />

            <SignUpDetails>
                <div className="container">

                    <form action="">
                        <div className="leftForm">

                            <h1>Cadastrar nova vaga</h1>
                            <div className="content">
                                <label htmlFor="title">Nome da vaga:</label>
                                <input type="text" name="title" id="title" />
                            </div>

                            <div className="content">
                                <label htmlFor="company">Nome da empresa:</label>
                                <input type="text" name="company" id="company" />
                            </div>

                            <div className="content">
                                <label htmlFor="localidade">Localidade da empresa:</label>
                                <input type="text" name="localidade" id="localidade" placeholder="Cidade, Estado" />
                            </div>

                            <div className="content">
                                <label htmlFor="local">A vaga será:</label>
                                <select>
                                    <option value="remoto">Remota</option>
                                    <option value="presencial">Presencial</option>
                                    <option value="hibridro">Hibrido</option>
                                </select>
                            </div>

                            <div className="content">
                                <label htmlFor="salary">Salário:</label>
                                <input type="text" name="salary" id="salary" placeholder="1.320,00" />
                            </div>

                            <div className="content">
                                <label htmlFor="contract">Tipo de contrato:</label>
                                <select>
                                    <option value="clt">CLT</option>
                                    <option value="pj">PJ</option>
                                    <option value="temporario">Temporário</option>
                                    <option value="freelancer">Freelancer</option>
                                </select>
                            </div>

                            <div className="content">
                                <label htmlFor="level">Nível de Experiência:</label>
                                <select>
                                    <option value="estagio">Estágio</option>
                                    <option value="junior">Júnior</option>
                                    <option value="pleno">Pleno</option>
                                    <option value="senior">Sênior</option>
                                </select>
                            </div>
                        </div>

                        <div className="rightForm">
                            <div className="content">
                                <label htmlFor="description">Descrição da vaga:</label>
                                <textarea name="description" id="description" cols="30" rows="10" placeholder="Descreva toda a descrição da vaga .."></textarea>
                            </div>

                            <div className="content">
                                <label htmlFor="description">Requisitos e Benefícios da vaga:</label>
                                <textarea name="description" id="description" cols="30" rows="10" placeholder="Descreva todos os requisitos e benefícios da vaga .."></textarea>
                            </div>

                            <div className="content-button">
                                <button type="submit" className="green">Anunciar vaga!</button>
                                <button type="submit" className="yellow">Cancelar</button>
                            </div>
                        </div>

                    </form>
                </div>
            </SignUpDetails>
            <Footer />
        </div >
    );
};

export default SignUp;
