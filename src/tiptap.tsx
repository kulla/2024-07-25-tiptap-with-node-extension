import React from 'react'
import { useEditor, EditorContent, FloatingMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Exercise } from './extensions'

const extensions = [StarterKit, Exercise]
const content = '<p>Hello World!</p>'

export default function Tiptap() {
  const editor = useEditor({
    extensions,
    content,
  })

  return (
    <>
      <EditorContent editor={editor} />
      <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
    </>
  )
}
