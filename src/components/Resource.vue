<template>
  <el-form-item :label="option.label" :prop="option.prop" :rules="option.rules">
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
      ],
      resRules: {
        required: true,
        message: '请选择活动资源',
        trigger: 'change'
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
  },
  computed: {
    resourceValue: {
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
