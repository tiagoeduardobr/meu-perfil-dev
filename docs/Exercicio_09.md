# Exercício — Construindo a base, tudo é uma progressão

## App Meu Perfil Dev (Etapa 9): o mural vira um formulário

1. Em `recados.js`, troque o campo único por um estado `form` com os campos `nome`, `tipo`, `mensagem`, `querResposta` e `email`.

2. Implemente a escolha do tipo com chips: "Elogio", "Sugestão" e "Proposta". Crie o componente `components/Chip.js`.

3. Adicione um campo de mensagem `multiline` com contador de caracteres no formato "0/200". Inclua um `Switch` com o rótulo "Quero receber resposta": o campo de e-mail deve aparecer somente quando ele estiver ligado.

4. Crie a função `validar()` com as seguintes regras:
   - Nome com pelo menos 2 caracteres.
   - Tipo escolhido.
   - Mensagem com pelo menos 10 caracteres.
   - E-mail válido se o usuário quiser receber resposta.

5. Cada recado deve mostrar o nome e o tipo, como "Bia · Sugestão", a mensagem e o indicador 📧. Limpe o formulário e feche o teclado depois de enviar.

## Teste

Os recados antigos (da Etapa 9) ainda aparecem?
