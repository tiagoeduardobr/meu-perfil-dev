# Meu Perfil Dev

[![React Native](https://img.shields.io/badge/React_Native-0.86.3-20232A?logo=react)](https://reactnative.dev/)
[![Expo SDK](https://img.shields.io/badge/Expo_SDK-57.0.27-000020?logo=expo)](https://expo.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=222)](https://developer.mozilla.org/docs/Web/JavaScript)
![Status](https://img.shields.io/badge/status-em_desenvolvimento-blue)

Aplicativo de perfil profissional desenvolvido como projeto prático de aprendizado com React Native e Expo.

## Contexto

Este projeto acompanha os exercícios da formação **Desenvolvedor Mobile React Native**, na trilha Carreira Tech do SCTEC. O SCTEC é um programa do Governo de Santa Catarina, realizado pela Secretaria de Estado da Ciência, Tecnologia e Inovação em parceria com o SENAI/SC. O edital da formação inclui uma turma de Desenvolvimento Mobile com React Native.

O repositório contém o trabalho de estudo do aluno e não é um produto oficial do SCTEC.

## Aplicativo

A tela apresenta um perfil com foto, nome, cargo, cidade, disponibilidade para projetos, biografia e habilidades. O botão **Entrar em contato** responde ao toque com um alerta que exibe o e-mail cadastrado no app.

### O que é praticado

- Componentes e composição de telas com `View`, `Text`, `Image` e `ScrollView`
- Dados dinâmicos com objetos, constantes e JSX
- Renderização de listas e uso de chaves
- Estilização com `StyleSheet`
- Interação com `Pressable` e `Alert`
- Organização de componentes reutilizáveis

## Exercícios

1. [Construindo a base](docs/Exerc%C3%ADcio_01.md) — estrutura inicial do app e primeiros componentes.
2. [Do HTML para o React Native](docs/Exerc%C3%ADcio_02.md) — dados em constantes, renderização condicional e interação.
3. [Montando a tela do perfil](docs/Exerc%C3%ADcio_03.md) — imagem, rolagem, biografia, habilidades e botão pressionável.

## Tecnologias

- JavaScript
- React 19.2
- React Native 0.86
- Expo SDK 57

## Como executar

Requisitos: Node.js 22.13.x ou superior e npm.

```bash
npm install
npx expo start
```

Abra o projeto com o Expo Go ou use os atalhos do terminal: `a` para Android, `i` para iOS e `w` para web. Também é possível iniciar diretamente com `npm run android`, `npm run ios` ou `npm run web`.

## Estrutura do projeto

```text
.
├── App.js                  # Tela do perfil
├── components/
│   └── Header.js           # Cabeçalho com foto, nome e cargo
├── assets/                 # Ícones e imagens do aplicativo
├── docs/                   # Enunciados dos exercícios
├── app.json                # Configuração do Expo
└── package.json            # Dependências e comandos
```

## Referências

- [SCTEC — Trilha de Desenvolvimento de Software](https://sctec.scti.sc.gov.br/trilha-desenvolvimento-de-software/)
- [SCTEC — Carreira Tech 2026](https://sctec.scti.sc.gov.br/carreira-tech-2026/)
- [Edital do Carreira Tech — turma Desenvolvedor Mobile React Native (PDF)](https://sctec.scti.sc.gov.br/wp-content/uploads/sites/8/2026/03/001_SCTEC_2_Edital_Carreira_Tech_Onda_2_1-1.pdf)
- [Editais e resultados do SCTEC](https://sctec.scti.sc.gov.br/editais-e-resultados/)
- [Documentação do Expo SDK 57](https://docs.expo.dev/versions/v57.0.0/)
- [Documentação do React Native](https://reactnative.dev/docs/getting-started)
