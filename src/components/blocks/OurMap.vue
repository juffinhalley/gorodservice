<template>
  <v-layout id="map-contacts">
    <v-flex xs12>
      <yandex-map
        :coords="[57.105801, 65.568016]"
        zoom="17"
        style="width: 100%; height: 80vh;"
        :behaviors="['drag', 'multiTouch']"
        :controls="['default']"
        map-type="map"
        :use-object-manager="true"
        @map-was-initialized="initHandler"
      >
        <ymap-marker
          marker-id="1"
          marker-type="placemark"
          :coords="[57.105801, 65.568016]"
          :balloonTemplate = "balloonTemplate"
          :icon="{layout: 'islands#redDotIcon'}"
          :options="{
            hasHint: false,
            cursor: 'default',
            balloonCloseButton: false
          }"
        ></ymap-marker>
      </yandex-map>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    name: 'OurMap',
    data () {
      return {
      }
    },
    computed: {
      balloonTemplate() {
        return `
          <h1>Hi, everyone!</h1>
          <p>I am here!</p>
          <img src="http://via.placeholder.com/350x150">
        `
      }
    },
    methods: {
      initHandler(obj) {
        const myBalloon = obj.geoObjects.get(0);
        myBalloon.objects.balloon.open(1);
      }
    },
    components: {
    }
  }
</script>

<style lang="scss">
</style>
