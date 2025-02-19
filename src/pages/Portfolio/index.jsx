import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactModal from "../../components/ContactModal";
import Works from "../Sections/Works";
import Sandra from '../../assets/images/sandra.png'


const Portfolio = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (
    <div className='background'>
        <div className="header-main">
            <header>
                <Navbar openModal={openModal}/>
            </header>
            <main>
                <Works />
                <section className="success">
                    <h2>Mes réussites</h2>
                    <div className="container-img-success">
                        <img src={Sandra} alt="Sandra" />
                        <ul className="container-success">
                            <li><span className="bold">2010 :</span> Dans le domaine des Métiers de la Mode, j'ai été médaillée d'argent au concours départementale du Meilleur Apprenti de France.</li>
                            <li><span className="bold">2017 :</span> Lors de mon service civique, j'ai organisé un séminaire de A à Z avec 5 établissements scolaires et des associations sur les thèmes du harcèlement scolaire et du décrochage scolaire.</li>
                            <li><span className="bold">2021 :</span> Lors d'un évènement caritatif sur ma chaîne Twitch, j'ai récolté 1477€ pour l'association Endofrance.</li>
                            <li><span className="bold">2023 :</span> Chez Enedis, j'ai été l'interlocutrice et référente de l'ACO (Automobile Club de l'Ouest) pour le centenaire des 24h du Mans (Bornes fixes).</li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
        <Footer openModal={openModal}/>
        <ContactModal 
            isOpen={isModalOpen} 
            onClose={closeModal} 
            title="Contactez-moi" 
        />
    </div>
  )
}

export default Portfolio