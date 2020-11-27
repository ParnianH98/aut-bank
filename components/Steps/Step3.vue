<template>
  <div>
    <div class="text-center w-100 text--accent-4">
      <h1>در خواست شما با موفقیت ثبت شد.</h1>
      <h4 class="text--secondary">
        بعد از بررسی اطلاعات با شما تماس خواهیم گرفت.
      </h4>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    form: {
      type: Object,
      default: () => ({})
    },
    accountTypes: {
      type: Array,
      default: () => []
    },
    goalTypes: {
      type: Array,
      default: () => []
    }
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.step-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
