import '@radix-ui/themes/styles.css'
import './App.css'

import { Theme, ThemePanel, Text } from '@radix-ui/themes'

export default function App() {
  return (
    <Theme>
      <Text>Hello, World!</Text>
      <ThemePanel />
    </Theme>
  )
}
