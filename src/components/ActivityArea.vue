<template>
  <el-form-item label="活动区域" prop="area" :rules="areaRules">
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
      region: '',
      options: [
        { label: '区域一', value: 'Area1' },
        { label: '区域二', value: 'Area2' },
        { label: '区域三', value: 'Area3' }
      ],
      areaRules: {
        required: true, message: '请选择活动区域', trigger: 'change'
      }
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
