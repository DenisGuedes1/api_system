API para Pedidos de Lanchonete/Restaurante
Esta API foi desenvolvida para permitir que os usuários façam pedidos através de um aplicativo e que esses pedidos sejam recebidos pelo painel do dono da lanchonete ou restaurante.

Dependências
cors - Middleware para habilitar o CORS (Cross-Origin Resource Sharing).
dotenv - Carrega variáveis de ambiente de um arquivo .env.
express - Framework web para Node.js.
express-async-errors - Tratamento de erros assíncronos no Express.
jsonwebtoken - Geração e verificação de tokens de autenticação.
mailgen - Geração de templates de e-mail.
nodemailer - Módulo para envio de e-mails.
pg - Cliente PostgreSQL para Node.js.
reflect-metadata - Metadados para decoração de classes.
typeorm - ORM (Object-Relational Mapping) para TypeScript e JavaScript.
uuid - Geração de identificadores únicos.
zod - Validação de esquemas para TypeScript.
Scripts
dev: Inicia o servidor local em modo de desenvolvimento usando ts-node-dev.
build: Compila o código TypeScript para JavaScript.
start: Inicia o servidor após a compilação.
typeorm:migration:run: Executa as migrações do TypeORM.
DevDependencies
bcryptjs e @types/bcryptjs: Biblioteca para hash de senhas.
typescript e ts-node: Superset tipado de JavaScript.
ts-node-dev: Monitora alterações nos arquivos e reinicia o servidor automaticamente.
Instalação
Clone este repositório.
Execute npm install para instalar as dependências.
Crie um arquivo .env seguindo o exemplo do arquivo .env.example e preencha as variáveis de ambiente necessárias.
Configuração
Certifique-se de configurar corretamente os arquivos de ambiente e ajustar as configurações conforme necessário para a conexão com o banco de dados, autenticação, e-mails, entre outros.

Uso
Execute npm run dev para iniciar o servidor local em modo de desenvolvimento.
Utilize as rotas da API conforme documentação fornecida no código.
Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas (issues) e enviar pull requests.

Licença
Este projeto está licenciado sob a Licença ISC. Consulte o arquivo LICENSE para obter mais detalhes.