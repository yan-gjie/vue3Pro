<template>
  <!--  表单卡片-->
  <el-card class="box-card">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <!--      客户-->
      <el-tab-pane label="客户" name="first">
        <!--        表单-->
        <el-form :inline="true">
          <el-form-item label="客户：">
            <el-select v-model="value" filterable placeholder="客户名称" clearable>
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              />
            </el-select>
            <span class="iconfont searchBtn" @click="dialogVisible = true">&#xe71a;</span>
          </el-form-item>
          <el-form-item label="日期：" style="width:500px">
            <el-col :span="11">
              <el-date-picker
                  v-model="formInline.user"
                  type="date"
                  placeholder="请选择日期"
                  style="width: 100%"
              />
            </el-col>
            <el-col :span="1" class="text-center">
              <span class="text-gray-500">~</span>
            </el-col>
            <el-col :span="11">
              <el-date-picker
                  v-model="formInline.user"
                  type="date"
                  placeholder="请选择日期"
                  style="width: 100%"
              />
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="checked1" label="显示所有客户" size="large"/>
          </el-form-item>
          <el-form-item class="btnFormItem">
            <div class="btn">
              <el-button @click="onSubmit" plain class="search">搜索</el-button>
              <el-button @click="onSubmit" plain>重置</el-button>
            </div>
          </el-form-item>
        </el-form>
        <!--        弹框-->
        <el-dialog v-model="dialogVisible" title="选择客户">
          <div class="dialogBody">
            <el-form :model="form">
              <el-form-item>
                <el-input v-model="form.name" autocomplete="off" placeholder="客户名称/编号"
                          style="width: 230px;"></el-input>
                <span class="btn">
                <el-button @click="onSubmit" plain class="search">搜索</el-button>
                <el-button @click="onSubmit" plain>重置</el-button>
              </span>
              </el-form-item>
            </el-form>
            <el-table :data="gridData" border stripe :header-cell-style="{background:'#fafafa'}">
              <el-table-column property="date" label="序号"/>
              <el-table-column property="number" label="编号"/>
              <el-table-column property="name" label="客户名称"/>
              <el-table-column property="category" label="分类"/>
            </el-table>
            <!--分页-->
            <SimplePaging></SimplePaging>
          </div>
          <template #footer>
             <span class="dialog-footer">
             <el-button @click="dialogVisible = false" class="dialogConfirmBtn">确认</el-button>
             <el-button @click="dialogVisible = false">
               取消
             </el-button>
           </span>
          </template>
        </el-dialog>
      </el-tab-pane>
      <!--      供应商-->
      <el-tab-pane label="供应商" name="second">
        <el-form :inline="true">
          <el-form-item label="供应商：">
            <el-select v-model="value" filterable placeholder="供应商名称" clearable>
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
              />
            </el-select>
            <span class="iconfont searchBtn" @click="dialogVisible = true">&#xe71a;</span>
          </el-form-item>
          <el-form-item label="日期：" style="width:500px">
            <el-col :span="11">
              <el-date-picker
                  v-model="formInline.user"
                  type="date"
                  placeholder="请选择日期"
                  style="width: 100%"
              />
            </el-col>
            <el-col :span="1" class="text-center">
              <span class="text-gray-500">~</span>
            </el-col>
            <el-col :span="11">
              <el-date-picker
                  v-model="formInline.user"
                  type="date"
                  placeholder="请选择日期"
                  style="width: 100%"
              />
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="checked1" label="显示所有客户" size="large"/>
          </el-form-item>
          <el-form-item class="btnFormItem">
            <div class="btn">
              <el-button @click="onSubmit" plain class="search">搜索</el-button>
              <el-button @click="onSubmit" plain>重置</el-button>
            </div>
          </el-form-item>
        </el-form>
        <!--        弹框-->
        <el-dialog v-model="dialogVisible" title="选择供应商">
          <div class="dialogBody">
            <el-form :model="form">
              <el-form-item>
                <el-input v-model="form.name" autocomplete="off" placeholder="供应商名称/编号"
                          style="width: 230px;"></el-input>
                <span class="btn">
                <el-button @click="onSubmit" plain class="search">搜索</el-button>
                <el-button @click="onSubmit" plain>重置</el-button>
              </span>
              </el-form-item>
            </el-form>
            <el-table :data="gridData" border stripe :header-cell-style="{background:'#fafafa'}">
              <el-table-column property="date" label="序号"/>
              <el-table-column property="number" label="编号"/>
              <el-table-column property="name" label="客户名称"/>
              <el-table-column property="category" label="分类"/>
            </el-table>
            <!--分页-->
            <SimplePaging></SimplePaging>
          </div>
          <template #footer>
             <span class="dialog-footer">
             <el-button @click="dialogVisible = false" class="dialogConfirmBtn">确认</el-button>
             <el-button @click="dialogVisible = false">
               取消
             </el-button>
           </span>
          </template>
        </el-dialog>
      </el-tab-pane>
    </el-tabs>
  </el-card>
  <!--  表格卡片-->
  <el-card class="table-card">
    <!--    客户表格-->
    <div class="client" v-if="activeName==='first'">
      <!--      按钮-->
      <div class="right">
        <el-button @click="onSubmit" plain><span class="iconfont hr-reset"></span>刷新</el-button>
        <el-button @click="onSubmit" plain><span class="iconfont hr-upload"></span>导出</el-button>
      </div>
      <!--      表格-->
      <el-table
          ref="multipleTableRef"
          :data="tableData"
          style="width: 100%"
          border
          show-summary
          sum-text="总计"
          max-height="300"
          :header-cell-style="{background:'#F1F3F8'}"
          :header-row-style="{height:'14px'}"
      >
        <el-table-column property="name" label="客户明称"/>
        <el-table-column property="name" label="应收金额(￥)" sortable/>
        <el-table-column label="操作">
          <template #default>
            <span><a href="#">明细</a></span>
          </template>
        </el-table-column>
      </el-table>
      <!--      分页-->
      <MyPaging></MyPaging>
    </div>
    <!--    供应商表格-->
    <div class="supplier" v-else>
      <div class="right">
        <el-button @click="onSubmit" plain><span class="iconfont hr-reset"></span>刷新</el-button>
        <el-button @click="onSubmit" plain><span class="iconfont hr-upload"></span>导出</el-button>
      </div>
      <el-table
          ref="multipleTableRef"
          :data="tableData"
          style="width: 100%"
          border
          show-summary
          sum-text="总计"
          max-height="300"
          :header-cell-style="{background:'#F1F3F8'}"
          :header-row-style="{height:'14px'}"
      >
        <el-table-column property="name" label="供应商明称"/>
        <el-table-column property="name" label="应收金额(￥)" sortable/>
        <el-table-column label="操作">
          <template #default>
            <span><a href="#">明细</a></span>
          </template>
        </el-table-column>
      </el-table>
      <MyPaging></MyPaging>
    </div>
  </el-card>
