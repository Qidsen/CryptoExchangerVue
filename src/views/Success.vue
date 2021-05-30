<template>
  <div class="d-flex flex-column align-center mx-auto mt-16">
    <h1 class="success__title">You exchanged your {{ `${lastTrade.inputGive} ${lastTrade.selectGive} to ${lastTrade.inputReceive} ${lastTrade.selectReceive}.` }}</h1>
    <router-link class="mt-8 success__link-back" to="/">
      <v-btn depressed>
        Back
      </v-btn>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Success',
  methods: {
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

<style lang="scss" scoped>
.success__title {
  color: $success-color;
}

.success__link-back {
  text-decoration: none;
}
</style>
