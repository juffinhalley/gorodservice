<template>
  <v-container>
    <v-layout column>
      <v-flex>
        <icon-electrician
          width="200"
          height="200"
        >
        </icon-electrician>
        <icon-plumbing
          width="200"
          height="200"
        ></icon-plumbing>
        <icon-furniture
          width="200"
          height="200"
        ></icon-furniture>
        <icon-frigerators
          width="200"
          height="200"
        ></icon-frigerators>
        <icon-emergency
          width="200"
          height="200"
        ></icon-emergency>
      </v-flex>
      <v-flex>
        <icon-contract-first
          width="200"
          height="200"
        ></icon-contract-first>
        <icon-contract-second
          width="200"
          height="200"
        ></icon-contract-second>
        <icon-warranty
          width="200"
          height="200"
        ></icon-warranty>
        <icon-manager
          height="200"
          width="200"
        ></icon-manager>
        <icon-all-day
          width="200"
          height="200"
        ></icon-all-day>
        <icon-dispatcher
          width="200"
          height="200"
        ></icon-dispatcher>
        <icon-consumables
          width="200"
          height="200"
        ></icon-consumables>
        <icon-emergency-second
          width="200"
          height="200"
        ></icon-emergency-second>
        <icon-saving-budget
          width="200"
          height="200"
        ></icon-saving-budget>
        <icon-saving-time
          width="200"
          height="200"
        ></icon-saving-time>
      </v-flex>
    </v-layout>
    <v-layout class="text-xs-center justify-center">Новые</v-layout>
    <v-layout>
      <v-flex>
        <icon-contract-third
          width="200"
          height="200"
        ></icon-contract-third>
        <icon-contract-four
          width="200"
          height="200"
        ></icon-contract-four>
        <icon-multi
          width="200"
          height="200"
        ></icon-multi>
        <icon-multi-service
          width="200"
          height="200"
        ></icon-multi-service>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import IconElectrician from '@/components/icons/IconElectrician.vue';
import IconPlumbing from '@/components/icons/IconPlumbing.vue';
import IconFurniture from '@/components/icons/IconFurniture.vue';
import IconFrigerators from '@/components/icons/IconFrigerators.vue';
import IconEmergency from '@/components/icons/IconEmergency.vue';
import IconContractFirst from '@/components/icons/IconContractFirst.vue';
import IconContractSecond from '@/components/icons/IconContractSecond.vue';
import IconWarranty from '@/components/icons/IconWarranty.vue';
import IconManager from '@/components/icons/IconManager.vue';
import IconAllDay from '@/components/icons/IconAllDay.vue';
import IconDispatcher from '@/components/icons/IconDispatcher.vue';
import IconСonsumables from '@/components/icons/IconСonsumables.vue';
import IconEmergencySecond from '@/components/icons/IconEmergencySecond.vue';
import IconSavingBudget from '@/components/icons/IconSavingBudget.vue';
import IconSavingTime from '@/components/icons/IconSavingTime.vue';
import IconContractThird from '@/components/icons/IconContractThird.vue';
import IconContractFour from '@/components/icons/IconContractFour.vue';
import IconMulti from '@/components/icons/IconMulti.vue';
import IconMultiService from '@/components/icons/IconMultiService.vue';

export default {
  name: 'Test',
  data() {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  watch: {
  },
  components: {
    IconElectrician,
    IconPlumbing,
    IconFurniture,
    IconFrigerators,
    IconEmergency,
    IconContractFirst,
    IconContractSecond,
    IconWarranty,
    IconManager,
    IconAllDay,
    IconDispatcher,
    'icon-consumables': IconСonsumables,
    IconEmergencySecond,
    IconSavingBudget,
    IconSavingTime,
    IconContractThird,
    IconContractFour,
    IconMulti,
    IconMultiService
  }
}
</script>

<style lang="scss">

</style>
