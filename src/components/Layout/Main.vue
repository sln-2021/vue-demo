<template>
  <el-container>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>
          <el-row>
            <el-col :span="12"
              ><div class="grid-content bg-purple">
                <el-row>
                  <el-button plain>朴素按钮</el-button>
                  <el-button type="primary" plain>主要按钮</el-button>
                  <el-button type="success" plain>成功按钮</el-button>
                  <el-button type="info" plain>信息按钮</el-button>
                  <el-button type="warning" plain>警告按钮</el-button>
                  <el-button type="danger" plain>危险按钮</el-button>
                </el-row>
              </div></el-col
            >
            <el-col :span="12"
              ><div class="grid-content bg-purple-light">right</div></el-col
            >
          </el-row>
        </el-header>
        <div id="mainPrint">
          <div></div>
          <!-- <el-main>
            <el-table :data="tableData">
              <el-table-column prop="date" label="日期" width="140">
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="120">
              </el-table-column>
              <el-table-column prop="address" label="地址"> </el-table-column>
            </el-table>

            <div class="noNeedPrint" style="margin:10px 0 0 10px">
              <el-button type="primary" @click="print()">打印页面</el-button>
            </div>
          </el-main> -->
          <!-- <button-basic>Button</button-basic>
          <radio-basic value="dog" v-model="selectedAnimal">
            Dog
          </radio-basic>
          <radio-basic value="cat" v-model="selectedAnimal">
            Cat
          </radio-basic>
          <radio-basic value="rabbit" v-model="selectedAnimal">
            Rabbit
          </radio-basic>
          <file-basic @change="onChangeFile">Select File</file-basic>
          <div> -->
          <div>jkokj;p</div>
          <CityPinyin
            :value="startCity"
            @on-change="onChange($event, 0)"
            msg="出发城市"
          />
          <CityPinyin
            :value="endCity"
            @on-change="onChange($event, 1)"
            msg="到达城市"
          />
          <!-- </div> -->
          <vue-simplemde v-model="content" ref="markdownEditor" />
        </div>
        <el-footer>底部footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import VueSimplemde from 'vue-simplemde'
export default {
  name: "Main",
  data() {
    const item = {
      date: "2020-02-02",
      name: "404",
      address: "辽宁省大连市"
    };
    return {
      tableData: Array(6).fill(item),
      selectedAnimal: "",
      startCity: {
        id: "",
        name: ""
      },
      endCity: {
        id: "",
        name: ""
      },
      content:""
    };
  },
  components: { VueSimplemde },
  methods: {
    onChange(item, idx) {
      console.log(idx, item);
      if (!idx) {
        this.startCity = item;
      } else {
        this.endCity = item;
      }
    },
    onChangeFile() {},
    print() {
      let subOutputRankPrint = document.getElementById("mainPrint");
      console.log(subOutputRankPrint.innerHTML);
      let newContent = subOutputRankPrint.innerHTML;
      let oldContent = document.body.innerHTML;
      document.body.innerHTML = newContent;
      window.print();
      window.location.reload();
      document.body.innerHTML = oldContent;
      return false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.grid-content {
  border-radius: 4px;
  height: 36px;
  line-height: 36px;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
@media print {
  .noNeedPrint {
    display: none !important;
  }
}
@page {
  /* 打印A4大小 */
  size: auto A4 landscape;
  margin: 3mm;
}
</style>
