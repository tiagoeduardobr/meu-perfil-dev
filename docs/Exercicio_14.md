# Exercício — Construindo a base, tudo é uma progressão

## App Meu Perfil Dev — Etapa 14: foto pela câmera e mapa

1. Instale as dependências:

   ```bash
   npx expo install expo-camera react-native-maps expo-location
   ```

2. Crie a tela `app/camera.tsx`, apresentada como modal:
   - Permita tirar uma foto.
   - Adicione o botão "Usar esta foto".
   - Ao confirmar, salve a URI no AsyncStorage usando `CHAVES.foto`.
   - Retorne à tela anterior com `router.back()`.

3. Na tela de perfil:
   - Adicione o botão "Trocar foto".
   - Dê prioridade à foto salva sobre a foto do GitHub.
   - Releia a foto salva com `useEffect`.

4. Crie a tela `app/mapa.tsx`, com o título "Onde me encontrar":
   - Exiba um `Marker` na sua cidade.
   - Mostre a localização do usuário com a bolinha azul.
   - Adicione o botão "Ir até você".

5. Na seção "Explore":
   - Adicione o acesso "Onde me encontrar".

## Teste

1. Troque a foto do perfil.
2. Feche o aplicativo.
3. Abra o aplicativo novamente.
4. Confira se a foto escolhida continua aparecendo.
