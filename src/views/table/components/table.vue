<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    :border="false"
    class="font table-box"
    :header-row-style="{ background: '#f3f6fb' }"
  >
    <el-table-column type="index" label="序号" width="50" class="font">
    </el-table-column>
    <el-table-column prop="taskCode" label="工单编号" width="150">
    </el-table-column>
    <el-table-column prop="innerCode" label="设备编号" width="150">
    </el-table-column>
    <el-table-column prop="taskType.typeName" label="工单类型" width="150">
    </el-table-column>
    <el-table-column
      prop="createType"
      label="工单方式"
      width="150"
      :formatter="taskCreateType"
    >
    </el-table-column>
    <el-table-column
      prop="taskStatusTypeEntity.statusName"
      label="工单状态"
      width="150"
    >
    </el-table-column>
    <el-table-column
      prop="userName"
      label="运营人员"
      width="150"
      class="item-margin"
    >
    </el-table-column>
    <el-table-column
      prop="createTime"
      label="创建日期"
      width="150"
      :formatter="taskTime"
    >
    </el-table-column>
    <el-table-column prop="zip" label="操作" width="150">
      <span class="watch-info">查看详情</span>
    </el-table-column>
  </el-table>
</template>

<script>
import dayjs from "dayjs";
export default {
  components: {},
  data() {
    return {};
  },
  props: {
    tableData: {
      type: Array,
      required: true,
    },
  },
  created() {},
  methods: {
    taskCreateType(row, column, index) {
      return ["自动", "手动"][index];
    },
    taskTime(row, column, index){
      return dayjs(index).format('YYYY.MM.DD HH:mm:ss')
    }
  },
};
</script>

<style scoped lang="scss">
.watch-info {
  cursor: pointer;
  color: #5f84ff;
}
.item-margin {
  margin-left: 30px;
}
.el-table-column {
  height: 40px;
}
.table-box {
  overflow-x: hidden;
  margin-top: 15px;
}
</style>
