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
          :goalTypes="goalTypes"
          :accountTypes="accountTypes"
          :accountType.sync="form.accountType"
          :goalType.sync="form.goalType"
          :name.sync="form.name"
          :family.sync="form.family"
          :gender.sync="form.gender"
          :nationalCode.sync="form.nationalCode"
          :maritalStatus.sync="form.maritalStatus"
          @next="next"
          @prev="prev"
        />
        <Step2Company
          v-else
          :goalTypes="goalTypes"
          :accountTypes="accountTypes"
          :accountType.sync="form.accountType"
          :goalType.sync="form.goalType"
          :participants.sync="form.participants"
          :name.sync="form.name"
          :number.sync="form.number"
          @next="next"
          @prev="prev"
        />
      </v-stepper-content>

      <v-stepper-content step="3">
        <Step3
          @next="next"
          @prev="prev"
          :accountTypes="accountTypes"
          :form="form"
        />
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import { Step1, Step2Person, Step2Company, Step3 } from "./Steps";

export default {
  components: { Step1, Step2Company, Step2Person, Step3 },
  data: () => ({
    currentStep: 1,
    form: {
      type: "",
      accountType: 1,
      goalType: 1,
      //person
      name: "",
      family: "",
      nationalCode: "",
      gender: "",
      maritalStatus: "",
      //company
      name: "",
      number: "",
      participants: []
    },

    goalTypes: [
      {
        title: "انجام امورمالی",
        value: 1
      },
      {
        title: "پس‌انداز",
        value: 2
      },
      {
        title: "دریافت حقوق",
        value: 3
      },
      {
        title: "سرمایه‌گذاری",
        value: 4
      },
      {
        title: "سایر",
        value: 5
      }
    ],
    accountTypes: [
      {
        title: "قرض الحسنه جاری",
        value: 1
      },
      {
        title: "قرض الحسنه پس‌انداز",
        value: 2
      },
      {
        title: "سرمایه گذاری کوتا‌مدت",
        value: 3
      },
      {
        title: "سرمایه گذاری بلند‌مدت",
        value: 4
      }
    ]
  }),
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
