<template>
  <el-form-item :label="option.label" :prop="option.prop" :rules="option.rules">
    <el-checkbox-group v-model="typeValue">
      <el-checkbox
        v-for="list in checkedlist"
        :key="list.value"
        :label="list.value"
      >
      {{ list.label }}
      </el-checkbox>
    </el-checkbox-group>
  </el-form-item>
</template>

<script>
export default {
  data () {
    return {
      type: [],
      checkedlist: [
        { label: '美食/餐厅线上活动', value: 'option1' },
        { label: '地推活动', value: 'option2' },
        { label: '线下主题活动', value: 'option3' },
        { label: '单纯品牌曝光', value: 'option4' }
      ],
      proRules: {
        type: 'array',
        required: true,
        message: '请至少选择一个活动性质',
        trigger: 'change'
      }
    }
  },
  props: {
    value: {
      type: Array,
      default: () => []
    },
    option: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    typeValue: {
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
