# Etapa 15 — Meu Perfil Dev: animado e offline

## Objetivo

Adicione animações aos botões e aos cartões de recados e implemente um cache local com SQLite para permitir a leitura dos recados quando a API estiver indisponível.

## Convenções do projeto

- Código e identificadores em inglês.
- Comentários e documentação em português.
- Tipos centralizados em `src/types/index.ts`.

> Os nomes apresentados no slide foram adaptados: `BotaoAcao` corresponde a `ActionButton`, `CartaoRecado` a `MessageCard` e `services/banco.ts` a `services/database.ts`.

## 1. Anime os botões do aplicativo

No componente `ActionButton`, implemente um efeito de pressionamento:

- Use `onPressIn` para fazer o botão afundar ao ser pressionado.
- Use `onPressOut` para retornar ao estado inicial.
- Utilize uma animação com `spring`.

Todos os botões do aplicativo devem receber esse efeito por meio do componente compartilhado.

## 2. Anime a entrada dos recados

No componente `src/components/MessageCard.tsx`:

- Faça cada cartão entrar subindo.
- Utilize `timing` para controlar a animação.
- Utilize `interpolate` para compor o movimento de entrada.

## 3. Instale o SQLite

Execute:

```bash
npx expo install expo-sqlite
```

## 4. Crie o serviço de banco de dados

Crie `src/services/database.ts` com:

- Uma tabela para armazenar os recados.
- Uma função `saveCache` para salvar os recados localmente.
- Uma função `readCache` para recuperar os recados salvos.

### Correspondência com o slide

| Identificador no slide | Identificador em inglês |
| --- | --- |
| `services/banco.ts` | `services/database.ts` |
| `recados` | `messages` |
| `salvarCache` | `saveCache` |
| `lerCache` | `readCache` |
| `carregar` | `loadMessages` |

## 5. Integre a API com o cache local

Na função de carregamento dos recados, use a API como primeira opção e o banco local como reserva.

### Quando a API responder

1. Carregue os recados da API.
2. Salve os dados recebidos no cache local.
3. Exiba os recados no mural.

### Quando a API estiver indisponível

1. Leia os recados armazenados no SQLite.
2. Exiba os dados salvos no mural.
3. Mostre o aviso:

   > Sem conexão. Recados salvos.

4. Disponibilize a ação "Tentar de novo" para repetir a tentativa de carregamento.

## Referência visual

A tela apresentada no exercício contém:

- Título "Mural de recados".
- Campo de preenchimento.
- Botão "Enviar recado".
- Aviso de indisponibilidade da conexão.
- Quantidade de recados.
- Lista de cartões.
- Contador na aba "Recados".

A referência também apresenta um cartão com o estado "aguardando envio".

> O requisito descrito nesta etapa é o carregamento com cache de reserva. A implementação de uma fila de envio offline não está detalhada no enunciado do slide.

## Teste de aceitação

1. Com o `json-server` em execução, abra o mural.
2. Carregue os recados para preencher o cache local.
3. Interrompa o `json-server` com `Ctrl+C`.
4. Abra novamente o mural.
5. Confirme que os recados salvos continuam aparecendo.
6. Confira o aviso "Sem conexão. Recados salvos.".
7. Reinicie o servidor e use "Tentar de novo".
8. Confira se o carregamento pela API volta a funcionar.

## Checklist de conclusão

- [ ] Efeito de pressionamento no componente `ActionButton`.
- [ ] Uso de `onPressIn`, `onPressOut` e `spring`.
- [ ] Efeito aplicado aos botões do aplicativo.
- [ ] Entrada dos cartões subindo.
- [ ] Uso de `timing` e `interpolate`.
- [ ] Dependência `expo-sqlite` instalada.
- [ ] Serviço de banco de dados criado.
- [ ] Tabela de recados criada.
- [ ] Função `saveCache` implementada.
- [ ] Função `readCache` implementada.
- [ ] API utilizada como primeira opção de carregamento.
- [ ] Cache local utilizado quando a API estiver indisponível.
- [ ] Aviso de conexão exibido.
- [ ] Ação "Tentar de novo" disponível.
- [ ] Recados acessíveis com o `json-server` desligado.
