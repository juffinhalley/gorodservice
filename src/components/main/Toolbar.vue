<template>
  <header class="header">
    <v-toolbar
      app
      height="95px"
      flat
      :manual-scroll="showToolbar"
      color="#f3f2e0"
      clipped-right
    >
      <div class="header__container">
        <v-toolbar-title
        class="mr-5"
        >
          <a
            class="header__logo"
            href="/"
          >
            <img src="@/assets/images/logo.png" alt="Gorod Service">
          </a>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items
          class="header__items"
        >
          <button
            v-for="button in menuButtons"
            :key="button.title"
            @click='$vuetify.goTo(button.href)'
            class="button button--default button--hov-red hidden-sm-and-down mr-2"
          >
            <div class="button__content">
              {{ button.title }}
            </div>
          </button>
          <a
            class="button button--default button--hov-red"
            href="tel: +7-932-488-49-79"
          >
            <div class="button__content">
              <v-icon
                color="rgb(227, 75, 65)"
                class="mr-2"
              >
                call
              </v-icon>
              <span class="hidden-xs-only text-no-wrap">
                +7-932-488-49-79
              </span>
            </div>
          </a>
        </v-toolbar-items>
      </div>
      <v-toolbar-side-icon
        @click="drawerOpened"
        class="hidden-md-and-up"
      ></v-toolbar-side-icon>
    </v-toolbar>
  </header>
</template>

<script>
export default {
  name: 'Toolbar',
  props: {
  },
  data () {
    return {
      menuButtons: [
        {
          title: 'Наши услуги',
          href: '#our-services'
        },
        {
          title: 'Наши преимущества',
          href: '#our-advantages'
        },
        {
          title: 'Ваша выгода',
          href: '#your-benefit'
        },
        {
          title: 'Наши цены',
          href: '#tariffs'
        },
        {
          title: 'Контакты',
          href: '#map-contacts'
        }
      ]
    }
  },
  methods: {
    drawerOpened () {
      this.$store.commit('openDrawer');
    }
  },
  computed: {
    showToolbar () {
      return this.$store.state.moreTreshhold;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.header {
  .v-toolbar__content > *:last-child {
    margin-right: auto;
  }
  .v-toolbar__content > *:first-child,
  .v-toolbar__extension > *:first-child {
    margin-left: auto;
  }
  &__logo {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  &__container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    @media screen and (min-width: 768px) {
      padding: 0 15px;
    }
    @media screen and (min-width: 1200px) {
      width: 1170px;
    }
  }
  &__items {
    flex-shrink: 0;
    .button {
      .button {
        &__content {
          font-size: 13px;
          @media screen and (min-width: 1200px) {
            font-size: 16px;
          }
        }
      }
    }
  }
}
</style>
