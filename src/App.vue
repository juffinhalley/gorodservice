<template>
<v-app
  v-scroll="onScroll"
  v-resize="onResize"
>
  <Drawer></Drawer>
  <Toolbar></Toolbar>
  <v-content>
    <v-container fluid pa-0>
      <router-view></router-view>
    </v-container>
  </v-content>
  <Footer></Footer>
  <ButtonUp></ButtonUp>
  <ButtonPhone></ButtonPhone>
  <CallForm></CallForm>
</v-app>
</template>

<script>
import Toolbar from './components/main/Toolbar.vue';
import Drawer from './components/main/Drawer.vue';
import Footer from './components/main/Footer.vue';
import ButtonUp from './components/blocks/ButtonUp.vue';
import ButtonPhone from './components/blocks/ButtonPhone.vue';
import CallForm from './components/blocks/popups/CallForm.vue';

export default {
  name: 'App',
  components: {
    Toolbar,
    Drawer,
    Footer,
    ButtonUp,
    ButtonPhone,
    CallForm
  },
  data() {
    return {
      scrollView: 300
    }
  },
  methods: {
    onScroll (event) {
      const scrollPoint = event.target.scrollingElement.scrollTop;
      if (scrollPoint > this.scrollView) {
        if (this.$store.state.moreTreshhold != true) {
          this.$store.commit('moreTreshhold', true);
        }
      } else {
        if (this.$store.state.moreTreshhold != false) {
          this.$store.commit('moreTreshhold', false);
        }
      }
    },
    onResize () {
      this.$store.commit('windowSize', {
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
  },
  mounted () {
    this.onResize()
  },
}

</script>

<style lang="scss">
@import '~@/assets/scss/app.scss';

body {
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar {
    width: 12px;
    background-color: #F5F5F5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);
    background-color: #555;
  }
}

#app {
  background: $light;
}
</style>
