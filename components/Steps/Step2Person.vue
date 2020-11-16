<template>
  <div>
    <div class="w-100 pt-1">
      <v-row>
        <v-col>
          <v-text-field label="نام" outlined />
        </v-col>
        <v-col>
          <v-text-field label="نام خانوادگی" outlined />
        </v-col>
        <v-col>
          <v-text-field label="نام پدر" outlined />
        </v-col>
        <v-col>
          <v-text-field label="محل تولد" outlined />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field label="شماره شناسنامه" outlined />
        </v-col>
        <v-col>
          <v-text-field label="کدحوزه‌صدور" outlined />
        </v-col>
        <v-col>
          <v-text-field label="تاریخ تولد" outlined />
        </v-col>
        <v-col>
          <v-text-field label="سری‌وسریال شناسنامه" outlined />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field label="تلفن همراه" outlined />
        </v-col>
        <v-col>
          <v-text-field label="تحصیلات" outlined />
        </v-col>
        <v-col>
          <v-text-field label="شغل" outlined />
        </v-col>
        <v-col>
          <v-text-field label="آدرس پست الکترونیکی" outlined />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-radio-group label="جنسیت :" v-model="row" row>
            <v-radio color="info" label="مرد" value="man" />
            <v-radio color="info" label="زن" value="female" />
          </v-radio-group>
        </v-col>
        <v-col>
          <v-radio-group label="وضعیت تاهل" v-model="row" row>
            <v-radio color="info" label="مجرد" value="bachelor" />
            <v-radio color="info" label="متاهل" value="married" />
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea
            outlined
            label="آدرس محل سکونت"
            placeholder="تهران - لواسان - بلوار امام خمینی - خیابان ..."
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field label="تلفن" outlined />
        </v-col>
        <v-col>
          <v-text-field label="نمابر" outlined />
        </v-col>
        <v-col>
          <v-text-field label="کد پستی" outlined />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea
            outlined
            label="آدرس محل کار"
            placeholder="تهران - لواسان - بلوار امام خمینی - خیابان ..."
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field label="تلفن" outlined />
        </v-col>
        <v-col>
          <v-text-field label="نمابر" outlined />
        </v-col>
        <v-col>
          <v-text-field label="کد پستی" outlined />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-radio-group label="حساب :" v-model="row" row>
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
          <v-radio-group label="هدف‌از افتتاح :" v-model="row" row>
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
    },
    purpose: {
      type: Number,
      default: -1
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
