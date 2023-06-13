'use client'
import Navigation from "@/components/Navigation";
import Slide from "@/components/Slide";
import CardDetails from "@/components/CardDetails";
import postService from "@/services/post.service";
import { useEffect, useState } from "react";

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
                            <div className="card">
                                <div className="card-header">
                                    <p>{post.date}</p>
                                    <h3>{post.title}</h3>
                                    <p>{post.experienceJob} • {post.typeJob} • {post.localJob}</p>
                                    <p><b>Salário</b>: <span>R$ {post.salary}</span></p>
                                    <p><b>Empresa</b>: <span>{post.nameCompany}</span></p>
                                    <p><b>Local</b>: <span>{post.localCompany}</span></p>
                                </div>
                                <div className="card-body">
                                    <p><b>Descrição</b>: <span>{post.description}</span></p>
                                    <p><b>Requisitos</b>: <span>{post.requirements}</span></p>
                                </div>
                            </div>
                        </a>
                    ))
                }
            </CardDetails>

        </div>
    );
};

export default Home;
