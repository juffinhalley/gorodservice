<template>
  <v-container
    fluid
    grid-list-md
    id="our-advantages"
    class="our-advantages parallax"
  >
    <v-layout class="mb-3">
      <v-flex>
        <h2 class="our-advantages__title">
          Наши преимущества:
        </h2>
      </v-flex>
    </v-layout>
    <v-layout
      wrap
      justify-center
    >
      <v-flex
        v-for="advantage in advangatesInfo"
        :key="advantage.id"
        xs12
        md2
      >
        <v-card
          flat
          color="transparent"
          class="our-advantages__card"
          height="200"
        >
          <div class="our-advantages__image">
            <component
              :is="advantage.svg"
              width="100"
              height="100"
            ></component>
          </div>
          <v-card-title class="our-advantages__card-title">
            <div class="text-xs-center">
              {{ advantage.title }}
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import IconMultiService from '@/components/icons/IconMultiService.vue';
import IconWarranty from '@/components/icons/IconWarranty.vue';
import IconManager from '@/components/icons/IconManager.vue';
import IconAllDay from '@/components/icons/IconAllDay.vue';
import IconDispatcher from '@/components/icons/IconDispatcher.vue';
import IconСonsumables from '@/components/icons/IconСonsumables.vue';
import IconEmergencySecond from '@/components/icons/IconEmergencySecond.vue';
import IconSavingBudget from '@/components/icons/IconSavingBudget.vue';
import IconSavingTime from '@/components/icons/IconSavingTime.vue';
  export default {
    name: 'OurAdvantages',
    data () {
      return {
        advangatesInfo: [
          {
            title: 'Мультисервис по обслуживанию вашей недвижимости в Едином Договоре',
            svg: 'IconMultiService'
          },
          {
            title: 'Всегда исполняем свои гарантийные обязательства',
            svg: 'IconWarranty'
          },
          {
            title: 'Персональный менеджер',
            svg: 'IconManager'
          },
          {
            title: 'Всегда наготове круглосуточная аварийная служба',
            svg: 'IconAllDay'
          },
          {
            title: 'У нас есть круглосуточная диспетчерская служба',
            svg: 'IconDispatcher'
          },
          {
            title: 'Расходные материалы всегда в наличии',
            svg: 'icon-consumables'
          },
          {
            title: 'Аварийный выезд в течении 2х часов',
            svg: 'IconEmergencySecond'
          },
          {
            title: 'Экономия бюджета',
            svg: 'IconSavingBudget'
          },
          {
            title: 'Экономия времени',
            svg: 'IconSavingTime'
          }
        ]
      }
    },
    components: {
      IconMultiService,
      IconWarranty,
      IconManager,
      IconAllDay,
      IconDispatcher,
      'icon-consumables': IconСonsumables,
      IconEmergencySecond,
      IconSavingBudget,
      IconSavingTime
    }
  }
</script>

<style lang="scss">
.our-advantages {
  background-image: url("~@/assets/images/ba-bg4-1280.jpg");
  &__title {
    text-align: center;
    margin-bottom: 30px;
  }
  &__card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__card-title {
    display: inline-flex;
    justify-content: center;
    align-items: baseline;
    text-align: center;
    height: 12vh;
    font-weight: 500;
  }
  &__card-list {
    list-style: none;
    font-size: 14px;
    font-weight: 300;
  }
  &__card-list-item {
    padding-bottom: 5px;
  }
}
</style>
