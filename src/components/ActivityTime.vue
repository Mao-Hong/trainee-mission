<template>
  <el-form-item label="活动时间" required>
    <el-col>
      <el-form-item prop="date1" :rules="dateRules">
        <el-date-picker
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择日期"
          v-model="valueDate1">
        </el-date-picker>
      </el-form-item>
    </el-col>
    <el-col class="line">-</el-col>
    <el-col>
      <el-form-item prop="date2" :rules="timeRules">
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
    }
  },
  computed: {
    valueDate1: {
      get: function () {
        return this.dateValue
      },
      set: function (val) {
        this.$emit('dateChange', val)
      }
    },
    valueDate2: {
      get: function () {
        return this.timeValue
      },
      set: function (val) {
        debugger
        this.$emit('timeChange', val)
      }
    }
  }
}
</script>

<style>

</style>
