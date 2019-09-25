<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="error" dark large round v-on="on">Хочу тест-драйв !</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Хочу тест-драйв !</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Ваше имя" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Телефон" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Email" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*поля, обязательные к заполнению</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Отмена</v-btn>
          <v-btn color="blue darken-1" flat @click="dialog = false">Отправить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'PromotionForm',
  data () {
    return {
      dialog: false
    }
  }
}
</script>

<style>

</style>
