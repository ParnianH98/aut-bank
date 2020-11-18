<template>
  <v-stepper v-model="currentStep" non-linear>
    <v-stepper-header>
      <v-stepper-step :complete="currentStep > 1" step="1">
        نوع متقاضی
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step :complete="currentStep > 2" step="2">
        اطلاعات متقاضی
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3" />
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <step1 :type.sync="form.type" @next="next" />
      </v-stepper-content>

      <v-stepper-content step="2">
        <Step2Person
          v-if="form.type === 'person'"
          :type.sync="form.type"
          :purpose.sync="form.purpose"
          @next="next"
          @prev="prev"
        />
        <Step2Company
          v-else
          :type.sync="form.type"
          :participants.sync="form.participants"
          @next="next"
          @prev="prev"
        />
      </v-stepper-content>

      <v-stepper-content step="3">
        <Step3 @next="next" @prev="prev" />
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import { Step1, Step2Person, Step2Company, Step3 } from "./Steps";

export default {
  components: { Step1, Step2Company, Step2Person, Step3 },
  data() {
    return {
      currentStep: 1,
      form: {
        type: "",
        purpose: -1,
        participants: []
      }
    };
  },
  methods: {
    next() {
      this.currentStep += 1;
    },
    prev() {
      this.currentStep -= 1;
    }
  }
};
</script>
