<template>
  <div class="mt-16">
    <h1 class="d-flex justify-center exchanger__title">Converter</h1>
    <div class="d-flex mx-auto mt-8 justify-space-between exchanger__fields-wrapper">
      <div class="exchanger__field-wrapper--small">
        <v-select
          v-model="selectGive"
          :items="CURRENCY_GIVE"
          label="Give"
          @change="inputGiveComputed = inputGiveComputed"
        />
      </div>
      <div class="exchanger__field-wrapper--big">
        <v-text-field type="number"
          v-model="inputGiveComputed"
          :label="`Currency in ${selectGive}`"
          hide-details="auto"
        />
      </div>
      <div @click="changeSelect">
        <img class="exchanger__img-refresh"  :src="require('@/assets/img/svg/refresh.svg')" alt="refresh">
      </div>
      <div class="exchanger__field-wrapper--small">
        <v-select
          v-model="selectReceive"
          :items="CURRENCY_RECEIVE"
          label="Receive"
          @change="inputReceiveComputed = inputReceiveComputed"
        />
      </div>
      <div class="exchanger__field-wrapper--big">
        <v-text-field type="number"
          v-model="inputReceiveComputed"
          :label="`Currency in ${selectReceive}`"
          hide-details="auto"
        />
      </div>
    </div>
    <button :disabled="isActive" class="d-flex justify-center mx-auto mt-16 exchange__button-wrapper" type="submit">Trade</button>
    <div class="d-flex justify-center">
      <div class="mt-16 exchanger__rate-wrapper">
        <span>Rate</span> 
        <br class="mt-16"> {{ rate }}
      </div>
      <div class="mx-auto mt-16 exchanger__fund-wrapper">
        <span>Fund</span> 
        <br class="mt-16"> {{ fund }}
      </div>  
    </div>
  </div>
</template>

<script>
import { CURRENCY_GIVE, CURRENCY_RECEIVE, CURRENCY_RATES } from '@/constants/CURRENCIES'

export default {
  name: 'Exchanger',
  data: () => ({
    isActive: false,
    temp: CURRENCY_GIVE[0],
    inputGive: 0,
    inputReceive: 0,
    selectGive: CURRENCY_GIVE[0],
    selectReceive: CURRENCY_RECEIVE[0],
    CURRENCY_GIVE,
    CURRENCY_RECEIVE,
  }),
  methods: {
    changeSelect() {
      this.temp = this.selectGive
      this.selectGive = this.selectReceive
      this.selectReceive = this.temp
    }
  },
  computed: {
    rate() {
      return `1 ${this.selectReceive} = ${CURRENCY_RATES[this.selectReceive] / CURRENCY_RATES[this.selectGive]} ${this.selectGive}`
    },
    fund() {
      return `500.000 ${this.selectReceive}`
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
}

.exchanger__fund-wrapper {
  position: fixed;
  right: 20%;
}

.exchange__button-wrapper {
  width: 200px;
  padding: 16px;
  background: rgb(226, 226, 226);
}
</style>
