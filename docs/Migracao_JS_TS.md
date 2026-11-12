# Migrando um projeto de JS para TS

1. Instale o TypeScript no projeto:

   ```bash
   npx expo install typescript @types/react -- --save-dev
   ```

2. Crie o `tsconfig.json`: o mesmo que o template cria.

   ```json
   {
     "extends": "expo/tsconfig.base",
     "compilerOptions": {
       "strict": true
     }
   }
   ```

3. Renomeie um arquivo por vez:
   - Com JSX, a extensão vira `.tsx`.
   - Sem JSX, a extensão vira `.ts`.
   - JS e TS convivem.

4. Conserte os erros destacados em vermelho: primeiro os tipos e os dados, depois os componentes e, por último, as telas.

5. Confira o projeto inteiro até dar zero erros:

   ```bash
   npx tsc --noEmit
   ```

## Exemplos de renomeação

```text
App.js           -> App.tsx
data/dados.js    -> data/dados.ts
components/X.js  -> components/X.tsx
theme.js         -> theme.ts
```

## Dica

No VS Code, pressione F2 sobre o arquivo para renomeá-lo. Os imports continuam funcionando: não é necessário escrever a extensão.

## Modo estrito

`strict: true` ativa o modo completo do TypeScript. É o padrão do Expo.
