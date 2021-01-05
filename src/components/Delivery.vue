<template>
  <el-form-item :label="option.label" :prop="option.prop">
    <el-switch v-model="deliveryValue"></el-switch>
  </el-form-item>
</template>

<script>
export default {
  data () {
    return {
      delivery: false
    }
  },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    option: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    deliveryValue: {
      get: function () {
        return this.value
      },
      set: function (val) {
        this.$emit('change', val, this.option.prop)
      }
    }
  }
}
</script>
