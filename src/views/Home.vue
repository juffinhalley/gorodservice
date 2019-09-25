<template>
  <v-layout column>
    <BlockAcquaintance></BlockAcquaintance>
    <OurServices></OurServices>
    <OurAdvantages></OurAdvantages>
    <YourBenefit></YourBenefit>
    <Tariffs></Tariffs>
    <OurMap></OurMap>
  </v-layout>
</template>

<script>
import BlockAcquaintance from '@/components/blocks/BlockAcquaintance.vue';
import OurServices from '@/components/blocks/OurServices.vue';
import OurAdvantages from '@/components/blocks/OurAdvantages.vue';
import YourBenefit from '@/components/blocks/YourBenefit.vue';
import Tariffs from '@/components/blocks/Tariffs.vue';
import OurMap from '@/components/blocks/OurMap.vue';

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  components: {
    BlockAcquaintance,
    OurServices,
    OurAdvantages,
    YourBenefit,
    Tariffs,
    OurMap
  }
}
</script>
