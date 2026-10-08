# Meu Perfil Dev

[![React Native](https://img.shields.io/badge/React_Native-0.86.3-20232A?logo=react)](https://reactnative.dev/)
[![Expo SDK](https://img.shields.io/badge/Expo_SDK-57.0.27-000020?logo=expo)](https://expo.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=222)](https://developer.mozilla.org/docs/Web/JavaScript)
![Status](https://img.shields.io/badge/status-em_desenvolvimento-blue)

> Aplicativo de perfil profissional desenvolvido para praticar fundamentos de React Native e Expo.

## Contexto

Este projeto reúne exercícios da formação em Desenvolvimento Mobile com React Native, vinculada ao **SCTEC — Carreira Tech**, programa de formação em tecnologia do Governo de Santa Catarina. O programa é realizado pela Secretaria de Estado da Ciência, Tecnologia e Inovação (SCTI) em parceria com o SENAI/SC. A trilha de Desenvolvimento de Software inclui a área mobile e apresenta React Native entre as tecnologias estudadas.

O app **Meu Perfil Dev** acompanha essa jornada como projeto prático: começa com uma tela de perfil e evolui a cada exercício. Este repositório é um projeto de estudo independente e não é um produto oficial do SCTEC.

## Sobre o aplicativo

A tela atual apresenta um cartão de perfil com nome, cargo, cidade e disponibilidade para projetos. O botão **Entrar em contato** abre um alerta com o e-mail informado no código.

### Conceitos praticados

- Componentes `View`, `Text` e `Button` do React Native
- Valores dinâmicos com constantes e expressões JSX
- Renderização condicional com operador ternário
- Estilização com `StyleSheet`
- Eventos com `onPress` e alertas com `Alert.alert`

## Tecnologias

- JavaScript
- React 19
- React Native 0.86
- Expo SDK 57

## Como executar

Requisitos: Node.js compatível com o Expo SDK utilizado e npm.

```bash
npm install
npx expo start
```

Com o servidor iniciado, abra o projeto pelo Expo Go ou use os atalhos do terminal: `a` para Android, `i` para iOS e `w` para web. Também é possível iniciar diretamente com `npm run android`, `npm run ios` ou `npm run web`.

## Estrutura

```text
.
├── App.js                  # Tela principal do perfil
├── assets/                 # Ícones e imagens do aplicativo
├── docs/                   # Enunciados dos exercícios
├── app.json                # Configuração do Expo
└── package.json            # Dependências e comandos
```

## Exercícios

- [Exercício 01 — Construindo a base](docs/Exerc%C3%ADcio_01.md)
- [Exercício 02 — Do HTML para o React Native](docs/Exerc%C3%ADcio_02.md)

## Referências

- [SCTEC — Trilha de Desenvolvimento de Software](https://sctec.scti.sc.gov.br/trilha-desenvolvimento-de-software/)
- [SCTEC — Carreira Tech 2026](https://sctec.scti.sc.gov.br/carreira-tech-2026/)
- [Dúvidas frequentes do SCTEC](https://sctec.scti.sc.gov.br/duvidas/)
- [Documentação do Expo](https://docs.expo.dev/)
- [Documentação do React Native](https://reactnative.dev/docs/getting-started)
