<template>
  <div class="mt-16">
    <h1 class="d-flex justify-center exchanger__title">Converter</h1>
    <div class="d-flex mx-auto mt-8 justify-space-between exchanger__fields-wrapper">
      <div class="exchanger__field-wrapper--small">
        <v-select
          v-model="selectGive"
          :items="CURRENCY_SLUG"
          label="Give"
          @change="inputGiveComputed = inputGiveComputed"
        />
      </div>
      <div class="exchanger__field-wrapper--big">
        <v-text-field
          type="number"
          v-model="inputGiveComputed"
          :label="`Currency in ${selectGive}`"
          :error="Boolean(errorMsg)"
          hide-details="auto"
        />
      </div>
      <div @click="changeSelect">
        <img class="exchanger__img-refresh"  :src="require('@/assets/img/svg/refresh.svg')" alt="refresh">
      </div>
      <div class="exchanger__field-wrapper--small">
        <v-select
          v-model="selectReceive"
          :items="CURRENCY_SLUG"
          label="Receive"
          @change="inputReceiveComputed = inputReceiveComputed"
        />
      </div>
      <div class="exchanger__field-wrapper--big">
        <v-text-field type="number"
          v-model="inputReceiveComputed"
          :label="`Currency in ${selectReceive}`"
          hide-details="auto"
          :error-messages="errorMsg"
        />
      </div>
    </div>
    <div @click="tradeMoney" class="d-flex justify-center mt-16">
      <v-btn
        depressed
        :disabled="Boolean(errorMsg)"
      >
        {{ errorMsg ? 'Enter amount' : 'Exchange' }}
      </v-btn>
    </div>
    <div class="d-flex justify-center">
      <div class="mx-auto mt-16 exchanger__rate-wrapper">
        <span class="d-flex justify-center">Rate</span> 
        <p> {{ rate }} </p>
      </div>
      <div class="mx-auto mt-16 exchanger__fund-wrapper">
        <span class="d-flex justify-center">Fund</span> 
        <p> {{ fund }} </p>
      </div>
    </div>
  </div>
</template>

<script>
import { CURRENCY_SLUG, CURRENCY_RATES } from '@/constants/CURRENCIES'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Exchanger',
  data: () => ({
    isActive: false,
    inputGive: 0,
    inputReceive: 0,
    selectGive: CURRENCY_SLUG[0],
    selectReceive: CURRENCY_SLUG[1],
    CURRENCY_SLUG,
    errorMsg: ''
  }),
  methods: {
    ...mapMutations("fund", ["changeFund", "setLastTrade"]),
    changeSelect() {
      let temp = this.selectGive
      this.selectGive = this.selectReceive
      this.selectReceive = temp

      temp = this.inputGive
      this.inputGive = this.inputReceive
      this.inputReceive = temp  
    },
    tradeMoney() {
      if(!this.errorMsg) {
        this.changeFund(CURRENCY_RATES[this.selectReceive] * this.inputReceive)
        this.setLastTrade({
          selectGive: this.selectGive, selectReceive: this.selectReceive, inputGive: this.inputGive, inputReceive: this.inputReceive
        })
        this.$router.push('/success-trade')
      }
    }
  },
  computed: {
    ...mapState("fund", {
      ourFund: 'fund'
    }),
    rate() {
      return `1 ${this.selectReceive} = ${CURRENCY_RATES[this.selectReceive] / CURRENCY_RATES[this.selectGive]} ${this.selectGive}`
    },
    fund() {
      this.ourFund < this.inputReceive ? this.errorMsg = 'You have exceeded the currency reserve' : 
        (this.inputGive <= 0 || this.inputReceive <= 0 ? this.errorMsg = 'Please enter right values' : this.errorMsg = '')
  
      return `${this.ourFund / CURRENCY_RATES[this.selectReceive]} ${this.selectReceive}`
    },
    inputGiveComputed: {
      get() {
        this.isActive = true;
        return this.inputGive
      },
      set(val) {
        this.inputReceive = val * CURRENCY_RATES[this.selectGive] / CURRENCY_RATES[this.selectReceive]
        this.inputGive = val
      }
    },
    inputReceiveComputed: {
      get() {
        this.isActive = true;
        return this.inputReceive
      },
      set(val) {
        this.inputGive = val *  CURRENCY_RATES[this.selectReceive] / CURRENCY_RATES[this.selectGive]
        this.inputReceive = val
      }
    }
  }
}
</script>

<style scoped lang="scss">
.exchanger__title {  
  color: $main-color;
}

.exchanger__fields-wrapper {
  width: 70%;
}

.exchanger__field-wrapper--big {
  width: 300px;
}

.exchanger__field-wrapper--small {
  width: 100px;
}

.exchanger__img-refresh {
  width: 32px;
  height: 32px;
  position: relative;
  top: 16px;
}

.exchanger__rate-wrapper {
  position: fixed;
  left: 20%;
  color: grey;
}

.exchanger__fund-wrapper {
  position: fixed;
  right: 20%;
  color: grey;
}

.exchange__button-wrapper {
  width: 200px;
  padding: 16px;
  background: rgb(226, 226, 226);
}
</style>
