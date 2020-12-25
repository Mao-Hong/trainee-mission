<template>
  <el-form-item label="活动区域">
    <el-select v-model="regionValue" placeholder="请选择活动区域">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
  </el-form-item>
</template>

<script>
export default {
  data () {
    return {
      // props:[value],
      region: '',
      options: [
        { label: '区域一', value: 'Area1' },
        { label: '区域二', value: 'Area2' },
        { label: '区域三', value: 'Area3' }
      ]
    }
  },
  computed: {
    regionValue: {
      get: function () {
        return this.value
      },
      set: function (val) {
        this.$emit('change', val)
      }
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>

.el-select{
  width: 100%;
}
</style>
