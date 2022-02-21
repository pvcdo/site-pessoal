const capitulo = () => {
    return(
        <>
            <h2><span style="color:green"><i class="fab fa-node-js"></i> </span>Seção 6 - Introdução ao Express
                    </h2>

                    <p>Framework para back-end para nodejs. Podemos criar API's e page reloaders.</p>

                    <h3>O que é o Express?</h3>

                    <p>Serve para agilizarmos a criação de aplicações web, desde renderizações html com integração com
                        bancos de dados e rotas com o nodeJS.</p>

                    <p>Ele é um pacote npm e sua instalação é <b>npm i express</b>. Antes de instalá-lo, temos que
                        iniciar o npm no diretório do nosso projeto em express</p>

                    <h3>Rotas em Express</h3>

                    <p>As rotas são as url's que nós acessamos. Estão presentes depois da barra, no fim do domínio. A
                        rota raiz é a /. Cada rota está atrelada a uma funcionalidade, ou seja, ao ser acessada, dispara
                        uma lógica.</p>

                    <p><a href="#">GitHub - 6_EXPRESS\2-setup</a></p>

                    <h3>Renderizando HTML</h3>

                    <p>Para renderizar um html temos que passar o comando sendFile('documento com caminho completo')</p>

                    <p><a href="#">GitHub - 6_EXPRESS\3-render-html</a></p>

                    <h3>Nodemon - atualização automática</h3>

                    <p>Esse módulo faz com que cada vez que salvarmos um documento e atualizarmos a página que está
                        rodando o projeto, essa atualização seja já renderizada no navegador, sem precisar matar o
                        projeto e reiniciá-lo para ver as alterações.</p>

                    <p>O ideal é salvar esse pacote para o ambiente de desenvolvimento, portanto sua instalação ideal é
                        <b>npm i --save-dev nodemon</b></p>

                    <p>Depois de instalar o nodemon, nós vamos no package.json e criamos o script start passando os
                        seguintes valores para ele <span style="color:orangered">"nodemon .index.js ((ou outro documento
                            que estejamos utilizando)) localhost 3000 ((ou outra porta que estivermos
                            utilizando))"</span></p>

                    <p>Desta forma o projeto será executado não mais utilizando o comando node index.js, mas sim o
                        comando <b>npm start</b></p>

                    <p><a href="#">GitHub - 6_EXPRESS\4-nodemon</a></p>

                    <h3>Middlewares</h3>

                    <p>Códigos que podem ser executados entre uma ação e outra. Por exemplo, verificar se o usuário está
                        autenticado.</p>

                    <p>Utilizamos o método <span style="color:green">use</span> do Express para utilizar middlewares.
                    </p>

                    <p>O método <span style="color:green">use</span> espera uma função que tem 3 parâmetro (requisição,
                        resposta, next) e a partir dela é feita a lógica de middleware</p>

                    <p><a href="#">GitHub - 6_EXPRESS\5-middleware</a></p>

                    <h3>Parâmetros pela url</h3>

                    <p>É possível recuperar e trabalhar com parâmetros passados pela url da requisição.</p>

                    <p><a href="#">GitHub - 6_EXPRESS\6-params-url</a></p>

                    <h3>Enviando dados pelo método POST</h3>

                    <p>É um método de envio de dados de um formulário para um banco de dados através de uma lógica
                        (action) estabelecida em uma url.</p>

                    <p><a href="#">GitHub - 6_EXPRESS\7-post-dados</a></p>

                    <h3>Módulo de rotas</h3>

                    <p>Nós podemos separar as rotas passadas pelo app.get e app.post tirando do documento de lógica
                        principal e colocar em uma pasta. Depois disso colocamos um middleware, a partir do app.use,
                        para ficar verificando a rota passada e ir para a pasta que controla essa rota.</p>

                    <p>No arquivo de rotas nós temos que usar ao invés de app.get ou app.post router.get e router.post,
                        sendo esse router um método importado de express. Temos que no final do arquivo de rotas fazer a
                        exportação de router. É nessário também no arquivo de rotas atualizar o templatesPath.</p>

                    <p>Para isso funcionar, temos que exportar as rotas do documento de rotas para o documento da
                        aplicação principal. </p>

                    <p><a href="#">GitHub - 6_EXPRESS\8-modulo-rotas</a></p>

                    <h3 id='express-css'>Colocando CSS</h3>

                    <p>Para colocar os estilos css nós vamos colocar no arquivo principal da aplicação o comando
                        <b>app.use(express.static("path relativo da pasta que armazenará todas as pastas com documentos
                            estáticos, não apenas as folhas de estilo. Geralmente esta pasta é a ./public"))</b></p>

                    <p>Já nos aquivos html que estivermos escrevendo, nós vamos chamar a folha de estilo através da tag
                        link e o href será passado como se já estivéssemos dentro da pasta que armazena os estáticos.
                    </p>

                    <p><a href="#">GitHub - 6_EXPRESS\9-css</a></p>
        </>
    )
}