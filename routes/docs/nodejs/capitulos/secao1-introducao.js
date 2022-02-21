const introducao = () => {
    return(
        <>
            <h2 id="se-o-1-introdu-o"><span style="color:green"><i class="fab fa-node-js"></i> </span>Seção 1 -
                Introdução</h2>

            <h3 id="1-3-o-que-o-nodejs-">1.3 - O que é o NodeJS?</h3>

            <p>O nodeJS é uma biblioteca utilizada por um compilador, transformando um texto JavaScript em uma linguagem
                de baixo nível.</p>

            <p>O compilador é o V8 engine do Google que transforma o JS em C++. Linguagens de alto nível são mais
                pesadas para rodar, ao transformar o JS em C++ ganha-se em performance.</p>

            <h3 id="1-4-o-que-o-npm-">1.4 - O que é o NPM?</h3>

            <p>O npm é o gerenciador de pacotes do node (e também de outras bibliotecas javascript, como o react), ou
                seja, vai nos permitir baixar bibliotecas de terceiros ou aquelas não nativas que vão nos auxiliar.</p>

            <p>Também alguns comandos são disparados a partir do npm, ou seja, executar scripts.</p>

            <h3 id="1-8-cmder">1.8 - Cmder</h3>

            <p>É um cmd que simula o do Linux, com os mesmos comandos desse, o que trás uma gama de conhecimentos
                interessante para quem quer atuar na área de programação, uma vez que muitos serviços são baseados em
                linux. Outro ponto é que programas, como o docker, precisam de comandos que rodam melhor em um ambiente
                dessa forma.</p>

            <h3 id="1-10-executando-o-primeiro-programa">1.10 - Executando o primeiro programa</h3>

            <p>Os programas são salvos com a extensão ".js". Para executar o comando nós podemos executar via terminal o
                comando &gt;&gt; node &lt;&lt; dentro da pasta onde criamos o programa e passar o nome do arquivo.</p>

            <h3 id="1-11-utilizando-um-m-dulo">1.11 - Utilizando um módulo</h3>

            <p>Módulos são como classes que contém funções e variáveis para executarmos com o Node. Podemos usar módulos
                que já são disponibilizados pelo próprio node na sua intalação (módulos core); módulos de terceiros
                (baixados) e nossos próprios.</p>

            <p>Para usar módulos nós devemos dar um comando de importação (import ou require). O require é mais antigo
                que o import.</p>

            <h3 id="tarefa">TAREFA</h3>

            <p><a href="https://github.com/pvcdo/estudos-nodejs/tree/main/1_INTRO/tarefa">Github</a></p>
        </>
    )
}