<template>
  <el-form-item label="活动时间">
    <el-col>
      <el-date-picker type="date" value-format="yyyy-MM-dd" placeholder="选择日期" v-model="date1" @change="dateChange"></el-date-picker>
    </el-col>
    <el-col class="line">-</el-col>
    <el-col>
      <el-time-picker placeholder="选择时间" value-format="HH:mm:ss" v-model="date2" @change="timeChange"></el-time-picker>
    </el-col>
  </el-form-item>
</template>

<script>
export default {
  data () {
    return {
      date1: '',
      date2: ''
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
