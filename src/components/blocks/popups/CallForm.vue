<template>
  <v-layout row justify-center>
    <v-dialog v-model="showPhonePopup" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Оставьте нам номер и мы Вам перезвоним!</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Телефон" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="togglePhonePopup()">Отмена</v-btn>
          <v-btn color="blue darken-1" flat @click="togglePhonePopup()">Жду звонка</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  name: 'CallForm',
  data () {
    return {
    }
  },
  computed: {
    showPhonePopup () {
      return this.$store.state.showPhonePopup
    }
  },
  methods: {
    togglePhonePopup () {
      this.$store.commit('togglePhonePopup')
    }
  }
}
</script>

<style>

</style>
