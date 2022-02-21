const introducao = () => {
    return(
        <>
<h2 id="se-o-2-fundamentos-de-node-js"><span style="color:green"><i class="fab fa-node-js"></i> </span>Seção
                2 - Fundamentos de Node.js</h2>

            <h3 id="2-18-o-que-s-o-m-dulos">2.18 - O que são módulos</h3>

            <p>São conjuntos de variáveis e funções (scripts) reaproveitáveis, ou seja, que podemos importar de algum
                lugar e usar no nosso código.</p>

            <ul>
                <li>Internos - aqueles que nós desenvolvemos</li>
                <li>Core modules - vem com a instalação do node.js</li>
                <li>Externos - aqueles que instalamos via npm</li>
            </ul>

            <h4 id="2-19-m-dulos-internos">2.19 - Módulos internos</h4>

            <p><a href="https://github.com/pvcdo/estudos-nodejs/tree/main/2_FUNDAMENTOS/1_modulo_interno">Github</a></p>

            <h3 id="2-20-import-e-export">2.20 - Import e export</h3>

            <p>É a mesma coisa do export default e import do React. Para usarmos essa sintaxe, porém, o arquivo deve ser
                de extensão <b style="color: green">.msj</b></p>

            <p>[GitHub]</p>

            <p>Até o momento da gravação da aula o padrão é o uso do require (importação) e module.exports (exportação)
            </p>

            <h3 id="2-22-lendo-argumentos-da-linha-de-comandos">2.22 - Lendo argumentos da linha de comandos</h3>

            <p>Pode ser passado um ou mais argumentos na linha de comandos, logo após a solicitação de execução de um
                script. Esses argumentos são armazenados em um array nativo do node e que não precisa ser importado,
                esse array é o process.argv.</p>

            <h4 id="2-23-m-dulos-externos">2.23 - Módulos externos</h4>

            <p>Para instalar módulos externos nós temos que dar o comando &gt;&gt; npm init &lt;&lt; para gerarmos o mapeamento dos
                    módulos e criar a pasta node_modules, onde serão instalados os módulos baixados.</p>

                    <p>Ao dar o comando npm init o sistema nos pergunta alguns dados para a criação do node_modules.</p>

                    <p>Os módulos externos ajudam a executar mais facilmente coisas que nós poderíamos demorar muito
                        para fazer.</p>

                    <h3>Explorando o console</h3>

                    <p>Não existe apenas o .log no console.</p>

                    <p><a href=''>GitHub</a> -&gt; 2-7-explorando-console</p>

                    <h3>Chalk</h3>

                    <p>É um módulo para estilizar console.log</p>

                    <a href="https://www.npmjs.com/package/chalk">NPM</a>

                    <h3>Lendo input de dados</h3>

                    <p>Neste caso podemos usar o método core "readline" e seu método question</p>

                    <a href="">GitHub - 2-9-readline</a>

                    <h4 id="inquirer">Módulo externo - Inquirer</h4>

                    <p>O professor promete ser um método mais fácil que o readline para gerar questionamentos ao usuário
                        pela linha de comandos.</p>

                    <p><a href="https://www.npmjs.com/package/inquirer">NPM</a></p>

                    <h3 id="event_emitter">Event emitter</h3>

                    <p>É uma classe do módulo events (que é um core module) e se comporta como os eventos do navegador
                        (click, onkeydown, onkeyup, onmousedown, etc...), são gatilhos no script.</p>

                    <p><a href="#event_emitter">Github</a></p>

                    <h3>Códigos Síncronos e assíncronos</h3>

                    <p>Esses termos se referem à ordem de execução dos métodos e funções declarados no nosso script. Se
                        temos um método síncrono nós estamos indicando que ele deve ser finalizado antes de que o
                        próximo método seja executado.</p>

                    <p>Já um método assíncrono permite que o resto do código seja executado enquanto esse método não tem
                        concluída a sua resposta.</p>

                    <h3>Erros no node</h3>

                    <p> Podemos usar o comando <b>throw</b>, que vai encerrar a execução do código e indicar o erro
                        através da instância de um objeto Error; ou pedemos usar os blocos try...catch que vai tentar
                        executar um código no try, que caso não passe irá ser criado um objeto de erro que poderá ser
                        tratado no catch como um objeto.</p>
                        </>
    )
}