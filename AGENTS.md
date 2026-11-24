# Meu Perfil Dev — notas para agentes

Projeto de estudo independente no contexto SCTEC Carreira Tech; não é produto oficial do SCTEC. Verifique detalhes do programa em fontes oficiais antes de documentá-los.

## Estado real do projeto

- JavaScript puro: não há TypeScript, `tsconfig.json`, `src/`, ESLint, cspell instalado, testes nem scripts de lint/typecheck. `package.json` só define `start`, `android`, `ios`, `web`.
- Entrypoint é `expo-router/entry` (`main` no `package.json`): rotas em `app/` na raiz, não `src/app/`. `app/_layout.js` é um `Stack`; componentes fora de rotas ficam em `components/`.
- `index.js` na raiz é resquício (`registerRootComponent` de um `App` inexistente) — não é o entrypoint nem a tela.
- `README.md` está desatualizado (SDK 57 / RN 0.86 / estrutura com `App.js`; links de exercícios com acento). Versões reais: Expo 58, RN 0.88, React 19.3 — confira em `package.json` (`app.json` traz só configuração nativa/plugins).
- Código em andamento: `app/recados.js` e `app/habilidades/[id].js` vazios; `app/habilidades/index.js` referenciado no layout, mas ausente; `app/index.js` chama `useState` no escopo do módulo e usa `StyleSheet`/`StatusBar` sem importar. Nenhuma ferramenta acusa isso — valide executando o app.

## Comandos

- npm (`package-lock.json`), sem bun. `npm install` → `npx expo start` (atalhos `a`/`i`/`w`); ou `npm run android` / `npm run ios` / `npm run web`.
- Instale dependências com `npx expo install <pacote>`, nunca `npm add`. `expo-doctor`, ESLint, TypeScript e cspell não estão instalados: `npx expo lint` / `npx tsc --noEmit` só funcionarão após adicionar config e deps.
- Sem testes automatizados. Verificação = subir o app e seguir a seção de teste do exercício em `docs/` ("Teste" ou "Teste de aceitação", quando houver).

## `docs/` é a fonte das tarefas

- `docs/Exercicio_*.md` trazem os critérios da tarefa; os exercícios 15 e 16 incluem "Convenções do projeto", "Teste de aceitação" e "Checklist de conclusão". Leia sempre o exercício corrente antes de implementar.
- Exercícios 15–16 descrevem arquitetura alvo em TypeScript com `src/` (`src/types`, `src/contexts`, `src/app`, ...), ainda não migrada; o Exercício 14 usa `app/camera.tsx` e `app/mapa.tsx` na raiz. `docs/Migracao_JS_TS.md` é o guia. Não presuma que esses arquivos existam.
- Exercício 15 exige `json-server` rodando (não é dependência do projeto) e `expo-sqlite`; exercício 16 usa AsyncStorage. Módulos nativos fora do Expo Go pedem dev build: `npx expo run:android` / `npx expo run:ios` ou EAS.

## Convenções

- Código/identificadores em inglês; textos de UI, comentários e documentação em português. Manter `cspell.json` em `en,pt_BR` e adicionar termos novos em `words`.
- Commits Conventional Commits (ex.: `feat(profile): add profile card`).
- Sem diretórios `ios/`/`android/` (CNG): configs nativas em `app.json` + config plugins.
- Antes de usar API Expo/EAS/RN, confirme a major do `expo` em `package.json` e consulte `https://docs.expo.dev/versions/v<major>.0.0/` (índice: `https://docs.expo.dev/llms.txt`); não responda de memória.
- Sempre use a **question tool** para qualquer decisão com opções, mesmo quando o repositório já contém a resposta; não decida sozinho nesses casos.
