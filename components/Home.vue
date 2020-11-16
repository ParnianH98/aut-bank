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
        <Step2Company v-else :type.sync="form.type" @next="next" @prev="prev" />
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>

        <v-btn color="primary" @click="currentStep = 1">
          Continue
        </v-btn>

        <v-btn text>
          Cancel
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import { Step1, Step2Person, Step2Company } from "./Steps";

export default {
  components: { Step1, Step2Company, Step2Person },
  data() {
    return {
      currentStep: 1,
      form: {
        type: "",
        purpose: -1
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
