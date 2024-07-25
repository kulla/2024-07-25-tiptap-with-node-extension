import '@radix-ui/themes/styles.css'
import './App.css'

import { Theme } from '@radix-ui/themes'
import Tiptap from './tiptap'

export default function App() {
  return (
    <Theme>
      <div style={{ padding: 16 }}>
        <Tiptap />
      </div>
    </Theme>
  )
}
