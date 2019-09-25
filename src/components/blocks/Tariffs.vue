<template>
  <v-layout
    wrap
    class="tariffs"
    id="tariffs"
  >
    <v-flex
      xs12
      class=""
    >
      <v-btn
        float
        block
        depressed
        class="tariffs__button ma-0"
        @click="tab = 'all'"
      >
        Тарифы
      </v-btn>
    </v-flex>
    <v-flex
      class="tariffs__button-wrapper"
    >
      <v-btn
        float
        block
        depressed
        class="tariffs__button ma-0"
        @click="tab = 'subscription'"
      >
        Абонентский
      </v-btn>
    </v-flex>
    <v-flex
      class="tariffs__button-wrapper"
    >
      <v-btn
        float
        block
        depressed
        class="tariffs__button ma-0"
        @click="tab = 'actual'"
      >
        Фактический
      </v-btn>
    </v-flex>
    <v-flex
      xs12
    >
    <div
      class="tarrifs__tab-content"
      v-if="tab === 'all'"
    >
      <v-data-table
        :items="specifications"
        class="tariffs__all-table elevation-1"
        hide-actions
        hide-headers
      >
        <template v-slot:items="props">
          <td class="text-xs-center">{{ props.item.sub }}</td>
          <td class="text-xs-center">{{ props.item.actual }}</td>
        </template>
      </v-data-table>
    </div>
    <div
      class="tarrifs__tab-content"
      v-else-if="tab === 'subscription'"
    >
      <v-card>
        <v-card-title
          primary-title
          class="tariffs__content-title"
        >
          <h2>Абонентский</h2>
          <h3>Оплачиваете абонентскую плату 6000р/мес. (до 150 кв.м.)</h3>
        </v-card-title>
        <v-card-text>
          Что входит:
        </v-card-text>
        <v-list>
          <v-list-tile
            v-for="subInfo in subsInfo"
            :key="subInfo.title"
          >
            <v-list-tile-content>
              <v-list-tile-title>
                {{ subInfo.title }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </div>
    <div
      class="tarrifs__tab-content"
      v-else-if="tab === 'actual'"
    >
    <v-card>
      <v-card-title
        primary-title
        class="tariffs__content-title"
      >
        <h2>Фактический</h2>
        <h3>Оплачиваете услуги по факту, согласно прайс-листа, в конце месяца одной платежкой, либо другим удобным для Вас способом</h3>
      </v-card-title>
      <v-card-text>
        Что входит:
      </v-card-text>
      <v-list>
        <v-list-tile
          v-for="actInfo in actsInfo"
          :key="actInfo.title"
        >
          <v-list-tile-content>
            <v-list-tile-title>
              {{ actInfo.title }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
    </div>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'Tariffs',
    data () {
      return {
        tab: 'all',
        subsInfo: [
          {
            title: 'Техническое обследование инженерных сетей, внутренней и внешней отделки, состояния мебели с заполнением чек-листа и выдачей заключения.'
          },
          {
            title: '3 заявки (электрик, сантехник, плотник)'
          },
          {
            title: 'Ремонт холодильного, климатического и прочего специализированного оборудования со скидкой 20%'
          },
          {
            title: 'Ремонт оборудования общепита (печи, плиты, тестомесы и т.д.) со скидкой 20%'
          },
          {
            title: 'Заявки выполняются в течении 12 часов с момента получения!'
          },
          {
            title: 'Аварийные заявки (срочные) в течении 2х часов!'
          }
        ],
        actsInfo: [
          {
            title: 'Все предоставляемые услуги'
          },
          {
            title: 'Заявки выполняются в течение 24х часов с момента получения!'
          },
          {
            title: 'Аварийные заявки (срочные) в течение 4х часов!'
          }
        ],
        specifications: [
          {
            sub: 'Заявки выполняются в течение 12 часов с момента получения!',
            actual: 'Заявки выполняются в течение 24 часов с момента получения!'
          },
          {
            sub: 'Аварийные заявки (срочные) в течение 2 часов!',
            actual: 'Аварийные заявки (срочные) в течение 4 часов!'
          },
          {
            sub: 'Техническое обследование инженерных сетей, внутренней и внешней отделки, состояния мебели с заполнением  чек-листа и выдачей заключения.',
            actual: '-'
          },
          {
            sub: 'Текущий осмотр - 1 раз в 6 мес., планово-предупредительный ремонт - 1 раз в год',
            actual: '-'
          },
          {
            sub: '20% скидка на ремонт технологического оборудования',
            actual: '-'
          },
          {
            sub: 'Оплата 6000р/ мес. (до 150 м.кв.).',
            actual: 'Оплата по фактически выполненному объему работ- согласно прейскуранта. В конце месяца одной платежкой или другим удобным способом.'
          }
        ]
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss">
.tariffs {
  &__content-title {
    flex-direction: column;
    justify-content: center;
    h2 {
      margin-bottom: 5px;
    }
  }
  &__all-table {
    tr {
      td {
        width: 50%;
      }
    }
  }
}
</style>
