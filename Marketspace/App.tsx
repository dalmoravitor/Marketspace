import { StatusBar } from 'react-native';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { Routes } from './src/routes'

export default function App() {
  return (
    <GluestackUIProvider>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <Routes />
    </GluestackUIProvider>
  );
}

