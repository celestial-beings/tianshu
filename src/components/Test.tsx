import { defineComponent } from '@vue/runtime-core'

const app = defineComponent({
  props: {
    name: String
  },
  setup (props) {
    return () => <h1>Test, {props.name}</h1>
  }
})

export default app
