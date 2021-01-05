<template>
  <el-form-item :label="option.label" :prop="option.prop" :rules="option.rules">
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
        this.$emit('change', val, this.option.prop)
      }
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    option: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style>

.el-select{
  width: 100%;
}
</style>
