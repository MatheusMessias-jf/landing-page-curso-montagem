import { useState } from "react";
import ReactPlayer from "react-player";
import styles from "./App.module.css";
import { MdOutlineWatchLater, MdMonitor } from "react-icons/md";
import { CiMedal } from "react-icons/ci";
import payment from "./assets/payment.jpg";
import video from "./assets/video.mp4";
import image1 from "./assets/pc_images/pc-1.jpg";
import image2 from "./assets/pc_images/pc-2.jpg";
import image3 from "./assets/pc_images/pc-3.jpg";
import image4 from "./assets/pc_images/pc-4.jpg";
import image5 from "./assets/pc_images/pc-5.jpg";
import image6 from "./assets/pc_images/pc-6.jpg";

export function App() {
  return (
    <>
      <div className={styles.first_section}>
        <h1 className={styles.title}>CONHEÇA O MÉTODO VIVER DE HARDWARE</h1>
        <p className={styles.title_description}>
          O treinamento onde você aprende do zero tudo que precisa para
          trabalhar com montagem de computadores gamer e para alto desempenho
        </p>
        <div className={styles.second_title_background}>
          <p>APRENDA</p>
        </div>
        <div className={styles.second_title}>
          <h1>VOCÊ VAI APRENDER</h1>
        </div>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h2>MÓDULO 1</h2>
            <h3>Administração do Negócio</h3>
            <p>
              Os fundamentos para iniciar sua carreira e negócio no mercado de
              Hardware
            </p>
            <ul>
              <li>- Como administrar seu negócio</li>
              <li>- Quanto cobrar por seus serviços</li>
              <li>- Como calcular seu lucro</li>
            </ul>
          </div>
          <div className={styles.card}>
            <h2>MÓDULO 2</h2>
            <h3>Estratégias para atrair clientes</h3>
            <p>A estratégia para conseguir clientes todos os dias</p>
            <ul>
              <li>- Como divulgar seus serviços</li>
              <li>- Como gerar confiança nos clientes</li>
              <li>- Como encontrar os melhores clientes</li>
            </ul>
          </div>

          <div className={styles.card}>
            <h2>MÓDULO 3</h2>
            <h3>Capacidade Técnica</h3>
            <p>Tudo sobre o funcionamento de um computador</p>
            <ul>
              <li>- Quais são os componentes de um computador</li>
              <li>- Como as peças funcionam</li>
              <li>
                - Entenda as especificações técnicas de cada peça de computador
              </li>
            </ul>
          </div>
          <div className={styles.card}>
            <h2>MÓDULO 4</h2>
            <h3>Solucionando Problemas</h3>
            <p>
              Aprenda a parte prática da montagem e manutenção de computador
            </p>
            <ul>
              <li>- Como escolher a configuração</li>
              <li>- Como montar um computador</li>
              <li>- Como fazer uma limpeza completa</li>
              <li>- Como descobrir o problema de um pc</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.second_section}>
        <div className={styles.second_section_title_background}>
          <p>Matheus Messias</p>
        </div>
        <div className={styles.second_section_title}>
          <h1>Quem sou eu e porque posso te ajudar</h1>
        </div>
        <div className={styles.second_section_content}>
          <div className={styles.list}>
            <ul>
              <li>
                <p>Olá, eu sou Matheus Messias,</p>
              </li>
              <br />
              <li>
                <p>
                  Técnico em Informática com mais de 4 anos de experiência em
                  montagem e manutenção de computadores de alto desempenho em
                  Juiz de Fora
                </p>
              </li>
              <br />
              <li>
                <p>
                  Resolvi após amplo contato com as necessidades de diversos
                  tipos de clientes criar um método para te ensinar tudo o que
                  aprendi na prática, atuando no mercado de Hardware para
                  computadores
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.start_now}>
          <button className={styles.button}>QUERO COMEÇAR AGORA</button>
          <div className={styles.payment}>
            <img src={payment} alt="" />
          </div>
          <div className={styles.payment_details}>
            <div className={styles.payment_details_card}>
              <MdOutlineWatchLater />
              <h2>Acesso Imediato</h2>
            </div>
            <div className={styles.payment_details_card}>
              <CiMedal />
              <h2>Garantia de 7 dias</h2>
            </div>
            <div className={styles.payment_details_card}>
              <MdMonitor />
              <h2>Totalmente Online</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.third_section}>
        <h1>Veja alguns exemplos do que você será capaz de fazer</h1>
        <div className={styles.third_section_content}>
          <video
            className={styles.video}
            autoPlay={true}
            loop={true}
            muted={true}
            height="900"
            src={video}
          ></video>
          <div className={styles.images}>
            <img src={image5} alt="" />
            <img src={image1} alt="" />
            <img src={image2} alt="" />
            <img src={image4} alt="" />
          </div>
        </div>
        <div className={styles.start_now}>
          <button className={styles.button}>QUERO COMEÇAR AGORA</button>
          <div className={styles.payment}>
            <img src={payment} alt="" />
          </div>
          <div className={styles.payment_details}>
            <div className={styles.payment_details_card}>
              <MdOutlineWatchLater />
              <h2>Acesso Imediato</h2>
            </div>
            <div className={styles.payment_details_card}>
              <CiMedal />
              <h2>Garantia de 7 dias</h2>
            </div>
            <div className={styles.payment_details_card}>
              <MdMonitor />
              <h2>Totalmente Online</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
