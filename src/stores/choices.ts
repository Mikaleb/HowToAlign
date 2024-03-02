import { reactive, ref, watch } from 'vue'
import { defineStore } from 'pinia'

export enum Align {
  Left = 'left',
  Center = 'center',
  Right = 'right',
  Up = 'up',
  Down = 'down'
}

export const useChoicesStore = defineStore('choices', () => {
  const alignHorizontal = ref(Align.Center)
  const alignVertical = ref(Align.Center)
  const generatedCode = ref('')

  const divWrapper = reactive({
    styles: ['display: grid', 'place-items: center'],
    classes: ['grid', 'place-items-center']
  })

  const divContent = reactive({
    tag: 'p',
    content: ''
  })

  // can go up to 11
  const minIE = ref(0)

  function alignContent(direction: 'horizontal' | 'vertical', value: Align) {
    if (direction === 'horizontal') {
      // if align is left and value is right, set as h center
      if (alignHorizontal.value === Align.Left && value === Align.Right) {
        alignHorizontal.value = Align.Center
      } else if (alignHorizontal.value === Align.Right && value === Align.Left) {
        alignHorizontal.value = Align.Center
      } else {
        alignHorizontal.value = value
      }
    } else if (direction === 'vertical') {
      if (alignVertical.value === Align.Up && value === Align.Down) {
        alignVertical.value = Align.Center
      } else if (alignVertical.value === Align.Down && value === Align.Up) {
        alignVertical.value = Align.Center
      } else {
        alignVertical.value = value
      }
    }
  }

  function generateStyles(alignHorizontal: Align, alignVertical: Align) {
    console.debug('🚀 ~ generateStyles ~ alignHorizontal:', alignHorizontal)
    let horizontal: string = ''
    let vertical: string = ''

    switch (alignHorizontal) {
      case Align.Left:
        horizontal = 'start'
        break
      case Align.Center:
        horizontal = 'center'
        break
      case Align.Right:
        horizontal = 'end'
        break
    }

    switch (alignVertical) {
      case Align.Up:
        vertical = 'start'
        break
      case Align.Center:
        vertical = 'center'
        break
      case Align.Down:
        vertical = 'end'
        break
    }

    divWrapper.styles = ['display: grid', `place-items: ${vertical} ${horizontal}`]
    divWrapper.styles = ['grid', `place-items-${vertical}-${horizontal}`]
  }

  // watch alignHorizontal
  watch(alignHorizontal, (newAlign) => {
    if (minIE.value === 0) {
      generateStyles(alignVertical.value, newAlign)
    }
  })

  watch(alignVertical, (newAlign) => {
    if (minIE.value === 0) {
      generateStyles(newAlign, alignHorizontal.value)
    }
  })

  watch(
    [divWrapper, divContent, minIE],
    () => {
      generatedCode.value = `<div style="${divWrapper.styles.join(';')}">`

      if (divContent) {
        generatedCode.value += `<${divContent.tag}>${divContent.content}</${divContent.tag}>`
      }

      generatedCode.value += `</div>`
    },
    { deep: true, immediate: true }
  )

  return {
    Align,
    alignHorizontal,
    alignVertical,
    minIE,
    divWrapper,
    divContent,
    alignContent,
    generatedCode
  }
})
