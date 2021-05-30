<template>
  <div>
    <h1>You exchanged your {{ `${lastTrade.inputGive} ${lastTrade.selectGive} to ${lastTrade.inputReceive} ${lastTrade.selectReceive}.` }}</h1>
    <div @click="back">
      <v-btn depressed>
        Back
      </v-btn>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Success',
  methods: {
    back() {
      this.$router.push('/')
    },
    ...mapMutations("fund", ['setDefaultLastTrade'])
  },
  beforeDestroy() {
    this.setDefaultLastTrade()
  },
  computed: {
    ...mapState("fund", ['lastTrade']),
  }
}
</script>
