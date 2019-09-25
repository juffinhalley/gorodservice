<template>
  <div class="promotion">
    <h2 class="promotion__title">
      СПЕЦИАЛЬНОЕ ПРЕДЛОЖЕНИЕ
    </h2>
    <div class="promotion__subtitle">
      Новым клиентам 7 дней бесплатного тест-драйва услуг!
    </div>
    <div class="promotion__wrapper">
      <div class="promotion__time-title">
        До конца акции осталось:
      </div>
      <div class="promotion__time">
        <Countdown></Countdown>
      </div>
    </div>
    <div class="promotion__button">
      <PromotionForm></PromotionForm>
    </div>
  </div>
</template>

<script>
import Countdown from './Countdown';
import PromotionForm from '@/components/blocks/popups/PromotionForm';
  export default {
    name: 'StorePromotion',
    data () {
      return {
      }
    },
    components: {
      Countdown,
      PromotionForm
    }
  }
</script>

<style lang="scss">
  .promotion {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 30px;
    color: $brendRed;
    font-size: 2vw;
    text-shadow: 0 0 2px $black;

    &__title {
      font-size: 3vw;
      font-weight: 700;
      margin-bottom: 5px;
    }

    &__subtitle {
      margin-bottom: 20px;
    }

    &__wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }

    &__time {
      width: 100%;
    }
  }
</style>
