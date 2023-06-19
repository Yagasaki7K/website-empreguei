'use client'
import Navigation from "@/components/Navigation";
import Slide from "@/components/Slide";
import CardDetails from "@/components/CardDetails";
import postService from "@/services/post.service";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";

const Home = () => {

    const [Posts, setPosts] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        const data = await postService.getAllPosts()
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    return (
        <div>
            <Navigation isOtherPage={false} />
            <Slide />

            <CardDetails>
                {
                    Posts && Posts.map((post, index) => (
                        <a href={post.slug} key={index}>
                            <div className="cards">
                                <div className="card">
                                    <h3>{post.hasLinkedin ? <img src="/linkedin.png" width="15" alt="Essa vaga também está no Linkedin" /> : null} {post.title} • {post.experienceJob} • {post.typeJob} • {post.localJob}</h3>
                                    <b>{post.date} </b>
                                    <p><b>Salário</b>: <span>R$ {post.salary}</span></p>
                                    <p><b>Empresa</b>: <span>{post.nameCompany}</span></p>
                                    <p><b>Local</b>: <span>{post.localCompany}</span></p>
                                    <div className="card-body">
                                        <p><b>Requisitos</b>: <span>{post.requirements}</span></p>
                                    </div>
                                    <button>Candidatar-se a vaga</button>
                                    {post.hasLinkedin ? <button className="linkedin">Candidatar-se pelo LinkedIn</button> : null}
                                </div>
                            </div>
                        </a>
                    ))
                }
            </CardDetails>

            <Footer />

        </div>
    );
};

export default Home;
