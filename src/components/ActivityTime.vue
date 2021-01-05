<template>
  <el-form-item :label="option.label" required>
    <el-col>
      <el-form-item :prop="option.date.prop" :rules="option.date.rules">
        <el-date-picker
          value-format="yyyy-MM-dd"
          placeholder="选择日期"
          v-model="valueDate1">
        </el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line">-</el-col>
    <el-col>
      <el-form-item :prop="option.time.prop" :rules="option.time.rules">
        <el-time-picker
          placeholder="选择时间"
          value-format="HH:mm:ss"
          v-model="valueDate2">
        </el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
</template>

<script>
export default {
  data () {
    return {
      date1: '',
      date2: '',
      dateRules: {
        required: true,
        message: '请选择日期',
        trigger: 'change'
      },
      timeRules: {
        required: true,
        message: '请选择活动时间',
        trigger: 'change'
      }
    }
  },
  props: {
    dateValue: {
      type: String,
      dafault: ''
    },
    timeValue: {
      type: String,
      dafault: ''
    },
    option: {
      type: Object,
      dafault: () => {
        return {}
      }
    }
  },
  computed: {
    valueDate1: {
      get: function () {
        return this.dateValue
      },
      set: function (val) {
        this.$emit('change', val, this.option.date.prop)
      }
    },
    valueDate2: {
      get: function () {
        return this.timeValue
      },
      set: function (val) {
        this.$emit('change', val, this.option.time.prop)
      }
    }
  }
}
</script>

<style>

</style>
