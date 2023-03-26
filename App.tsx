import React from 'react';
import Greeting from '@/components/Greeting';
import {SafeAreaView} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Greeting />
    </SafeAreaView>
  );
}

export default App;
