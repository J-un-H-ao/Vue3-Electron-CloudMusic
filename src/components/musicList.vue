<template>
  <div class="musicListBox">
    <el-table :data="musicList" stripe style="width: 100%" :border="true" @row-dblclick="dblclick">
      <el-table-column prop="index" width="50" align="right">
      </el-table-column>
      <el-table-column label="操作" width="58">
        <template #default="scope">
          <!-- icon -->
          <div class="iconBox">
            <el-icon class="myIcon">
              <Star />
            </el-icon>
            <el-icon class="myIcon">
              <Download />
            </el-icon>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="name" label="标题" min-width="300">
      </el-table-column>
      <el-table-column prop="ar[0].name" label="歌手" min-width="143">
      </el-table-column>
      <el-table-column prop="al.name" label="专辑" min-width="193">
      </el-table-column>
      <el-table-column prop="time" label="时间" min-width="72">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>


import { getListAllMusic } from '../api/musicList/musicList'
import { mapActions } from 'vuex'
export default {

  data() {
    return {
      musicList: [],
    }
  },
  methods: {

    async getMusic(id) {
      const res = await getListAllMusic(id)
      this.musicList = res.songs

      //毫秒变成分钟
      this.musicList.forEach((item, index) => {
        let s = parseInt((item.dt % (1000 * 60)) / 1000)
        let m = parseInt((item.dt % (1000 * 60 * 60)) / (1000 * 60))

        //补0
        s = this.PrefixZero(s, 2)
        m = this.PrefixZero(m, 2)

        item.time = `${m}:${s}`
        //再顺手加个index


        item.index = index + 1
        if (item.index < 10) {
          item.index = '0' + item.index
        }

      })

    },

    //补0函数
    PrefixZero(num, n) {
      return (Array(n).join(0) + num).slice(-n)
    },

    //双击某一行的事件
    dblclick(row) {
      console.log(row)

    },
  },
  created() {
    this.getMusic(this.$route.query.id)
  },
  watch: {
    $route(to, from) {
      if (to.query.id !== from.query.id) {
        this.getMusic(to.query.id)
      }
    },
  },
}
</script>

<style scoped>
.musicListBox {
  margin-top: 17px;
}

/deep/.el-table th.el-table__cell {
  border: none;
  padding: 0;
  height: 34px;
}

/deep/.el-table .el-table__cell {
  height: 34px;
  padding: 0;
  border: none;
}

/deep/.el-table th.el-table__cell.is-leaf {
  border: none;
}

.el-table {
  border: none;
}

.el-table::before {
  background-color: #ffffff00;
}

/deep/.is-leaf.el-table__cell:hover {
  background-color: #f1f2f3;
}

.iconBox {
  display: flex;
  align-items: center;
  justify-content: start;
}

.myIcon {
  font-size: 18px;
  cursor: pointer;
  color: #999;
}

/deep/.el-table__cell .cell {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 13px;
}
</style>
