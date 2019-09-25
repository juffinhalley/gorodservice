<template>
  <v-layout
    column
    class="block-acquaintance parallax"
  >
    <TitleServices></TitleServices>
    <StorePromotion></StorePromotion>
  </v-layout>
</template>

<script>
import TitleServices from '@/components/blocks/TitleServices.vue';
import StorePromotion from '@/components/blocks/StorePromotion.vue';

  export default {
    name: 'BlockAcquaintance',
    data () {
      return {
      }
    },
    computed: {
    },
    components: {
      TitleServices,
      StorePromotion
    }
  }
</script>

<style lang="scss">
.block-acquaintance {
  height: calc(100vh - 95px);
  min-height: 600px;
  background-image: url("~@/assets/images/bg-promo_1280x852.jpg");
}
</style>