</template>

<script setup>
import {reactive, ref} from 'vue'
import MyPaging from "@/components/MyPaging";
import SimplePaging from "@/components/SimplePaging";

const tableData = [
  {}
]
const value = ref('')
const checked1 = ref(false)
const formInline = reactive({
  user: '',
  region: '',
})
const options = [
  {
    value: 'Option1',
    label: '遥观大润发82431',
  },
  {
    value: 'Option2',
    label: '高港大润发82431',
  },
  {
    value: 'Option3',
    label: '姜堰大润发82431',
  },
  {
    value: 'Option4',
    label: '泰兴大润发82431',
  }
]
const activeName = ref('first')
const onSubmit = () => {
  console.log('submit!')
}
const handleClick = (tab, event) => {
  console.log(tab, event)
}
//弹框
const dialogVisible = ref(false)

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const gridData = [
  {
    date: '13',
    name: 'w',
    number: '133',
    category: 'ewt'
  }, {
    date: '13',
    name: 'w',
    number: '133',
    category: 'ewt'
  }, {
    date: '13',
    name: 'w',
    number: '133',
    category: 'ewt'
  }, {
    date: '13',
    name: 'w',
    number: '133',
    category: 'ewt'
  }
]
</script>

<style scoped>
@import url('@/css/table.css');

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

:deep .el-checkbox__input.is-checked + .el-checkbox__label {
  color: #000000A6;
}

:deep .el-checkbox {
  --el-checkbox-checked-bg-color: #3b3b8d;
  --el-checkbox-checked-input-border-color: #3b3b8d
}

:deep .el-tabs__item {
  width: 74px;
  height: 45px;
  text-align: center;
  color: #000000A6;
}

:deep .el-tabs__item:hover {
  color: #5252AA;
}

:deep .el-tabs__item.is-active {
  color: #5252AA;
}

.demo-tabs /deep/ .el-tabs__active-bar {
  background-color: #3b3b8d !important;
}

.demo-tabs .btn {
  margin-left: 0px;
}

.btnFormItem {
  position: absolute;
  right: 0%;
}

/deep/ .demo-tabs .el-tabs__active-bar.is-top {
  text-align: center;
  width: 60px !important;
}

.el-form {
  padding-left: 25px;
}

:deep.el-select .el-input__wrapper {
  width: 156px;
}

:deep .demo-tabs .el-form-item__label {
  width: 85px;
}

.table-card .right {
  float: right;
  margin-bottom: 20px;
}

.table-card .right .iconfont {
  margin-right: 5px;
}

.searchBtn:hover {
  background: orange;
}

:deep .box-card .el-select {
  cursor: text !important;
}

:deep .el-table--striped .el-table__body tr.el-table__row--striped td.el-table__cell {
  background: #fdfdfd;
}

.el-dialog__body {
  padding: 0;
}

.dialogBody {
  border-top: 1px solid #e8e8e8;
  border-bottom: 1px solid #e8e8e8;
  padding-top: 30px;
  padding-bottom: 60px;
  margin-top: -20px;
}

.dialogBody .el-table {
  --el-table-bg-color: none
}
.dialogConfirmBtn {
  background: #5252aa;
  color: #fff;
}
.dialog-footer .el-button:hover {
  background-color: orange;
  color: #fff;
  border-color: orange;
}
.dialogBody .search {
  border: 1px solid #5252aa;
  background-color: #5252aa;
}
.dialogBody .search:hover {
  border-color: orange;
  background-color: orange;
}
</style>