import React from 'react';
import './index.scss'; // css
import { Link } from 'react-router-dom';



export default function Home() {
 
  return (
    <header className='pagina-home'>
      {/* Navbar */}
      <div className="noselect" id="navbar">
        <a href="http://localhost:3000/" id="logo">&nbsp;VeeGan&nbsp;</a>
        <div id="navbar-right">
          <Link to="/login" id="textmenu3">Login</Link>
        </div>
      </div>

      {/* Banner */}
      <div className="banner4 noselect container">
        <h4>VeeGan</h4>
        <h1 className="sentence">Alimentação
          <div className="slidingVertical">
            <span>saudável,</span>
            <span>sustentável,</span>
            <span>e amigável.</span>
          </div>
        </h1>
      </div>

      {/* Segundo Menu */}
      <div className="topnav noselect">
        <ul className="nav main">
          <li><a href="#sobreveegan">Sobre Nos</a></li>
          <li><a href="#faleconosco">Fale Conosco</a></li>
          <li><a href="#conteudo">Sushis</a></li>
          <li><a href="#forum">Fórum</a></li>
          <li><a href="#local">Localização</a></li>
          <li><a href="/boxes">VeeganBox</a></li>
        </ul>
      </div>

      {/* Conteúdo 1 */}
      <div className="conteudo">
        <div id="texto">
          <h1>Serviços</h1>
          <p>Desfrute da deliciosa experiência dos sushis veganos na movimentada Liberdade! Venha saborear nossos  frescos e autênticos, disponíveis diariamente perto das barracas de comida próximas à Catedral da Liberdade. Estamos abertos das 12:00 às 17:00 segunda/sexta , oferecendo uma seleção limitada de sushis feitos com ingredientes frescos e locais. Se não conseguir encontrar-nos, não se preocupe! Você pode entrar em contato pelo número 11 99602 9782 para fazer suas encomendas personalizadas. Experimente uma alternativa saudável e saborosa hoje mesmo!</p>
        </div>
      </div>

      {/* Fale Conosco */}
      <div className="conteudo noselect main">
      <a className="Ancorabaixa" id="faleconosco" />
        <br />
        <h1>Fale Conosco！</h1>
        <form id="contact" action="" method="post">
          <fieldset>
            <p>Nome e Sobrenome</p>
            <input placeholder="Nome e Sobrenome" type="text" tabIndex="1" required />
          </fieldset>
          <fieldset>
            <p>Email</p>
            <input placeholder="Endereço de Email" type="email" tabIndex="2" required />
          </fieldset>
          <fieldset>
            <p>Assunto</p>
            <select tabIndex="4" required>
              <option>Trabalhe Conosco</option>
              <option>Pergunta</option>
              <option>Fanmail</option>
              <option>Reportar Bug</option>
              <option>Outros</option>
            </select>
          </fieldset>
          <fieldset>
            <p>Mensagem</p>
            <textarea placeholder="Sua mensagem..." />
          </fieldset>
          <fieldset>
            <button type="submit" id="contact-submit" data-submit="...Enviando">Enviar</button>
          </fieldset>
        </form>
      </div>

      {/* Banner 3 */}
      <div className="banner3 noselect container">
        <a className="Ancorabaixa" id="forum" />
        <h4>Conheça mais Veganismo</h4>
        <button className="card pointer">
          <a href="https://veganismo.org.br/veganismo/"><h2>Ir para os Fóruns</h2></a>
        </button>
      </div>

      {/* Conteúdo 2 - Sobre Nós */}
      <div className="conteudo container">
        <a className="Ancora" id="sobreveegan" />
        <h1>Sobre Nós</h1>
        <p>"Olá! Eu sou Yuri Akahoshi, o empreendedor por trás da barraca de sushis veganos na encantadora Liberdade. Trabalho arduamente nos fins de semana no bairro da liberdade para custear minha faculdade, buscando um futuro na área da gastronomia. Com todos os documentos e certificações em ordem, tenho minha própria barraca, onde preparo com carinho cada sushi com ingredientes frescos e locais. Convido vocês a conhecerem nosso ponto na Liberdade ou entrar em contato para qualquer dúvida ou encomenda. Desde fevereiro de 2022, tenho me dedicado a este negócio com grandes planos para o futuro. Espero vê-los em breve!"</p>
      </div>
  
      {/* Conteúdo 2 - Combo Emperor */}
      <div className="conteudo container">
        <a className="Ancora" id="conteudo" />
        <div className='some-page-wrapper'>
          <div className='row'>
            <div className='column'>
              <div className='green-column'>
                <img className="Imagem2" src="https://cbncuritiba.com.br/wp-content/uploads/2022/08/WhatsApp-Image-2022-08-17-at-09.54.01.jpeg" />
              </div>
            </div>
            <div className='column'>
              <div className='blue-column'>
                <h1>Combo Emperor</h1>
                <p>"O combo inclui um combinado com 22 peças, o Emperor, que serve até duas pessoas e inclui Niguiri de brócolis com toque de teriyaki, Niguiri de berinjela empanada, Hot roll vegano, Uramaki de abacate com alho-poró, Joe de cenoura e repolho roxo marinado no molho especial e Joe de pepino e shimeji."</p>
                <button className="botao1 pointer">
                  <a><h2>Encomenda+ 11996029782</h2></a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      {/* Conteúdo 2 - White Tiger */}
      <div className="conteudo container">
        <div className='some-page-wrapper'>
          <div className='row'>
            <div className='column'>
              <div className='blue-column'>
                <h1>White Tiger</h1>
                <p>"Este sushi vegano combina ingredientes frescos e saudáveis, como arroz, alga nori, pepino e abacate, todos veganos. Outras opções incluem tofu, tempeh, shiitake e edamame. Uma escolha deliciosa e consciente para os amantes da culinária vegana."</p>
                <button className="botao1 pointer">
                  <a><h2>Encomenda+ 11996029782</h2></a>
                </button>
              </div>
            </div>
            <div className='column'>
              <div className='green-column'>
                <img className="Imagem1" src="https://veganbusiness.com.br/wp-content/uploads/2019/09/sushi-vegano.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>
      {/* Conteúdo 3 - Purple Dragon */}
      <div className="conteudo container">
        <div className='some-page-wrapper'>
          <div className='row'>
            <div className='column'>
              <div className='green-column'>
                <img className="Imagem2" src="https://veganandcolors.com/wp-content/uploads/2017/02/cn-750x658.jpg" />
              </div>
            </div>
            <div className='column'>
              <div className='blue-column'>
                <h1>Purple Dragon</h1>
                <p>"Purple Dragon" é uma fusão deliciosa de sabores e cores, com uma base de arroz roxo e recheio fresco, incluindo abacate, alface, cenoura, pepino, tofu e pimentão vermelho. Essa combinação oferece uma experiência culinária única, inspirada nas tradições asiáticas de preparo. Temos outras versões de vários sabores."</p>
                <button className="botao1 pointer">
                  <a><h2>Encomenda+ 11996029782</h2></a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Perguntas Frequentes */}
      <div className="conteudo">
      <div class="panel-gray">
    <h1>Perguntas Frequentes</h1>
    <br />
    <div class="panel-gray">
      <p>Por que devo consumir produtos veganos e quais são suas vantagens?</p>
      <p>Consumir produtos veganos oferece benefícios significativos para sua saúde e para o meio ambiente. Ao optar por uma dieta vegana, você contribui para a redução do sofrimento animal, promove a sustentabilidade e aumenta a diversidade de alimentos em sua dieta, proporcionando uma vida mais equilibrada e compassiva.</p>
    </div>
    <div class="panel-white">
      <p>Como eu entro em contato com a Veegan?</p>
      <p>Você pode entrar em contato conosco preenchendo o formulário de contato em nosso site ou enviando um e-mail para contato@veegan.com. Estamos sempre prontos para ajudar!</p>
    </div>
    <div class="panel-gray">
      <p>Quais são as fontes da Veegan?</p>
      <p>Na Veegan, valorizamos ingredientes frescos e de qualidade. Todos os nossos ingredientes são adquiridos diariamente nas feiras locais da Liberdade, de manhã cedo. Acreditamos que essa abordagem garante a qualidade e o sabor excepcionais dos nossos sushis veganos.</p>
    </div>
    <div class="panel-white">
      <p>Qual horário estamos abertos?</p>
      <p>Estamos abertos de segunda a sexta das 12h às 17h. As peças são feitas por remessas, então podem acabar rapidamente.</p>
    </div>
  </div>
</div>
      
      {/* Localização */}
      <div className="conteudo container">
        <a className="Ancora" id="conteudo" />
        <div className='some-page-wrapper'>
          <div className='row'>
            <div className='column'>
              <div className='green-column'>
                <iframe
                  title="Localização do VeeGan"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d323.26836870953247!2d-46.635331655402304!3d-23.555363666430292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59a999be661f%3A0xa1b6b41ad0551c52!2sFeira%20da%20Liberdade!5e0!3m2!1sen!2sbr!4v1715975135632!5m2!1sen!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: '0' }}
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className='column'>
              <div className='blue-column'>
                <h1>Localização</h1>
                <p>"Estamos localizados na Liberdade, sempre em frente à Catedral, à direita do metrô na saída da Liberdade"</p>
                <button className="botao1 pointer">
                  <a href="#"><h2>Aberto de segunda/sexta</h2></a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      .

      {/* Rodapé */}
      <footer className="footer">
        <a className="Ancora" id="local" />
        <div className="grid-container">
          <div className="grid-item">
            <ul>
              <h6>Redes Sociais</h6>
              <li><a href="https://www.facebook.com" target="self">Facebook</a></li>
              <li><a href="https://www.twitter.com" target="self">Twitter</a></li>
              <li><a href="https://www.instagram.com/" target="self">Instagram</a></li>
            </ul>
          </div>
          <div className="grid-item">
            <ul>
              <h6>Contato</h6>
              <li><a>Praça Liberdade</a></li>
              <li><a>Tel: 11 98602 9782</a></li>
              <li><a>Email: VeeGan@gmail.com</a></li>
            </ul>
          </div>
          <div className="grid-item">
            <ul>
              <h6>Ajuda</h6>
              <li><a href="#faleconosco">Fale Conosco</a></li>
            </ul>
          </div>
        </div>
        <br />
        <h6>Copyright &copy; 2024 - VeeGan</h6>
      </footer>
    </header>
    
    
  );
}

