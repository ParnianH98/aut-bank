<template>
  <div>
    <div class="step-footer">
      <v-btn color="error" outlined @click="$emit('prev')">
        مرحله قبل
      </v-btn>
      <v-btn color="primary" outlined @click="$emit('next')">
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
