<template>
  <v-fab-transition>
    <v-btn
      icon
      flat
      top
      right
      fixed
      class="button-to-top"
      @click='$vuetify.goTo(0)' v-show="showButtonUp">
      <v-icon color="#e34b41">
        keyboard_arrow_up
      </v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: 'ButtonUp',
  data() {
    return {}
  },
  computed: {
    showButtonUp() {
      return this.$store.state.moreTreshhold;
    }
  },
  methods: {},
  watch: {}
}
</script>

<style lang="scss">
.button-to-top {
  z-index: 999;
  width: 10vh;
  height: 10vh;
  border-radius: 100%;
  i {
    font-size: 10vh;
  }
  .v-btn__content {
    height: inherit;
  }
}
</style>
