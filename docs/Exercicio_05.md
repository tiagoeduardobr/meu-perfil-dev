# Exercício — Construindo a base, tudo é uma progressão

## App Meu Perfil Dev (Etapa 5): dados reais e cronômetro

Continue no projeto `meu-perfil-dev` da Etapa 4.

1. Crie a constante `USUARIO_GITHUB` com o seu usuário do GitHub.
2. Crie os estados `github` (`null`), `carregando` (`true`) e `erro` (`""`).
3. Com `useEffect` e um array de dependências vazio (`[]`), busque `https://api.github.com/users/` + o seu usuário, utilizando `try/catch`, `response.ok` e `finally`.
4. Crie a seção "Meu GitHub": exiba um `ActivityIndicator` enquanto carrega, a mensagem de erro ou os repositórios públicos e seguidores.
5. Crie um cronômetro com a mensagem "⏱️ Você está no meu perfil há Ns", utilizando `setInterval` e limpeza.
6. Crie um efeito que observa `recomendacoes` e mostra um `Alert` quando chegar a 10.

**Desafio extra:** crie um botão "Atualizar dados" que busca os dados novamente. Dica: use um estado `atualizar` que soma 1 e vai no array de dependências.