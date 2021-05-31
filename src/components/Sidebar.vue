<template>
  <aside>
    <Logo class="sidebar__logo" />
    <hr>
    <ul class="sidebar__list">
      <template v-for="(icon, index) in iconsList">
        <li
          :key="`icon_${index}`"
          class="sidebar__list-icon"
          :class="{active: icon === 'MessageAltFill'}"
        >
          <component class="sidebar__icon-wrapper" :is="icon" />
        </li>
      </template>
    </ul>
  </aside>
</template>

<script>
/* eslint-disable */
export default {
  components: {
    BagFill: () => import('@/assets/img/svg/Bag_fill.svg'),
    BasketFill: () => import('@/assets/img/svg/Basket_fill.svg'),
    ChartFill: () => import('@/assets/img/svg/Chart_fill.svg'),
    ChatFill: () => import('@/assets/img/svg/Chat_fill.svg'),
    DateRangeFill: () => import('@/assets/img/svg/Date_range_fill.svg'),
    HomeFill: () => import('@/assets/img/svg/Home_fill.svg'),
    LockFill: () => import('@/assets/img/svg/Lock_fill.svg'),
    MessageAltFill: () => import('@/assets/img/svg/Message_alt_fill.svg'),
    MicFill: () => import('@/assets/img/svg/Mic_fill.svg'),
    PinAltFill: () => import('@/assets/img/svg/Pin_alt_fill.svg'),
    PipeFill: () => import('@/assets/img/svg/Pipe_fill.svg'),
    UserCircle: () => import('@/assets/img/svg/User_circle.svg'),
    WalletFill: () => import('@/assets/img/svg/Wallet_fill.svg'),
    Logo: () => import('@/assets/img/svg/app-store.svg')
  },
  data: () => ({
    iconsList: [
      'BagFill',
      'BasketFill',
      'ChartFill',
      'ChatFill',
      'DateRangeFill',
      'HomeFill',
      'LockFill',
      'MessageAltFill',
      'MicFill',
      'PinAltFill',
      'PipeFill',
      'UserCircle',
      'WalletFill',
    ]
  })
}
</script>

<style scoped lang="scss">
  aside {
    padding: 18px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 36px);
    width: 76px;
    background-color: white;  
  }
  hr {
    width: 80%;
    margin: 24px 0;
  }
  .sidebar__list {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .sidebar__list-icon {
    margin-bottom: 16px;
    list-style-type: none;
  } 
  .sidebar__icon-wrapper {
    path, rect {
      fill: #7d879b;
    }
  }
  .active {
    svg, path {
      fill: #5093E1 !important;
    }
    &:before {
      content: "";
      height: 24px;
      width: 4px;
      left: 0;
      position: absolute;
      background-color: #5093E1;
    }
  }
</style>
