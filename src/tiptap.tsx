import React from 'react'
import {
  useEditor,
  FloatingMenu,
  EditorProvider,
  useCurrentEditor,
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Exercise, Solution, Task } from './extensions'
import { Button, Flex } from '@radix-ui/themes'

const extensions = [StarterKit, Task, Solution, Exercise]
const content = '<p>Hello World!</p>'

export default function Tiptap() {
  const editor = useEditor({
    extensions,
    content,
  })

  return (
    <EditorProvider
      extensions={extensions}
      content={content}
      slotBefore={<Toolbar />}
      slotAfter={<EditorJSONPreview />}
    >
      <FloatingMenu editor={editor}>This is the floating menu</FloatingMenu>
    </EditorProvider>
  )
}

function Toolbar() {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  const insertExercise = () => {
    const { $to } = editor.state.selection
    const endOfBlock = $to.end($to.depth)

    editor
      .chain()
      .focus()
      .insertContentAt(endOfBlock, {
        type: 'exercise',
        content: [
          {
            type: 'task',
            content: [
              { type: 'paragraph', content: [{ type: 'text', text: 'Task' }] },
            ],
          },
          {
            type: 'solution',
            content: [
              {
                type: 'paragraph',
                content: [{ type: 'text', text: 'Solution' }],
              },
            ],
          },
        ],
      })
      .run()
  }

  return (
    <Flex gap="3">
      <Button onClick={insertExercise}>Add Exercise</Button>
    </Flex>
  )
}

function EditorJSONPreview() {
  const { editor } = useCurrentEditor()

  return (
    <>
      <h1>JSON State</h1>
      <pre>{JSON.stringify(editor?.getJSON(), null, 2)}</pre>
    </>
  )
}
