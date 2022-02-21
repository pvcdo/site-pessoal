const capitulo = () => {
    return(
        <>
            <h2>Seção 9 - Utilizando o Sequelize no Node.js</h2>

            <h3>Introdução</h3>

                <p>É uma framework para simplificar as queries sql</p>

            <h3>O que é uma ORM</h3>

                <p>O sequelize é considerado uma ORM (Object Relational Mapper - Mapeamento relacional de objetos) para bancos relacionais.</p>

                <p>Simplifica o tratamentos no banco de dados SQL, trazendo nossa preocupação mais para as regras de negócio.</p>

                <p>O sequelize gera as queries SQL por baixo dos panos.</p>

            <h3>O que é o Sequelize</h3>

            <p>É uma ORM para nodejs. Baseada em promises (then, catch). Tem integração com vários bancos relacionais, como postegrees, sqlite, mysql (no nosso caso vamos usar mysql). Temos que criar um model, precisamos instalar o pacote pois é um módulo externo.</p>
        </>
    )
}