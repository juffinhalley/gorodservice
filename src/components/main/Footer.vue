<template>
  <v-footer
    height="auto"
  >
    <v-card
      flat
      tile
      color="#2f3c51"
      class="lighten-1 white--text text-xs-center"
    >
      <v-card-text>
        <v-btn
          flat
          class="social-buttons"
          href="https://ru.aliexpress.com/item/2015-Sale-Limited-Solid-Adult-Women-Boinas-Boina-Feminina-Hipster-Joker-Pearl-Rabbit-Fur-Beret-Multicolor/32525974754.html"
          target="_blank"
        >
          <icon-vk fillColor="#f3f2e0" :size="36"></icon-vk>
        </v-btn>
        <v-btn
          flat
          class="social-buttons"
          href="https://www.instagram.com/remont_tmn72_/"
          target="_blank"
        >
          <icon-instagram fillColor="#f3f2e0" :size="36"></icon-instagram>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2018 — <strong>Город Сервис</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang="scss">
.social-buttons {
  border-radius: 100%;
  width: 5vw;
  height: 5vw;
  min-width: auto;

  .v-btn__content {
    height: inherit;
  }
}
</style>
