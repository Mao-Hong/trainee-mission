<template>
  <el-form-item label="即时配送" prop="delive">
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
    }
  },
  computed: {
    deliveryValue: {
      get: function () {
        return this.value
      },
      set: function (val) {
        this.$emit('change', val)
      }
    }
  }
}
</script>
