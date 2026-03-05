import { useFonts } from 'expo-font';
import { TamaguiProvider, YStack, Text, createTamagui } from 'tamagui';
import { config } from '@tamagui/config/v3';

// Criando um config básico aqui dentro para ignorar o arquivo externo por enquanto
const tamaguiConfig = createTamagui(config);

export default function App() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Regular.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  // Se não carregou as fontes, vamos mostrar um texto padrão do React Native
  // para garantir que o App não está travado em "null"
  if (!loaded) {
    return <Text>Carregando fontes...</Text>;
  }

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme="dark">
      <YStack f={1} jc="center" ai="center" bg="blue">
        <Text fontSize={30} color="white">
          AGORA VAI! 🚀
        </Text>
      </YStack>
    </TamaguiProvider>
  );
}