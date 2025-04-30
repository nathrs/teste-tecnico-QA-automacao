# Teste Técnico - Automação de Testes

Este documento contém os cenários de teste que devem ser automatizados como parte do teste técnico.

## Cenários de Teste

### 1. Visualização de Tokens da Receita
**Cenário:** Verificar a exibição de tokens da receita
- **Dado** que o usuário está na tela da receita
- **Quando** clicar no botão "Ver tokens"
- **Então** deve ser possível visualizar na listagem a receita que foi aberta

### 2. Verificação do Botão Ver Preços
**Cenário:** Validar a presença do botão Ver Preços
- **Dado** que um usuário está na tela da receita
- **Então** deve ser possível visualizar o botão "Ver preços"

### 3. Navegação para o Carrinho
**Cenário:** Verificar navegação da receita para o carrinho
- **Dado** que um usuário está na tela da receita
- **Quando** visualizar o botão "Ver preços"
- **E** clicar no botão "Ver preços"
- **Então** deve ser possível visualizar a tela do carrinho

### 4. Troca de Medicamento no Carrinho
**Cenário:** Validar funcionalidade de troca de medicamento
- **Dado** que um usuário está na tela do carrinho
- **Quando** clicar no botão "Trocar medicamento"
- **Então** deve ser possível visualizar os medicamentos intercambiáveis
- **Quando** clicar no botão "Trocar"
- **Então** deve ser possível visualizar a tela do carrinho com o medicamento trocado

## Instruções
- Implemente os testes automatizados para cada um dos cenários descritos acima
- Utilize boas práticas de automação de testes
- Documente o código adequadamente
- Considere diferentes casos de teste para cada cenário