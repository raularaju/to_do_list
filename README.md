# To do List 
Sistema web de criação e gerenciamento de tarefas diárias construído com React e NodeJS.
Uma versão mais simples dessa aplicação está disponível em: https://raularaju.github.io/to_do_list_simple/
\
\
![image](https://github.com/raularaju/to_do_list/assets/94451427/00434175-d0f4-41a5-97da-811096fe7647)
![image](https://github.com/raularaju/to_do_list/assets/94451427/61695cb7-3066-4f6d-b27b-6d3c1f256909)
![image](https://github.com/raularaju/to_do_list/assets/94451427/2681e7b4-bf19-400b-a72d-212ff922d2e9)
![image](https://github.com/raularaju/to_do_list/assets/94451427/048303be-42ed-4e3b-bb57-a602aeed657a)

# Dependências
- NodeJS
- npm
# Como rodar o sistema
1. Na pasta api, crie um arquivo .env com base no arquivo .env.example
2. Na pasta api, rode o comando `npm install`
3. Na pasta api, rode o comando `npm start`
4. Na pasta client, crie um arquivo .env.local com base no arquivo .env.local.example
5. Na pasta client, rode o comando `npm install`
6. Na pasta client, rodo o comando `npm start`
# Features
- Criar conta
  - Confere se todos os campos são preenchidos
  - Confere se os campos são válidos (Ex.: o email inserido tem o formato adequado)
- Fazer login
  - Confere se todos os campos são preenchidos
  - Confere se os campos são válidos (Ex.: o email inserido tem o formato adequado)
- Criar Tarefas
  - Escolher uma categoria para a tarefa criada: "Trabalho", "Pessoal", "Casa", "Estudo", "Outros"
- Completar uma tarefa
  - Há um botão que permite completar todas as tarefas de uma vez só
- Excluir uma tarefa
- Editar uma tarefa
  - Editar o nome e/ou categoria
- Pesquisar por tarefas
  - É possível pesquisar por nome, por categoria e por status (se a tarefa foi completada ou não)
