<template>
  <el-form-item label="活动形式" prop="form" :rules="formRules">
    <el-input type="textarea" v-model="descValue"></el-input>
  </el-form-item>
</template>

<script>
export default {
  data () {
    return {
      desc: '',
      formRules: {
        required: true,
        message: '请填写活动形式',
        trigger: 'blur'
      }
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    descValue: {
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
