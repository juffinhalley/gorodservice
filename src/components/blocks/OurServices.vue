<template>
  <div
    id="our-services"
    class="our-services"
  >
    <h2 class="our-services__title">
      Наши услуги:
    </h2>
    <div class="our-services__tabs">
      <v-tabs
        v-model="active"
        height="200"
        color="transparent"
        slider-color="transparent"
        centered
      >
        <v-tab
          v-for="tabTitle in tabTitles"
          :key="tabTitle.id"
        >
          <v-card
            flat
            color="transparent"
            class="our-services__card"
          >
            <div class="our-services__image">
              <component
                :is="tabTitle.svg"
                width="80"
                height="80"
              ></component>
            </div>
            <v-card-title class="our-services__card-title">
              {{ tabTitle.title }}
            </v-card-title>
          </v-card>
        </v-tab>
        <v-tab-item
          v-for="tabItem in tabContent"
          :key="tabItem.id"
          class="our-services__tab-content"
        >
          <div class="our-services__main-text">
            {{ tabItem.text }}
          </div>
          <ul class="our-services__text-second">
            <li
              v-for="secondItem in tabItem.textSecond"
              :key="secondItem.id"
              class="our-services__text-second-item"
            >
              {{ secondItem }}
            </li>
          </ul>
        </v-tab-item>
      </v-tabs>
    </div>
  </div>
</template>

<script>
import IconElectrician from '@/components/icons/IconElectrician.vue';
import IconPlumbing from '@/components/icons/IconPlumbing.vue';
import IconFurniture from '@/components/icons/IconFurniture.vue';
import IconFrigerators from '@/components/icons/IconFrigerators.vue';
import IconEmergency from '@/components/icons/IconEmergency.vue';

  export default {
    name: 'OurServices',
    data () {
      return {
        active: null,
        tabTitles: [
          {
            title: 'Обслуживание систем электроснабжения',
            svg: 'IconElectrician'
          },
          {
            title: 'Обслуживание систем отопления, водоснабжения и водоотведения',
            svg: 'IconPlumbing'
          },
          {
            title: 'Обслуживание мебельного фонда',
            svg: 'IconFurniture'
          },
          {
            title: 'Ремонт холодильного и прочего специального оборудования',
            svg: 'IconFrigerators'
          },
          {
            title: 'Аварийная служба. Выезд в течении 2 часов!',
            svg: 'IconEmergency'
          }
        ],
        tabContent: [
          {
            text: 'Работы по постоянному содержанию в нормальном состоянии всего электрооборудования посредством переодических осмотров, замеров параметров сети, планово предупредительных ремонтов, устранение аварийных и ненормальных режимов работы.',
            textSecond: [
              'проведение оперативно-ремонтного обслуживания, ППР электрооборудования, кабельных и проводных линий, распределительных щитов, освещения, пускорегулирующей и коммутационной аппаратуры;',
              'контроль за расходом электроэнергии и принятие мер по ее экономии;',
              'проведение электрических испытаний и измерение электрооборудования в соответствии с требованиями ПТЭЭП;',
              'техническое обслуживание и ремонт ИБП и ДГУ;',
              'круглосуточное дежурство работников электротехнического отдела на объектах Заказчика.'
            ]
          },
          {
            text: 'Работы по постоянному содержанию в нормальном состоянии всего сантехоборудования и сетей водоснабжения, отопления и канализации посредством переодических осмотров, замеров параметров сети, планово предупредительных ремонтов, устранение аварийных и ненормальных режимов работы, подготовки к отопительному сезону.',
            textSecond: [
              'проведение оперативно-ремонтного обслуживания, ППР сантехнического оборудования, водоканализационных систем и сетей, теплотехнического оборудования;',
              'контроль за работой насосов ГВС, ХВС, циркуляционных, дренажных, фекальных, гликолевых;',
              'подготовка и сдача ЦТП (ИТП) к работе в зимний период;',
              'ремонт и замене трубопроводов, сантехнических приборов, водонагревателей, фильтров, радиаторов и конвекторов, водоразборной арматуры;',
              'замена насосов ГВС, ХВС, циркуляционных, дренажных и т.д.;'
            ]
          },
          {
            text: 'Поддержание в нормальном эстетическом и функциональном состояния мебельного фонда, дверей, окон, поверхности стен, пола, фасадов. Сборка мебели, стеллажей, витрин и т.д.',
            textSecond: [
              'ремонт и замена петель межкомнатных дверей, дверных и мебельных ручек;',
              'установка и замена скобяных изделий;',
              'замена мебельной фурнитуры;',
              'укрепление, ремонт, сборка и установка полок, стеллажей, витрин;',
              'сборка офисной мебели;',
              'повесить картину на стену, установить зеркало в туалете и многое другое.'
            ]
          },
          {
            text: 'Обслуживание, ремонт и установка холодильного оборудования, сплит систем, теплового и технологического оборудование предприятий общепита.',
            textSecond: [
              'выявление проблемного участка – узлы и детали, которые вышли из строя (диагностика);',
              'установка новой детали и запуск оборудования;',
              'дальнейшая настройка оборудования на нужный рабочий режим.'
            ]
          },
          {
            text: '24/7 в любое время дня и ночи! Дежурный электрик и сантехник',
            textSecond: [
              'дежурный электрик;',
              'дежурный сантехник;',
              '24/7 в любое время дня и ночи!',
              'выезд в течении 2 часов с момента поступления заявки.'
            ]
          }
        ]
      }
    },
    components: {
      IconElectrician,
      IconPlumbing,
      IconFurniture,
      IconFrigerators,
      IconEmergency
    }
  }
</script>

<style lang="scss">
.our-services {
  padding: 24px;
  &__title {
    text-align: center;
    margin-bottom: 30px;
  }
  &__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &__image {
    display: flex;
    width: 80px;
    height: 80px;
  }
  &__tabs {
    .v-tabs__container {
      align-items: baseline;
    }
  }
  &__tab-content {
    display: flex;
    align-items: center;
    padding: 10px;
    line-height: 180%;
    height: 200px;
  }
  &__main-text {
    max-width: 40vw;
    text-align: center;
    padding: 10px;
  }
  &__text-second {
    padding: 10px;
  }
  &__text-second-item {
    position: relative;
    padding-left: 15px;
    list-style-type: none;
    &::before {
      position: absolute;
      content:"—";
      top: 0;
      left: 0;
    }
  }
}
</style>
