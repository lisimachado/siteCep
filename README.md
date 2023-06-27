## Hot site de CEP 

Repositório criado para projeto de um Hot site de CEP, com objetivo de demonstrar alguns conhecimentos em frontend em um processo seletivo

### Descrição da solicitação:

Um cliente solicitou integração com o CEP, ele quer um hot site que, quando preenchido o CEP pelo usuário ele buscará os demais detalhes do endereço e, após clicar no botão ˜Confirmar˜ devem aparecer os resultados do endereço buscado.

Para atender as necessidades e os requisitos mínimos solicitados, foi disponibilizado um protótipo de baixa fidelidade.

- Sugestão de utilização: https://viacep.com.br/
- Exemplo de CEP para preenchimento: 88080-701

### Descrição da solução:

- Criação de repositório público;
- Definição das branches básicas necessárias;
- Biblioteca React;
- React Vite - para inicialização e estrutura do projeto;
- React boostrap, bootstrap e css - para a estilização;
- Issues do GitHub - para o versionamento;
- React input mask e Imask - para as máscaras dos inputs de formulário;
- API ViaCep - para busca do endereço pelo CEP;
- React router dom - para configuração das rotas;


### Como executar o modo develop:
Para executar este projeto em sua máquina local, é necessário ter o [Node.js](https://nodejs.org/en/download) instalado, na sua versão mais atual. Após clonar o repositório, execute o comando a seguir para instalar as dependências necessárias, as quais se encontram liostadas no arquivo 'package.json'.

```console
npm install
``` 

 Na sequência, execute o comando a seguir para iniciar a aplicação localmente:
 
 ```console
 npm run dev
 ```


### Pontos de melhoria:
Responsividade
Personalização da página com a identidade visual do cliente

### Deploy
 O projeto está hospedado na Cloudflare no serviço de pages. 
 Para fazer o deploy da aplicação execute o comando abaixo para gerar os arquivos necessários:

 ```console
 node run build
 ```
 Este comando irá gerar os arquivos js, html e css na /dist utilizada para o deploy na Cloudflare.

 **Para acessar o deploy clique no link a seguir:**
 https://cep.lisi.eti.br

 #### Obrigada por acessar o Busca CEP!