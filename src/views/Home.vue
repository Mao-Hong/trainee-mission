<template>
  <el-form ref="form" class="home" label-width="80px" :model="formData">
    <component
      v-for="item in options"
      :key="item.prop"
      :is="isType(item)"
      :value="formData[item.prop]"
      :dateValue="item.date && formData[item.date.prop]"
      :timeValue="item.time && formData[item.time.prop]"
      :option="item"
      @change="valueChange"
    ></component>
    <!-- <activityName :value="formData.name" @change="nameChange" />
    <activityArea :value="formData.area" @change="areaChange"/>
    <activityTime :dateValue="formData.date1" :timeValue="formData.date2" @timeChange="timeChange" @dateChange="dateChange"/>
    <delivery :value="formData.delive" @change="deliveChange"/>
    <activityProperty :value="formData.property" @change="propertyChange"/>
    <resource :value="formData.res" @change="resChange"/>
    <activityForm :value="formData.form" @change="formChange"/> -->
    <activityButton @onSubmit="buttonSumit" @onReset="buttonReset" />
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
      },
      options: [
        {
          type: 'input',
          label: '活动名称',
          prop: 'name',
          rules: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ]
        },
        {
          type: 'select',
          label: '活动区域',
          prop: 'area',
          rules: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ]
        },
        {
          type: 'date',
          label: '活动时间',
          date: {
            prop: 'date1',
            rules: [
              { required: true, message: '请选择日期', trigger: 'change' }
            ]
          },
          time: {
            prop: 'date2',
            rules: [
              { required: true, message: '请选择活动时间', trigger: 'change' }
            ]
          }
        },
        {
          type: 'switch',
          label: '即时配送',
          prop: 'delive'
        },
        {
          type: 'checkbox',
          label: '活动性质',
          prop: 'property',
          rules: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ]
        },
        {
          type: 'radio',
          label: '特殊资源',
          prop: 'res',
          rules: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ]
        },
        {
          type: 'textarea',
          label: '活动形式',
          prop: 'form',
          rules: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      ]
    }
  },
  methods: {
    isType (item) {
      if (item.type === 'input') {
        return 'activityName'
      } else if (item.type === 'select') {
        return 'activityArea'
      } else if (item.type === 'date') {
        return 'activityTime'
      } else if (item.type === 'switch') {
        return 'delivery'
      } else if (item.type === 'checkbox') {
        return 'activityProperty'
      } else if (item.type === 'radio') {
        return 'resource'
      } else if (item.type === 'textarea') {
        return 'activityForm'
      }
      return ''
    },
    buttonSumit () {
      console.log(this.formData)
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.buttonReset()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    buttonReset () {
      this.$refs.form.resetFields()
    },
    valueChange (val, prop) {
      this.$set(this.formData, prop, val)
      this.formData[prop] = val
    }
  }
}
</script>

<style>
.el-form-item{
  width:85%
}
</style>
