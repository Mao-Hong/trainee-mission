<template>
  <el-form-item label="活动时间" required>
    <el-col>
      <el-form-item prop="time" :rules="dateRules">
        <el-date-picker
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择日期"
          v-model="date1"
          @change="dateChange">
        </el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line">-</el-col>
    <el-col>
      <el-form-item prop="time" :rules="timeRules">
        <el-time-picker
          placeholder="选择时间"
          value-format="HH:mm:ss"
          v-model="date2"
          @change="timeChange">
        </el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
</template>

<script>
export default {
  data () {
    // 判断日期是否存在
    var validateDate = (rule, value, callback) => {
      if (value.date) {
        callback()
      } else {
        callback(new Error('请选择日期'))
      }
    }
    // 判断时间是否存在
    var validateTime = (rule, value, callback) => {
      if (value.time) {
        callback()
      } else {
        callback(new Error('请选择时间'))
      }
    }
    return {
      date1: '',
      date2: '',
      dateRules: {
        validator: validateDate,
        trigger: 'change'
      },
      timeRules: {
        validator: validateTime,
        trigger: 'change'
      }
    }
  },
  props: {
    value: {
      type: Object,
      dafault: ''
    }
  },
  watch: {
    value: {
      handler: function (val) {
        this.date1 = val.date
        this.date2 = val.time
      },
      immediate: true
    }
  },
  methods: {
    dateChange (val) {
      this.$emit('change', val, 'date')
    },
    timeChange (val) {
      this.$emit('change', val, 'time')
    }
  }
}
</script>

<style>

</style>
