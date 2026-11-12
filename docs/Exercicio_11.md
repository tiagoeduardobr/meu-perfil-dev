# Exercício — Construindo a base, tudo é uma progressão

## App Meu Perfil Dev (Etapa 11): o app vira TypeScript

1. Instale `typescript` e `@types/react` e crie o `tsconfig.json` (slide da migração).

2. Crie `types/index.ts` com `Nivel`, `Habilidade` e `Github`. Em `schemas/recado.ts`, crie `type RecadoForm = z.infer<...>`.

3. Renomeie e tipe:
   - `data`, `theme`, `services` e `schemas` viram `.ts`.
   - Os componentes viram `.tsx`, com `type Props`.

4. Nas telas `.tsx`, utilize:

   ```typescript
   useState<Recado[]>([])
   useState<Github | null>(null)
   useLocalSearchParams<{ id: string }>()
   ```

5. Transforme a aba Habilidades em uma `FlatList`.

## Teste

Execute `npx tsc --noEmit`: o resultado deve mostrar 0 erros e o app deve funcionar igual.
