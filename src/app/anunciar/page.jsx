'use client'
import Navigation from "@/components/Navigation";
import SignUpDetails from "@/components/SignUpDetails";
import Footer from "@/components/Footer";
import Confetti from 'react-confetti';
import { useState } from "react";
import postService from "@/services/post.service";

const SignUp = () => {

    const [showConfetti, setShowConfetti] = useState(false);
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [date, setDate] = useState('');
    const [typeJob, setTypeJob] = useState('');
    const [experienceJob, setExperienceJob] = useState('');
    const [localJob, setLocalJob] = useState('');
    const [localCompany, setLocalCompany] = useState('');
    const [emailCompany, setEmailCompany] = useState('');
    const [nameCompany, setNameCompany] = useState('');
    const [salary, setSalary] = useState('');
    const [description, setDescription] = useState('');
    const [requirements, setRequirements] = useState('');

    async function sendData() {
        const NewPosts = {
            title,
            slug,
            date,
            typeJob,
            localJob,
            localCompany,
            emailCompany,
            nameCompany,
            salary,
            description,
            requirements,
            experienceJob,
        }

        if (!title || !typeJob || !localJob || !localCompany || !nameCompany || !salary || !description || !requirements || !experienceJob) {
            alert('Por favor, preencha todos os campos')
        } else {
            await (postService.addPost(NewPosts))
            location.href = "#title"
            setShowConfetti(true);

            setTimeout(() => {
                location.assign(slug)
            }, 3000);
        }
    }

    function TitleToSlug() {
        let title = document.getElementById('title').value;

        let slug = title.toLowerCase().replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');

        setSlug('/' + slug + '-' + nameCompany)
    }

    function collectData() {
        const date = new Date()
        setDate(date)

        const day = date.getDate()
        const month = date.getMonth() + 1
        const year = date.getFullYear()

        const resultDate = `${day}/${month}/${year}`
        setDate(resultDate)

        //

        const title = document.getElementById('title').value;
        setTitle(title)

        const nameCompany = document.getElementById('nameCompany').value;
        setNameCompany(nameCompany)

        const emailCompany = document.getElementById('emailCompany').value;
        setEmailCompany(emailCompany)

        const localCompany = document.getElementById('localCompany').value;
        setLocalCompany(localCompany)

        const salary = document.getElementById('salary').value;
        setSalary(salary)

        const description = document.getElementById('description').value;
        setDescription(description)

        const requirements = document.getElementById('requirements').value;
        setRequirements(requirements)

        TitleToSlug()
    }

    return (
        <div>
            <Navigation isOtherPage={true} />

            <SignUpDetails>
                {showConfetti && <Confetti gravity={0.5} height={1300} />}

                <div className="container">
                    <form onSubmit={(e) => e.preventDefault()} onChange={() => collectData()}>
                        <div className="leftForm">

                            <h1>Cadastrar nova vaga</h1>
                            <div className="content">
                                <label>Nome da vaga:</label>
                                <input type="text" name="title" id="title" />
                            </div>

                            <div className="content">
                                <label>Nome da Empresa:</label>
                                <input type="text" name="nameCompany" id="nameCompany" />
                            </div>

                            <div className="content">
                                <label>Email de Contato:</label>
                                <input type="email" name="emailCompany" id="emailCompany" placeholder="example@empresa.com.br" />
                            </div>

                            <div className="content">
                                <label>Localidade da Empresa:</label>
                                <input type="text" name="localCompany" id="localCompany" placeholder="Cidade, Estado" />
                            </div>

                            <div className="content">
                                <label>A vaga será:</label>
                                <select onChange={(e) => setLocalJob(e.target.value)} value={localJob}>
                                    <option></option>
                                    <option>Remota</option>
                                    <option>Presencial</option>
                                    <option>Hibrido</option>
                                </select>
                            </div>

                            <div className="content">
                                <label>Salário:</label>
                                <input type="text" name="salary" id="salary" placeholder="1.320,00" />
                            </div>

                            <div className="content">
                                <label>Tipo de Contrato:</label>
                                <select onChange={(e) => setTypeJob(e.target.value)} value={typeJob}>
                                    <option></option>
                                    <option>CLT</option>
                                    <option>PJ</option>
                                    <option>Temporário</option>
                                    <option>Freelancer</option>
                                </select>
                            </div>

                            <div className="content">
                                <label>Nível de Experiência:</label>
                                <select onChange={(e) => setExperienceJob(e.target.value)} value={experienceJob}>
                                    <option></option>
                                    <option>Estágio</option>
                                    <option>Júnior</option>
                                    <option>Pleno</option>
                                    <option>Sênior</option>
                                </select>
                            </div>
                        </div>

                        <div className="rightForm">
                            <div className="content">
                                <label>Descrição da vaga:</label>
                                <textarea name="description" id="description" cols="30" rows="10" placeholder="Descreva toda a descrição da vaga .."></textarea>
                            </div>

                            <div className="content">
                                <label>Requisitos e Benefícios da vaga:</label>
                                <textarea name="requirements" id="requirements" cols="30" rows="10" placeholder="Descreva todos os requisitos e benefícios da vaga .."></textarea>
                            </div>

                            <div className="content-button">
                                <button type="submit" onClick={sendData} className="green">Anunciar vaga!</button>
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
