<template>
  <el-form-item label="特殊资源">
    <el-radio-group v-model="resourceValue">
      <el-radio
        v-for="list in lists"
        :key="list.value"
        :label="list.value"
      >
      {{ list.label }}
      </el-radio>
    </el-radio-group>
  </el-form-item>
</template>

<script>
export default {
  data () {
    return {
      resource: '',
      lists: [
        { label: '线上品牌商赞助', value: 'radio1' },
        { label: '线下场地免费', value: 'radio2' }
      ]
    }
  },
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    resourceValue: {
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
