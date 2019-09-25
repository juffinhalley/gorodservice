<template>
  <v-navigation-drawer
    app
    temporary
    right
    :value="drawer"
  >
    <v-list>
      <v-list-tile
        v-for="item in items"
        :key="item.id"
        @click='goTo(item)'
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Drawer',
  data () {
    return {
      items: [
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
  computed: {
    drawer () {
      return this.$store.state.drawer
    }
  },
  methods: {
    goTo (item) {
      this.$store.commit('openDrawer');
      this.$vuetify.goTo(item.href);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

</style>
