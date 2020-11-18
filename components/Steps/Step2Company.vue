<template>
  <div>
    <div class="w-100 pt-1">
      <v-row>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field label="نام شرکت" outlined />
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field label="نام اختصاری" outlined />
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field label="شماره ثبت" outlined />
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field label="نوع شرکت" outlined />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field label="ملیت" outlined />
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field label="محل ‌ثبت" outlined />
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field label="نوع فعالیت" outlined />
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field label="شناسه ملی" outlined />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field label="تاریخ ‌ثبت" outlined />
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field label="کد اقتصادی" outlined />
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field label="سرمایه ثبت‌شده" outlined />
        </v-col>
        <v-col cols="12" lg="3" md="6" sm="12">
          <v-text-field label="آدرس پست الکترونیکی" outlined />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-radio-group
            label="حساب :"
            v-model="row"
            :row="!$vuetify.breakpoint.mobile"
          >
            <v-radio
              v-for="(type, index) in accountType"
              :key="index"
              color="info"
              :label="type.title"
              :value="type.value"
            />
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-radio-group
            label="هدف‌از افتتاح :"
            v-model="row"
            :row="!$vuetify.breakpoint.mobile"
          >
            <v-radio
              v-for="(type, index) in purposeType"
              :key="index"
              color="info"
              :label="type.title"
              :value="type.value"
            />
          </v-radio-group>
        </v-col>
      </v-row>
    </div>
    <div class="step-footer">
      <v-btn depressed color="error" outlined @click="$emit('prev')">
        مرحله قبل
      </v-btn>
      <v-btn depressed color="primary" outlined @click="$emit('next')">
        مرحله بعد
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    row: null,
    purposeType: [
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
    accountType: [
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
    handleClick(userType) {
      this.$emit("update:type", userType);
      this.$emit("next");
    }
  }
};
</script>
<style lang="scss" scoped>
.step-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
