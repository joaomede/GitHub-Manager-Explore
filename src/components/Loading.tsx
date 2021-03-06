import { defineComponent, reactive } from '@vue/composition-api'

import { FingerprintSpinner, FlowerSpinner } from 'epic-spinners'

export const LoadingComponent = defineComponent({
  components: {
    FingerprintSpinner,
    FlowerSpinner
  },
  template: `
  <v-overlay
    :value="state.loading"
    opacity="0.80"
    :absolute="true"
    :z-index="999999"
  >
    <fingerprint-spinner
      v-if="state.randomLoading === 0"
      :animation-duration="1500"
      :size="250"
      color="blue"
    />
    <flower-spinner
      v-if="state.randomLoading === 1"
      :animation-duration="2500"
      :size="250"
      color="blue"
    />
  </v-overlay>
  `,
  setup() {
    const state = reactive({
      randomLoading: 0,
      loading: false
    })

    function randomNumber(min: number, max: number) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function on_() {
      state.randomLoading = randomNumber(0, 1)
      state.loading = true
    }

    function off_() {
      state.loading = false
    }

    return {
      state,
      on_,
      off_
    }
  }
})
