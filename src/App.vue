<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <el-button plain @click="add('dynamicValidateForm')">新增</el-button>
    <el-dialog
      title="新增"
      :visible.sync="dialogFormVisible"
      @close="dialogClose"
      :close-on-click-modal="false"
      width="40%"
      class="dialogForm-box"
    >
      <el-form
        :model="dynamicValidateForm"
        ref="dynamicValidateForm"
        label-width="120px"
        class="demo-dynamic"
      >
        <el-row
          v-for="(domain, index) in dynamicValidateForm.persons"
          :key="domain.key"
        >
          <el-form-item
            :label="'姓名' + index + 1"
            :prop="'persons.' + index + '.name'"
            :rules="rules.name"
          >
            <el-input v-model="domain.name"></el-input>
          </el-form-item>
        </el-row>
        <el-form-item>
          <el-button type="primary" @click="submitForm('dynamicValidateForm')"
            >提交</el-button
          >
          <el-button @click="addPerson">新增人员</el-button>
          <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-select v-model="from.type" @change="updateFlowType">
      <el-option label="普通流转路径" value="normal" />
      <el-option label="默认流转路径" value="default" />
      <el-option label="条件流转路径" value="condition" />
      <el-option label="通过路径" value="resolve" />
      <el-option label="拒绝路径" value="reject" />
    </el-select>
    <el-input v-model="from.txt" clearable :disabled="bodyDisabled" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      firstFlag: false,
      dialogFormVisible: false,
      dynamicValidateForm: {
        persons: [
          {
            name: "",
            iphone: "",
            idCard: ""
          }
        ],
        email: ""
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入姓名",
            trigger: "blur"
          }
        ]
      },
      from: {
        type: "",
        txt: ""
      },
      bodyDisabled: false
    };
  },
  methods: {
    updateFlowType(type) {
      if (type === "resolve" || type === "reject") {
        this.bodyDisabled = true;
        if (type === "resolve") {
          this.from.txt = "true";
        }
        if (type === "reject") {
          this.from.txt = "false";
        }
      }
    },
    add(formName) {
      this.dialogFormVisible = true;
      if (this.dynamicValidateForm.persons.length > 1 || this.firstFlag) {
        console.log("清空校验");
        this.$refs[formName].resetFields();
      }
      this.dynamicValidateForm.persons = [];
      this.addPerson();
    },
    submitForm(formName) {
      this.firstFlag = true;

      this.$refs[formName].validate(valid => {
        if (valid) {
          this.dialogFormVisible = false;
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    addPerson() {
      this.dynamicValidateForm.persons.push({
        name: ""
      });
    },
    dialogClose() {
      this.dialogFormVisible = false;
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
