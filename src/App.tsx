import React, { useState } from 'react';
import { Header, HeaderItem, Body, Avatar, Bibliography, MyName } from './components/';
import GlobalStyle from './globalStyles';
import avatarImg from "./assets/images/doge.jpg"

var aux = [{ titulo: "5 dicas para sua carreira profissional", subTitulo: "Confira algumas dicas que podem ajudar a alavancar sua carreira como desenvolvedor front-end" }]
const dicas = [...aux, ...aux, ...aux, ...aux, ...aux, ...aux, ...aux, ...aux]
const headerNames: Array<string> = ['Blog', 'Sobre', 'Descrição']

const nome: string = 'André Luis Barbosa Coutinho'
const biografia: string = `Atualmente sou desenvolvedor iOS utilizando a linguagem Swift. possuo 2 anos de experiência no seguimento EdTech atuando com Laravel, PHP,  HTML, Css, sass, javascript e React Native num time ágil Scrum. Sou estudante na pós graduação em Arquitetura de Software Distribuído na PUC MG. Comecei a estudar por conta própria sobre devops e automação de alguns processos com conceitos de CI/CD e criação de pipelines utilizando o Azure DevOps.
Já atuei como residente técnico da Microsoft utilizando .NET, ASP e Xamarim. 
Atuei em uma empresa de advocacia como prestador de serviços de infraestrutura como administrador de servidor AD, rede, manutenção de notebooks, desktops.
Possuo experiência na área de segurança do trabalho como administrador de um sistema de saúde, higiene e segurança do trabalho. 
Experiência no setor operacional na empresa brasileira de correios e telégrafos.`

function App() {
  const [verTudo, setVerTudo] = useState<Boolean>(false)
  const onClickVerTudo = () => setVerTudo(!verTudo)
  return (
    <div className="App">
      <GlobalStyle />
      <Header>
        {
          headerNames.map(name => <HeaderItem>{name}</HeaderItem>)
        }
      </Header>
      <Body>
        <Avatar src={avatarImg}></Avatar>
        <div className="bibliografia">
          <MyName>{nome}</MyName>
          <Bibliography>{biografia}</Bibliography>
        </div>
      </Body>
      <div className="center margin16 flex-direction-column">
        <div className="width50">
          <h1 className="marginVertical16">Últimas do blog</h1>
          {dicas.map((dica, i) => {
            if (i > 2 && !verTudo)
              return <></>
            else
              return (
                <>
                  <h3 className="randomTextColor">{dica.titulo}</h3>
                  <h5 className="textGray marginVertical16">{dica.subTitulo}</h5>
                </>
              )
          })}
          <a onClick={onClickVerTudo} className="cursorPointer colorBlue">{verTudo ? 'Ver menos' : 'Ver tudo'}</a>
        </div>
      </div>
    </div>
  );
}

export default App;
