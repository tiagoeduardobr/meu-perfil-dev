# Exercício de fixação — Montando a tela do perfil

## App Meu Perfil Dev (Etapa 3 de 4)

Voltamos ao projeto `meu-perfil-dev`. Agora é a vez de usar os componentes de hoje na sua tela de perfil.

1. Troque a `<View>` principal por uma `<ScrollView>`.
2. Mostre sua foto redonda com `<Image>` (dica: `https://github.com/SEU_USUARIO.png`).
3. Adicione uma bio com `numberOfLines={3}` e uma lista de pelo menos 4 habilidades.
4. Crie a pasta `components/` com o componente `Cabecalho` (foto, nome e cargo) e use no App.
5. Troque o botão de contato por um `<Pressable>` que muda de cor quando pressionado e abre um `Alert` com seu e-mail.

**Repare:** a tela já está bonita, mas ainda é fixa: nada muda quando o usuário toca. Depois do intervalo ela ganha vida com os Hooks.