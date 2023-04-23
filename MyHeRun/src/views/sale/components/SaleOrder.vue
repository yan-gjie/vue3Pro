<template>
  <!--  表单-->
  <el-card class="box-card">
    <el-form :inline="true" :model="formInline" class="demo-form-inline" label-position="left" label-width="85px">
      <el-form-item label="单据编号：">
        <el-input v-model="formInline.user" placeholder="单据编号"/>
      </el-form-item>
      <el-form-item label="客户：">
        <el-input v-model="formInline.user" placeholder="客户名称/编号" suffix-icon="" style="width: 177px">
          <template #suffix>
            <span class="iconfont searchBtn">&#xe71a;</span>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item label="客户模糊搜索：">
        <el-input v-model="formInline.user" placeholder="客户名称/编号"/>
      </el-form-item>
      <el-form-item label="业务员：">
        <el-input v-model="formInline.user" placeholder="业务员"/>
      </el-form-item>
      <el-form-item label="订单状态:" id="itemName">
        <el-select v-model="formInline.region" placeholder="单据状态">
          <el-option label="已保存" value="save"/>
          <el-option label="提交待审核" value="beijing"/>
          <el-option label="待出库" value="beijing"/>
          <el-option label="部分出库" value="beijing"/>
          <el-option label="全部出库" value="beijing"/>
          <el-option label="审核拒绝" value="beijing"/>
        </el-select>
      </el-form-item>
      <el-form-item label="商品信息：">
        <el-input v-model="formInline.user" placeholder="商品编码/名称"/>
      </el-form-item>
      <el-form-item label="客户单号：">
        <el-input v-model="formInline.user" placeholder="客户单号"/>
      </el-form-item>
      <el-form-item label="制单人：">
        <el-input v-model="formInline.user" placeholder="制单人"/>
      </el-form-item>
      <el-form-item label="单据备注：">
        <el-input v-model="formInline.user" placeholder="单据备注"/>
      </el-form-item>
      <el-form-item label="单据日期：" style="width: 475px">
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
      <el-form-item label="制单日期：">
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
      <div class="btn">
        <el-button @click="onSubmit" plain class="search">搜索</el-button>
        <el-button @click="onSubmit" plain>重置</el-button>
      </div>
    </el-form>
  </el-card>
  <el-card class="table-card">
    <div class="tabBtn">
      <div class="left">
        <el-button @click="onSubmit" plain class="add search"><span class="iconfont hr-add"></span>新增</el-button>
      </div>
      <div class="right">
        <el-button @click="onSubmit" plain><span class="iconfont hr-reset"></span>刷新</el-button>
        <el-button @click="onSubmit" plain><span class="iconfont hr-upload"></span>导出</el-button>
      </div>
    </div>
    <!--    表格-->
    <div class="xxxxx-pzcx-kjpz-table">
      <el-table
          ref="multipleTableRef"
          :data="tableData"
          style="width: 100%"
          border
          show-summary
          sum-text="总计"
          :span-method="arraySpanMethod"
          max-height="300"
          :header-cell-style="{background:'#F1F3F8'}"
          :header-row-style="{height:'14px'}"
          @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" fixed/>
        <el-table-column label="序号" width="120" fixed>
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column property="name" label="单据编号" width="120"/>
        <el-table-column property="address" label="出库单编号" show-overflow-tooltip/>
        <el-table-column label="客户" width="120" resizable="false">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="客户编号" width="120">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="客户单号" width="120">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="业务员" width="120">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="数量" width="120">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="订单金额（￥）" width="120" sortable>
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="出差金额（￥）" width="120">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="订单日期" width="120" sortable>
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="订单状态" width="120">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="备注" width="120">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="制单人" width="120">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="制单日期" width="120" sortable>
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column label="操作" width="155">
          <template #default>
            <span><a href="#">打印</a></span> <span><a href="#">复制</a></span> <span><a href="#">更多</a></span>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--分页-->
    <MyPaging></MyPaging>
  </el-card>
</template>

<script setup>
import {reactive, ref} from 'vue'
import MyPaging from "@/components/MyPaging";

const formInline = reactive({
  user: '',
  region: '',
})

const onSubmit = () => {
  console.log('submit!')
}

const multipleTableRef = ref()
const multipleSelection = ref([])
const handleSelectionChange = (val) => {
  multipleSelection.value = val
}
const tableData = [
  {}
]
const arraySpanMethod = ({rowIndex, columnIndex}) => {
  if (rowIndex % 2 === 0) {
    if (columnIndex === 0) {
      return [1, 2]
    } else if (columnIndex === 1) {
      return [0, 0]
    }
  }
}
</script>
<style scoped>
@import url('@/css/table.css');
.box-card .searchBtn {
  position: absolute;
  right:0%
}
</style>