const capitulo = () => {
    return(
        <>
            <h2><span style="color:green"><i class="fab fa-node-js"></i> </span>Seção 8 - Node.js e MySQL</h2>

            <h3>O que são bancos relacionais?</h3>

            <p>São estruturas para armazenamentos de dados que conversam entre si. Os bancos de dados
                relacionais tem as seguintes entidades:</p>

            <ul>
                <li>Bancos de dados: são conjuntos de tabelas</li>
                <li>Tabelas: local onde armazenamos os dados</li>
                <li>Colunas: separação categorizada dos dados</li>
                <li>Dados: aquilo que é inserido, lido, modificado ou removido</li>
                <li>Relacionamentos: ligações entre as tabelas</li>
            </ul>

            <h3>O que é o MySQL</h3>

            <p>É um sistema gerenciador de bancos de dados (SGBD). Ele nos ajuda a trabalhar com bancos de dados
                relaionais. É o sgbd mais utilizado atualmente. Muitos projetos Node.js utilizam MySQL (alguns
                utilizam bancos não relacionais (MongoDB)).</p>

            <H3>Instalação do MySQL no Windows</H3>

            <p style="background-color: yellow;color:red"> O professor usou o Xampp para trabalhar com o banco
                de dados local, eu vou usar diretamente a configuração do MySQL. </p>
            <div class="inativo" style='border: red 1px solid'>
                <p>Vai ser instalado com o XAMPP.</p>

                <p>Para utilizá-lo nós temos que dar o start no painel do xampp</p>
            </div>


            <h3>Executando o MySQL pelo terminal</h3>
            <div class="inativo">
                <p>Para conseguir executar o mysql no terminal nós temos que adicionar o caminho da pasta bin do
                    mysql do xampp no path das variáveis de ambiente.</p>

                <p>Depois do processo de definir a variável de ambiente pode ser necessário reiniciar o pc.</p>

                <p>Para confirmar se o mysql está ok nós temos que estar com o mysql startado no painel do xampp
                    e dar o comando <b>mysql -u root</b>, que faz o chamado do mysql com o usuário root, que é o
                    padrão criado pelo próprio programa. Esse comando gera uma mensagem de boas vindas do maria
                    db.</p>

                <p>Para desconectar do banco damos o comando <b>exit</b></p>
            </div>
            &lt;!--fim do inativo--&gt;

            <p>Para usar o mysql no terminal nós temos que adicionar o caminho da pasta bin do server do mysql
                no path das variáveis de ambiente. Depois disso, no terminal, damos o comando <b>mysql -h
                    localhost -u root -p</b> será solicitada a senha do nosso mysql e depois estaremos dentro.
            </p>

            <h3>Instalação no Linux</h3>

            <p>A instalação no linux é mais simples. Voltaremos novamente em outro momento para aprender.</p>

            <h3>Workbench</h3>

            <p>É um software da empresa MySQL (Oracle) que cria uma interface gráfica para trabalhar com o
                MySQL.</p>

            <p>Existem outras ferramentas, mas ele usará esta no curso.</p>

            <p>Temos que instalá-lo a partir do download do instalador na <a
                    href="https://dev.mysql.com/downloads/windows/installer/8.0.html">página do MySQL</a>. Foi
                baixada a versão community (não a web-community).</p>

            <h3>HeidiSQL</h3>

            <P>No momento do curso, o HeidiSQL era uma alternativa ao Workbench. É só dar um google e baixar.
            </P>

            <h3>Conectando o Node ao MySQL</h3>

            <p>No workbench nós clicamos no botão de criação de banco (o símbolo do botão de criação do banco é
                parecido com o seguinte: <i class="fas fa-database"></i>.</p>

            <p>Primeiramente temos que instalar o driver (pacote) do mysql através do npm, depois conectar o
                projeto ao banco, passando o host, user, password e nome do banco.</p>

            <p><a href="#">GitHub - 8_MYSQL\1-instalacao-mysql</a></p>

            <H3>Criando uma tabela</H3>

            <p>Tabela é o local onde inserimos os dados e para manipulá-los. Faremos a manipulação e criação de
                tabelas pelo workbech, mas também é possível fazer pela linha de código.</p>

            <p>Para criar uma tabela clicamos no botão ao lado do de criar um banco. Na página que segue vamos
                criando os dados necessários.</p>

            <p>O id geralmente é a nossa primeira coluna. Colocamos a constraint primary key, auto increment e
                not null para esta coluna.</p>

            <p>Nesta aula nós criamos uma tabela chamada books e nela nós colocamos as colunas id (INT), title
                (VARCHAR(200)) e pageqty(INT)</p>

            <h3>Inserindo dados na tabela</h3>

            <p>Para inserir dados precisamos criar e executar uma query. Essa query é uma string que será criada
                dentro do projeto node.</p>

            <p><a href="#">github - 8_MYSQL\2-inserindo-dados</a></p>

            <h3>Resgatando dados</h3>

            <p><a href="#">github - 8_MYSQL\3-lendo-dados</a></p>

            <h3>Editando dados</h3>

            <p><a href="#">GitHub - 8_MYSQL\4-edicao-dados</a></p>

            <h3>Excluindo dados</h3>

            <p><a href="#">GitHub - 8_MYSQL\5-deletando-dados</a></p>

            <h3>Connetion Pool</h3>

            <p>É um recurso para otimizar as conexões com o banco, criando um cache, que permite a consulta de
                dados "mais recentes" sem a necessidade de ir no banco fazer as querys.</p>

            <p>O driver mysql que utilizamos aqui no node já tem esse recurso.</p>

            <p>Para usá-lo nos usamos o método mysql.createPool, passando os mesmos argumentos que
                createConnection com a diferença que aqui também definimos um connectionLimit, que vai matar
                conexões inativas ou desnecessárias mantendo apenas o número especificado de conexões.</p>

            <p>Esse recurso é importante para utilizar memória apenas nas ações necessárias evitando inclusive a
                queda da aplicação.</p>

            <p>Ao usar o pool nós podemos descartar, portanto o createConnection e o connect realizado por ele,
                e trocar os conn, adivindos do connect por pool.</p>

            <p><a href="#">GitHub - 8_MYSQL\6-connection-pool</a></p>

            <h3>Preparar query</h3>

            <p>Evita SQL Injection, nós vamos colocar duas interrogações nos nomes das colunas e uma
                interrogação no valor do atributo do dado. Depois nós colocamos a ordem de substituição das
                interrogações em um array e passamos esse array no método de query pro banco.</p>
        </>
    )
}