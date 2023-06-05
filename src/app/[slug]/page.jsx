'use client'
import Navigation from '@/components/Navigation'
import PageDetails from '@/components/PageDetails'
import React from 'react'

const Page = () => {
    return (
        <div>
            <Navigation isOtherPage={false} />

            <PageDetails>
                <div className="container">
                    <p>25/05/2023</p>
                    <h1>Desenvolvedor Front-end / Campinas / 1 Vaga(s)</h1>

                    <div className="advice">
                        <p><b>ATENÇÃO</b>: Nunca pague nenhum valor para participar de um processo seletivo. Não compre cursos, apostilas ou serviços que prometam participação em seleção ou contratação para uma vaga. E jamais informe dados bancários, de cartão ou envie cópia de documentos e fotos/selfies por e-mail, WhatsApp, aplicativos de celular ou através de sites que não conheça. <br />
                            <b>O Empreguei não se responsabiliza por qualquer tipo de pagamento efetuado.</b>
                        </p>
                    </div>

                    <div className="body">
                        <p><b>VAGA</b>: CLT • Remoto</p>
                        <p><b>DESCRIÇÃO</b>: </p>
                        <p><b>REQUISITOS</b>:</p>
                        <p><b>SALÁRIO</b>: <span>R$ 2.000,00</span></p>
                        <p><b>EMPRESA</b>: <span>Empreguei</span></p>
                        <p><b>LOCAL</b>: <span>Remoto</span></p>

                        <button>Candidatar-se na vaga</button>
                    </div>
                </div>
            </PageDetails>
        </div>
    )
}

export default Page