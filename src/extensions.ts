import { Node } from '@tiptap/core'

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    exercise: {
      toggleExercise: () => ReturnType
    }
  }
}

export const Exercise = Node.create({
  name: 'exercise',

  content: 'inline*',

  group: 'block',

  defining: true,

  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: false,
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: `h1`,
        attrs: {},
      },
    ]
  },

  renderHTML() {
    return [`h1`, { 'data-type': this.name }, 0]
  },

  addCommands() {
    return {
      toggleExercise:
        () =>
        ({ commands }) => {
          return commands.toggleNode(this.name, 'paragraph')
        },
    }
  },

  addKeyboardShortcuts() {
    return {
      'Ctrl-1': () => this.editor.commands.toggleExercise(),
    }
  },
})
