<template>
  <v-container
    fluid
    class="pa-0"
  >
    <v-layout column justify-center>
      <v-flex
        v-if="finished"
        text-xs-center
      >
        Всё, кина не будет! (Акции тоже)
      </v-flex>
      <v-flex
        v-else
        text-xs-center
      >
        <time :style="gradient">{{ display }}</time>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Countdown',
  data() {
    return {
      start: this.$DateTime.local(),
      now: this.$DateTime.local(),
      end: this.$DateTime.local().plus({ minutes: 5 }),
      tick: null
    }
  },
  computed: {
    total () {
      return this.end.diff(this.start).toObject()
    },
    remaining() {
      return this.end.diff(this.now).toObject()
    },
    elapsed () {
      return this.now.diff(this.start).toObject()
    },
    percent() {
      return this.elapsed.milliseconds / this.total.milliseconds * 100
    },
    display() {
      return this.$Duration.fromObject(this.remaining).toFormat('dd д. hh ч. mm мин.')
    },
    finished() {
      return this.now >= this.end.minus({ seconds: 1 })
    },
    gradient () {
      return {
        opacity: `${this.percent}%`
      }
    }
  },
  methods: {
  },
  watch: {
    now() {
      if (this.finished) {
        clearInterval(this.tick)
      }
    }
  },
  mounted() {
    this.tick = setInterval(() => {
      this.now = this.$DateTime.local()
    }, 1000)
  }
}
</script>

<style lang="scss">

</style>
