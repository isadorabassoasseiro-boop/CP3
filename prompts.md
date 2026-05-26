# Relatório de Uso de Inteligência Artificial - Engenharia de Prompts

## 1º Caso de Uso: Validação do Formulário de Login

### Prompts Utilizados
* **Prompt Inicial/Final:** "Mesmo usando o atributo `required` nos inputs do meu formulário de login a validação não está funcionando corretamente. Quando eu preencho apenas o campo de usuário e clico em "submit", ao invés do navegador solicitar o preenchimento do campo de senha, o JavaScript executa diretamente e aparece o alert: 'Usuário ou senha incorretos'"

### Análise das Respostas das IAs
* **ChatGPT:** Apresentou códigos limpos e claros, dividindo a solução em um passo a passo estruturado e explicando detalhadamente a função de cada trecho de código.
* **Gemini:** Forneceu uma boa explicação teórica, porém a estrutura dos blocos de código ficou confusa e de difícil leitura.
* **Copilot:** Explicou bem o conceito do erro, mas falhou ao não apresentar o código corrigido pronto para implementação.

### IA Escolhida como Base
* **Escolha:** ChatGPT.
* **Justificativa:** Foi a ferramenta mais direta na resolução do problema, entregando um passo a passo visualmente melhor estruturado e mais fácil de aplicar no projeto.

---

## 2º Caso de Uso: Interface da Página CRUD

### Prompts Utilizados
* **Prompt Inicial/Final:** "Crie um visual moderno para uma página CRUD de gatinhos fofinhos usando HTML e CSS puro."

### Análise das Respostas das IAs
* **ChatGPT:** Entregou um visual fofo, agradável e muito alinhado com a proposta temática, porém a interface era estática e não trazia uma estrutura preparada para exibir os itens dinamicamente na tela.
* **Gemini:** Apresentou uma interface completa com a estrutura para o CRUD inteiro. No entanto, o visual não correspondeu ao tema (cores desagradáveis) e incluiu elementos de "cachorro", fugindo do escopo do prompt que era exclusivo sobre gatos.
* **Copilot:** Assim como o ChatGPT, entregou uma interface visualmente fofa e temática, mas pecou em não deixar preparada a estrutura para a exibição dinâmica dos dados.

### IA Escolhida como Base
* **Escolha:** ChatGPT (com ressalvas para adaptação).
* **Justificativa:** Apesar de não trazer a dinâmica de exibição dos itens, foi a IA que entregou o resultado visualmente mais bonito, limpo e adequado à temática solicitada.

---

## 3º Caso de Uso: Implementação das Listas

### Prompts Utilizados
* **Prompt Inicial/Final:** "Como faço a parte das listas?"

### Análise das Respostas das IAs
* **ChatGPT:** Construiu um tutorial passo a passo muito bem explicado, mantendo os códigos organizados, limpos e fáceis de compreender.
* **Copilot:** Apresentou blocos de códigos longos e complexos, carecendo de explicações claras sobre o funcionamento da estrutura.
* **Gemini:** Forneceu uma explicação rasa e superficial acompanhada de códigos excessivamente longos e desorganizados.

### IA Escolhida como Base
* **Escolha:** ChatGPT.
* **Justificativa:** A ferramenta demonstrou uma capacidade didática superior, ensinando o conceito de forma gradual e mantendo a legibilidade do código.

---

## 4º Caso de Uso: Validação e Refinamento do Relatório Técnico

### Prompts Utilizados
* **Prompt Inicial/Final:** "analise essas informações e veja se está de acordo com o que eu fiz: informação: [Especificações da Atividade] o que eu fiz: [Anotações e Histórico de Escolhas das IAs]"

### Análise das Respostas das IAs
* **Copilot:** Limitou-se a elogiar o relatório e a listar os requisitos da atividade cruzando-os com o que havia sido feito. No entanto, apresentou uma análise superficial, pois não corrigiu nenhum erro gramatical e não apontou nenhuma das inconsistências técnicas do projeto.
* **ChatGPT:** Apontou os erros gramaticais presentes nas anotações originais e devolveu a estrutura do relatório com um formato de prompt mais organizado, ajudando na estruturação do texto.
* **Gemini:** Demonstrou a maior capacidade analítica entre os três. Além de cruzar os critérios e reestruturar o conteúdo em formato acadêmico profissional, foi o único que identificou com precisão a inconsistência técnica (a limitação do uso de HTML/CSS puro para a dinâmica de um CRUD), oferecendo a solução mais completa e profunda para a entrega.

### IA Escolhida como Base
* **Escolha:** Gemini.
* **Justificativa:** O Gemini foi o escolhido neste caso por sua capacidade superior de contextualização e auditoria técnica. Enquanto o Copilot foi superficial e o ChatGPT focou na organização e gramática, o Gemini uniu a correção textual com uma visão crítica sobre o código do projeto, garantindo que o documento final ficasse impecável.