<template>
  <div class="app-container">
    <div class="search">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="工单编号:">
          <el-input v-model="formInline.user" placeholder="请输入"></el-input>
        </el-form-item>
        <el-form-item label="工单状态:">
          <el-select v-model="formInline.region" placeholder="请选择">
            <el-option label="待办" value="待办"></el-option>
            <el-option label="进行" value="进行"></el-option>
            <el-option label="取消" value="取消"></el-option>
            <el-option label="完成" value="完成"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="result">
      <div class="operation">
        <el-button class="button" icon="el-icon-circle-plus-outline">
          搜索</el-button
        >
        <el-button class="secondary">工单配置</el-button>
      </div>
      <Table :tableData="List"></Table>
      <div class="block">
        <center>
          <el-pagination
            layout="prev, pager, next"
            :total="100"
            @current-change="laypage"
          >
          </el-pagination>
        </center>
      </div>
    </div>
  </div>
</template>

<script>
import Table from "@/views/tree/components/table.vue";
import { getSearchListApi } from "@/api/order";
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
      List: [],
    };
  },
  components: {
    Table,
  },

  created() {
    this.getSearchList();
  },

  methods: {
    async getSearchList() {
      const res = await getSearchListApi();
      console.log(res);
      this.List = res.data.currentPageRecords;
    },
  },
};
</script>

<style scoped lang="scss">
.search {
  display: flex;
  height: 64px;
  width: 100%;
  align-items: center;
  margin-bottom: 20px;
  padding-left: 12px;
  margin-left: -20px;
  background-color: #fff;
  .el-button--primary {
    color: #fff;
    background-color: #5f84ff;
    border-color: #5f84ff;
  }

  ::v-deep .el-form-item__label {
    margin-top: 20px;
    font-weight: 400;
  }
  ::v-deep .el-button {
    margin-top: 22px;
  }
  ::v-deep .el-input {
    margin-top: 22px;
  }
}
.result {
  padding: 20px 15px 19px 17px;
  background-color: #fff;
  margin-left: -20px;
  width: 100%;
  .button {
    width: 80px !important;
    height: 36px;
    padding: 0;
    background: linear-gradient(135deg, #ff9743, #ff5e20) !important;
    border: none;
    color: #fff;
  }
  .secondary {
    background-color: #f3e7e1 !important;
    width: 80px !important;
    height: 36px;
    padding: 0;
    color: #655b56 !important;
  }
}
</style>
