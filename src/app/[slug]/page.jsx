'use client'
import Navigation from '@/components/Navigation'
import PageDetails from '@/components/PageDetails'
import postService from "@/services/post.service";
import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { NextSeo } from 'next-seo'

const Page = () => {
    const [Posts, setPosts] = useState([])

    const slug = usePathname()

    useEffect(() => {
        getPosts()
    }, [])

    const getPosts = async () => {
        const data = await postService.getAllPosts()
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const getContactByMail = (email) => {
        alert('Você será redirecionado para o seu e-mail')
        window.open(`mailto:${email}`)
    }

    return (
        <div>
            <Navigation isOtherPage={false} />
            {
                // eslint-disable-next-line react/prop-types
                Posts && Posts.map((post, index) => (
                    post.slug === slug ? (
                        <PageDetails>
                            <div className="container" key={index}>
                                <h1>{post.title} / {post.localCompany}</h1>
                                <p>{post.date} - <small>{post.id}</small></p>

                                <div className="advice">
                                    <p><b>ATENÇÃO</b>: Nunca pague nenhum valor para participar de um processo seletivo. Não compre cursos, apostilas ou serviços que prometam participação em seleção ou contratação para uma vaga. E jamais informe dados bancários, de cartão ou envie cópia de documentos e fotos/selfies por e-mail, WhatsApp, aplicativos de celular ou através de sites que não conheça. <br />
                                        <b>O Empreguei não se responsabiliza por qualquer tipo de pagamento efetuado.</b>
                                    </p>
                                </div>

                                <div className="body">
                                    <p><b>VAGA</b>: {post.typeJob} • {post.localJob}</p>
                                    <p><b>DESCRIÇÃO</b>: {post.description}</p>
                                    <p><b>REQUISITOS</b>: {post.requirements}</p>
                                    <p><b>SALÁRIO</b>: <span>R$ {post.salary}</span></p>
                                    <p><b>EMPRESA</b>: <span>{post.nameCompany}</span></p>
                                    <p><b>LOCAL</b>: <span>{post.localCompany}</span></p>

                                    <p className="subAdvice">Os interessados deverão encaminhar o currículo para o e-mail de <a href={"mailto:" + post.emailCompany}><u>{post.emailCompany}</u></a> com o título: <strong>{post.title}</strong> no campo do assunto até o prazo de <b>sete dias</b> desde a data dessa publicação.</p>

                                    <button onClick={() => { getContactByMail(post.emailCompany) }}>Candidatar-se na vaga</button>
                                </div>
                            </div>

                            <NextSeo
                                title={post.title}
                                description={post?.description}
                                canonical={'https://empreguei.vercel.app' + post.slug}
                                openGraph={{
                                    url: 'https://empreguei.vercel.app' + post.slug,
                                    title: post.title,
                                    description: post?.description,
                                    images: [
                                        {
                                            url: 'https://i.imgur.com/KUqAZbs.png',
                                            width: 1100,
                                            height: 546,
                                            alt: post.title,
                                            type: 'image/jpeg' || 'image/png',
                                        }
                                    ],
                                    siteName: 'Empreguei',
                                }}
                                twitter={{
                                    handle: '@KalifyInc',
                                    site: '@KalifyInc',
                                    cardType: 'summary_large_image',
                                }}
                            />
                        </PageDetails>
                    ) : <p>404: Not Found</p>
                ))
            }
        </div>
    )
}

export default Page