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

  content: 'task solution',

  group: 'block',

  defining: true,

  parseHTML() {
    return [
      {
        tag: `div`,
        attrs: { 'data-type': this.name },
      },
    ]
  },

  renderHTML() {
    return [`div`, { 'data-type': this.name }, 0]
  },
})

export const Task = Node.create({
  name: 'task',

  content: 'paragraph+',

  group: 'block',

  defining: true,

  parseHTML() {
    return [
      {
        tag: `div`,
        attrs: { 'data-type': this.name },
      },
    ]
  },

  renderHTML() {
    return [`div`, { 'data-type': this.name }, 0]
  },
})

export const Solution = Node.create({
  name: 'solution',

  content: 'paragraph+',

  group: 'block',

  defining: true,

  parseHTML() {
    return [
      {
        tag: `div`,
        attrs: { 'data-type': this.name },
      },
    ]
  },

  renderHTML() {
    return [`div`, { 'data-type': this.name }, 0]
  },
})
