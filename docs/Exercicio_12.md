# Exercício — Construindo a base, tudo é uma progressão

## App Meu Perfil Dev (Etapa 12): o mural de recados na API

1. Execute `npx expo install axios`. Crie o `db.json` com `"recados": []` e rode o `json-server`.

2. Crie `services/api.ts` com o seu IP e `services/recados.ts` com as funções `listarRecados`, `criarRecado` e `apagarRecado`.

3. Em `recados.tsx`:
   - Faça `GET` ao abrir.
   - Faça `POST` no `handleSubmit`.
   - Faça `DELETE` no botão ×.
   - Remova o uso do AsyncStorage para os recados.

4. Transforme a lista em uma `FlatList`, com o formulário no `ListHeaderComponent` e a funcionalidade de puxar para atualizar.

5. Implemente o estado de carregamento e o estado de erro com a opção "Tentar de novo". A bolinha da aba deve continuar funcionando.

## Teste

Um colega aponta para o seu IP e deixa um recado. Puxe para atualizar.
