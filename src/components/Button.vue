<template>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    onSubmit () {
      this.$emit('onSubmit')
    }
  }
}
</script>
