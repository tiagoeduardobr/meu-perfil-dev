# Exercício — Construindo a base, tudo é uma progressão

## App Meu Perfil Dev (Etapa 10): o mural com React Hook Form + Zod

1. Instale `react-hook-form`, `zod` e `@hookform/resolvers` no projeto `meu-perfil-dev`.

2. Crie `schemas/recado.js` com o `recadoSchema`: as regras da Etapa 10 e um `refine` para o e-mail obrigatório se `querResposta`.

3. Em `recados.js`, utilize `useForm` com `zodResolver`. Apague `form`, `atualizar`, `erros` e `validar`.

4. Integre os chips e o `Switch` com `Controller`. Use `watch` para mostrar o campo de e-mail e o contador "0/200".

5. Utilize `handleSubmit(enviarRecado)` e `reset()` depois de enviar. Os recados continuam salvos (Etapa 9).

## Teste

O comportamento é igual ao da Etapa 10. Só o código ficou menor.
