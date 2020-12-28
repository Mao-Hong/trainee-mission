<template>
  <el-form class="home" label-width="80px" :model="formData">
    <activityName :value="formData.name" @change="nameChange"  />
    <activityArea :value="formData.area" @change="areaChange"/>
    <activityTime :value="formData.time" @change="timeChange"/>
    <delivery :value="formData.delive" @change="deliveChange"/>
    <activityProperty :value="formData.property" @change="propertyChange"/>
    <resource :value="formData.res" @change="resChange"/>
    <activityForm :value="formData.form" @change="formChange"/>
    <activityButton @onSubmit="buttonSumit"/>
  </el-form>
</template>

<script>
import activityName from '@/components/ActivityName.vue'
import activityArea from '@/components/ActivityArea.vue'
import activityTime from '@/components/ActivityTime.vue'
import delivery from '@/components/Delivery.vue'
import activityProperty from '@/components/Property.vue'
import resource from '@/components/Resource.vue'
import activityForm from '@/components/ActivityForm.vue'
import activityButton from '@/components/Button.vue'

export default {
  name: 'Home',
  components: {
    activityName,
    activityArea,
    activityTime,
    delivery,
    activityProperty,
    resource,
    activityForm,
    activityButton
  },
  data () {
    return {
      formData: {
        name: '',
        area: '',
        time: {
          date: '',
          time: ''
        },
        delive: false,
        property: [],
        res: '',
        form: ''
      }
    }
  },
  methods: {
    buttonSumit () {
      console.log(this.formData)
    },
    nameChange (val) {
      this.formData.name = val
    },
    areaChange (val) {
      this.formData.area = val
    },
    timeChange (val, type) {
      this.formData.time[type] = val
      // 当参数可以作为类型进行判断时，可采用“需要改变的值[类型参数]”形式
    },
    deliveChange (val) {
      this.formData.delive = val
    },
    propertyChange (val) {
      this.formData.property = val
    },
    resChange (val) {
      this.formData.res = val
    },
    formChange (val) {
      this.formData.form = val
    }
  }
}
</script>

<style>
.el-form-item{
  width:85%
}
</style>
