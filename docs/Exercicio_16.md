# Etapa 16 — Favoritos em todo lugar no Meu Perfil Dev

## Objetivo

Crie um contexto de favoritos para compartilhar as habilidades favoritas entre as telas do aplicativo.

Ao favoritar ou remover uma habilidade no detalhe, a alteração deve aparecer:

- Na lista de habilidades.
- No contador da aba de habilidades.
- Na seção "Minhas favoritas" do perfil.

Os favoritos devem continuar disponíveis depois de fechar e abrir o aplicativo.

## Convenções do projeto

- Código e identificadores em inglês.
- Comentários e documentação em português.
- Tipos centralizados em `src/types/index.ts`.
- Contexto armazenando somente os IDs das habilidades.
- Dados completos das habilidades mantidos no arquivo de dados.

> Os identificadores dos slides foram adaptados: `FavoritosContext` corresponde a `FavoritesContext`, `alternarFavorito` a `toggleFavorite` e `ehFavorito` a `isFavorite`.

## 1. Defina os tipos

Adicione em `src/types/index.ts`, preservando os tipos existentes:

```typescript
import type { ReactNode } from 'react';

/** Estado e operações compartilhadas dos favoritos. */
export type FavoritesContextType = {
  favorites: number[];
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

/** Propriedades do provedor de favoritos. */
export type FavoritesProviderProps = {
  children: ReactNode;
};
```

## 2. Crie o contexto e o Provider

Crie `src/contexts/FavoritesContext.tsx`:

```tsx
import { createContext, useState } from 'react';

import type {
  FavoritesContextType,
  FavoritesProviderProps,
} from '../types';

export const FavoritesContext =
  createContext<FavoritesContextType | null>(null);

export function FavoritesProvider({
  children,
}: FavoritesProviderProps) {
  const [favorites, setFavorites] = useState<number[]>([]);

  // Integrar os efeitos de carregar e salvar no AsyncStorage.
  // A implementação de persistência está no gabarito.

  function toggleFavorite(id: number) {
    setFavorites((currentFavorites) =>
      currentFavorites.includes(id)
        ? currentFavorites.filter((favoriteId) => favoriteId !== id)
        : [...currentFavorites, id],
    );
  }

  const isFavorite = (id: number) => favorites.includes(id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}
```

### Regras do contexto

- `favorites` guarda somente os IDs, por exemplo: `[3, 5]`.
- `toggleFavorite(id)` remove o ID se ele já estiver na lista e adiciona se ainda não estiver.
- `isFavorite(id)` informa se a habilidade está favoritada.
- Nomes, níveis e demais informações continuam no arquivo de dados das habilidades, correspondente a `data/habilidades.ts` no slide.

## 3. Envolva o Stack com o Provider

Em `src/app/_layout.tsx`, coloque o `Stack` dentro de `FavoritesProvider`:

```tsx
import { Stack } from 'expo-router';

import { FavoritesProvider } from '../contexts/FavoritesContext';

export default function RootLayout() {
  return (
    <FavoritesProvider>
      <Stack />
    </FavoritesProvider>
  );
}
```

> Preserve as configurações do `Stack`, as telas e os demais provedores já existentes no projeto.

## 4. Adicione o botão na tela de detalhe

Na tela de detalhe de uma habilidade, correspondente a `habilidade/[id].tsx` no slide:

1. Consulte se a habilidade atual está nos favoritos.
2. Mostre o texto do botão conforme o estado:
   - `☆ Favoritar` quando não estiver favoritada.
   - `★ Remover` quando estiver favoritada.
3. Ao pressionar o botão, execute `toggleFavorite` com o ID da habilidade.

### Resultado esperado

O usuário consegue adicionar ou remover uma habilidade dos favoritos sem sair da tela de detalhe.

## 5. Destaque as favoritas na lista

Na lista de habilidades, correspondente a `habilidades.tsx` no slide:

1. Identifique as favoritas usando o contexto.
2. Passe essa informação ao componente de cada habilidade.
3. Exiba uma estrela antes do nome quando a habilidade estiver favoritada.

No tipo de propriedades do componente de habilidade, centralizado em `src/types/index.ts`, acrescente a propriedade opcional:

```typescript
/** Indica se a habilidade está favoritada. */
isFavorite?: boolean;
```

> Acrescente a propriedade ao tipo existente. Ela corresponde à prop `favorito?` apresentada no slide.

### Referência visual

| Habilidade | Nível | Favorita |
| --- | --- | --- |
| HTML | Avançado | Não |
| JavaScript | Avançado | Sim |
| Node.js | Básico | Não |
| TypeScript | Básico | Sim |

Na referência, JavaScript e TypeScript aparecem com estrela antes do nome e fundo verde destacado.

## 6. Exiba o contador na aba

Na configuração da aba de habilidades:

- Use `tabBarBadge` para mostrar a quantidade de favoritas.
- Faça o número corresponder à quantidade de IDs em `favorites`.
- Mantenha o contador sincronizado com as operações de adicionar e remover.

Na referência visual, o contador mostra `2`, pois existem duas habilidades favoritas.

## 7. Mostre as favoritas no perfil

Na tela de perfil, adicione a seção:

> ★ Minhas favoritas

A seção deve:

- Exibir os nomes das habilidades favoritas.
- Identificar as habilidades no arquivo de dados a partir dos IDs do contexto.
- Refletir as alterações feitas na tela de detalhe.

## 8. Adicione persistência com AsyncStorage

Integre os efeitos de carregamento e salvamento indicados no gabarito.

### Requisitos

- Carregar os IDs salvos ao iniciar o aplicativo.
- Salvar as alterações na lista de favoritos.
- Usar a chave de favoritos definida no projeto, correspondente a `CHAVES.favoritos` no slide.
- Manter os favoritos depois de fechar e abrir o aplicativo.

O slide informa que os efeitos com `useEffect` seguem o mesmo modelo utilizado na semana 3.

> O código-base deste documento implementa o estado e as operações do contexto, mas não inclui os efeitos de persistência. Essa etapa precisa ser concluída para atender ao teste de reabertura do aplicativo.

## Teste de aceitação

1. Abra o detalhe de uma habilidade.
2. Pressione "Favoritar".
3. Volte à lista e confira a estrela antes do nome.
4. Confira se o contador da aba foi atualizado.
5. Abra o perfil e confira o nome em "Minhas favoritas".
6. Favorite uma segunda habilidade e confira as três áreas novamente.
7. Remova uma favorita e verifique se a lista, o contador e o perfil refletem a remoção.
8. Feche o aplicativo e abra novamente.
9. Confirme se os favoritos restantes continuam disponíveis.

## Checklist de conclusão

- [ ] Tipos centralizados em `src/types/index.ts`.
- [ ] `FavoritesContext` criado.
- [ ] `FavoritesProvider` envolvendo o `Stack`.
- [ ] Somente IDs armazenados no contexto.
- [ ] Operação de adicionar e remover implementada.
- [ ] Consulta de favorito implementada.
- [ ] Botão "Favoritar / Remover" no detalhe.
- [ ] Propriedade opcional `isFavorite` no componente da habilidade.
- [ ] Estrela antes do nome das favoritas.
- [ ] Contador com `tabBarBadge`.
- [ ] Seção "Minhas favoritas" no perfil.
- [ ] Carregamento e salvamento com AsyncStorage.
- [ ] Alterações refletidas na lista, na aba e no perfil.
- [ ] Favoritos preservados após fechar e abrir o aplicativo.
