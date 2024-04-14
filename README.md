## Projeto de Lista de Tarefas

Este projeto consiste em uma aplicação de lista de tarefas desenvolvida em React Native. Ele permite aos usuários adicionar, visualizar e excluir tarefas de forma simples e intuitiva.

### Funcionalidades Principais

1. **Adicionar Tarefa**: Os usuários podem adicionar novas tarefas inserindo o título da tarefa em um campo de entrada e pressionando o botão "Adicionar".

2. **Visualizar Tarefas**: As tarefas adicionadas são exibidas em uma lista na tela principal da aplicação.

3. **Remover Tarefa**: Cada tarefa na lista possui um botão de remoção, que permite aos usuários excluir a tarefa desejada.

### Estrutura do Projeto

O projeto é composto por três arquivos principais:

1. **`TaskList.tsx`**: Este arquivo contém o componente `TaskList`, responsável por exibir a lista de tarefas e permitir a remoção de tarefas.

2. **`TasksContext.tsx`**: Aqui está definido o contexto e o provedor `TasksProvider`, que gerencia o estado das tarefas e fornece funcionalidades para adicionar e remover tarefas utilizando AsyncStorage para persistência de dados.

3. **`Home.tsx`**: Este arquivo contém o componente principal da aplicação, que exibe a interface de usuário para adicionar e visualizar tarefas.

### Como Utilizar

Para utilizar este projeto, você pode seguir estes passos:

1. Certifique-se de ter o ambiente de desenvolvimento React Native configurado em sua máquina.

2. Clone este repositório em sua máquina local.

3. Instale as dependências do projeto executando `npm install` no diretório do projeto.

4. Execute o projeto em um emulador ou dispositivo físico com o comando `npx expo start`.

### Observações

- Este projeto utiliza o AsyncStorage para armazenar as tarefas localmente no dispositivo do usuário. Certifique-se de ter as permissões necessárias para acessar o armazenamento do dispositivo.

- Este projeto é destinado para fins educacionais e de aprendizado, podendo ser modificado e expandido de acordo com as necessidades do desenvolvedor.

Sinta-se à vontade para explorar, modificar e utilizar este projeto conforme necessário!