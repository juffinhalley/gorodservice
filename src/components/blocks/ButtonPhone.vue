<template>
  <v-fab-transition>
    <v-btn
      icon
      color="#e34b41"
      bottom
      right
      fixed
      class="button-phone"
      @click.stop="openPhonePopup()"
      v-show="showButtonPhone"
    >
      <v-icon
        color="#f3f2e0"
      >
        call
      </v-icon>
        <div class="call-animation"></div>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: 'ButtonPhone',
  data() {
    return {
    }
  },
  computed: {
    showButtonPhone () {
      return this.$store.state.moreTreshhold;
    }
  },
  methods: {
    openPhonePopup () {
      this.$store.commit('togglePhonePopup')
    }
  },
  watch: {
  }
}
</script>

<style lang="scss">
.button-phone {
  z-index: 999;
  width: 10vh;
  height: 10vh;
  border-radius: 100%;
  i {
    font-size: 6vh;
  }
  .v-btn__content {
    height: inherit;
  }
}
.call-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    animation: play 3s linear infinite;
    backface-visibility: hidden;
    z-index: -1;
}
@keyframes play {
  0% {
    transform: scale(1);
  }
  15% {
    box-shadow: 0 0 0 5px rgba(47, 60, 81, 0.4);
  }
  25% {
    box-shadow: 0 0 0 10px rgba(47, 60, 81, 0.4), 0 0 0 20px rgba(47, 60, 81, 0.2);
  }
  25% {
    box-shadow: 0 0 0 15px rgba(47, 60, 81, 0.4), 0 0 0 30px rgba(47, 60, 81, 0.2);
  }
}
</style>
