<template>
  <v-container
    fluid
    class="your-benefit"
    id="your-benefit"
  >
    <v-layout column>
      <v-flex xs12>
        <h2 class="your-benefit__title">
          Ваша выгода в цифрах:
        </h2>
        <p class="your-benefit__info">
          В большинстве случаев для обслуживания вашего магазина невыгодно нанимать отдельного штатного сотрудника. А загружать существующих сотрудников, предлагая выполнять несвойственные им виды работ, может быть не только нерентабельно, но и опасно (как для сохранности вашего оборудования, так и для самих сотрудников).
        </p>
        <p class="your-benefit__info">
          Сравните затраты на собственого штатного сотрудника и затраты на обращение к нашим мастерам для выполнения одних и тех же работ на примере небольшого магазина:
        </p>
      </v-flex>
      <v-flex>
        <v-data-table
            :headers="headers"
            :items="benefits"
            class="your-benefit__table"
            hide-actions
            disable-initial-sort
        >
          <template v-slot:items="props">
            <td>{{ props.item.cost }}</td>
            <td class="text-xs-right">
              {{ props.item.regular }}
            </td>
            <td class="text-xs-right">
              {{ props.item.ourCompany }}
            </td>
          </template>

          <template v-slot:footer>
            <td>
              <strong>Стоимость услуг:</strong>
            </td>
            <td class="text-xs-right">
              <strong>54 600 руб.</strong>
            </td>
            <td class="text-xs-right">
              <strong>6 950 руб.</strong>
            </td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'YourBenefit',
    data () {
      return {
        headers: [
          {
            text: 'Ваши ежемесячные затраты',
            align: 'left',
            sortable: false,
            value: 'cost'
          },
          { text: 'Штатный специалист', sortable: false, align: 'right', value: 'regular' },
          { text: 'Наша компания', sortable: false, align: 'right', value: 'ourCompany' },
        ],
        benefits: [
          {
            cost: 'Средний оклад специалиста',
            regular: '37 000 руб.',
            ourCompany: '0 руб.',
          },
          {
            cost: 'Подоходный налог (13%)',
            regular: '5 200 руб.',
            ourCompany: '0 руб.',
          },
          {
            cost: 'Выплаты в социальные фонды (31%)',
            regular: '12 400 руб.',
            ourCompany: '0 руб.',
          },
          {
            cost: 'Предоставление оплачиваемого отпуска',
            regular: 'Да',
            ourCompany: 'Нет',
          },
          {
            cost: 'Предоставление оплачиваемого больничного',
            regular: 'Да',
            ourCompany: 'Нет',
          },
        ]
      }
    },
  }
</script>

<style lang="scss">
.your-benefit {
  &__title {
    text-align: center;
    margin-bottom: 30px;
  }
  &__info {
    font-size: 14px;
    font-weight: 400;
    text-align: center;
  }
  &__table {
    padding: 0 2vw;
    .v-table {
      background-color: transparent;
    }
  }
}
</style>
