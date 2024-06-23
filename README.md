# Medicar API com Node.js e Express

Bem-vindo à minha API! Esta API foi desenvolvida utilizando Node.js e o framework Express. Abaixo você encontrará instruções para configurar e utilizar a API, bem como uma visão geral das suas funcionalidades.

## Índice

- [Instalação](#instalação)
- [Uso](#uso)
- [Rotas Disponíveis](#rotas-disponíveis)

## Instalação

Para começar a usar a API, siga os passos abaixo:

1. Clone este repositório:
    ```bash
    git clone https://github.com/mykaeull/intmed-challenge-backend.git
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd nome-do-repositorio
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Crie um arquivo `.env` na raiz do projeto e configure as variáveis de ambiente necessárias (se houver).

5. Inicie o servidor:
    ```bash
    npm run dev
    ```

## Uso

Após iniciar o servidor, a API estará disponível no endereço `http://localhost:3000` (ou `https://medicar-api-15aa6eaeb773.herokuapp.com/`). Utilize uma ferramenta como Postman ou cURL para fazer requisições às rotas disponíveis.

## Rotas Disponíveis

Aqui está uma lista das principais rotas disponíveis na API:

- **POST /users/login**: Retorna um token de autenticação para acessar as demais rotas.
- **POST /users/register**: Cria um novo usuário.
- **GET /specialities**: Retorna uma lista de especialidades.
- **GET /doctors**: Retorna uma lista de médicos.
- **GET /schedules**: Retorna uma lista de agendas.
- **GET /consultations**: Retorna uma lista de consultas.
- **POST /consultations**: Cria uma nova consulta.
- **DELETE /consultations/:id**: Exclui uma consulta pelo ID.
