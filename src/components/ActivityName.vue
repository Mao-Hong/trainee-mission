<template>
  <el-form-item :label="option.label" :prop="option.prop" :rules="option.rules">
    <el-input v-model="nameValue"></el-input>
  </el-form-item>
</template>

<script>
// (1)现在父辈vue中添加data属性值
// (2)在组建中绑定data定义的值
// (3)到子辈vue中用props将父辈绑定的value值传给子辈
// (4)在子辈vue中v-model用到的属性值nameValue
// (5)再用computed的get方法拿到这个值
// (6)然后到父辈vue中添加change事件，再添加相关方法
// (7)去子辈中的computed添加set方法，如果出现新值，就$emit传给父辈
export default {
  computed: {
    nameValue: {
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
      default: () => ({})
    }
  }
  // data () {
  //   return {
  //     nameRules: [
  //       { required: true, message: '请输入活动名称', trigger: 'blur' },
  //       { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  //     ]
  //   }
  // }
}
</script>
