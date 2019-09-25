<template>
  <div class="title-services">
    <h1>Техническое обслуживание магазинов, ресторанов, шоу-румов, офисов 24/7</h1>
  </div>
</template>

<script>
  export default {
    name: 'TitleServices',
    data () {
      return {
      }
    },
  }
</script>

<style lang="scss">
.title-services {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  user-select: none;
  padding-top: 30px;
  margin-bottom: 30px;
  h1 {
    font-size: 5vw;
    font-weight: 900;
    color: $brendCobalt;
    text-align: center;
    text-shadow: 0 0 5px $light;
  }
}
</style>
