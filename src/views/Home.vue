<template>
     <el-container class="home_container">
        <el-header ><el-button type="info" class="logout" @click="logout">退出</el-button></el-header>
        <el-container class="h_body">
          <el-aside width="200px">
            <myaside></myaside>
            
          </el-aside>
          
          <el-main>
              <myTags></myTags>
             <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
</template>

<script>

import myaside from '../views/Aside.vue'
import myTags from '../views/myTags.vue'

export default {
  data(){
    return {

    }
  },
  methods:{
    logout(){
      window.sessionStorage.clear('token');
      this.$router.push('/login')
    },
    
  },
  components:{
    myaside,
    myTags,
  }

}
</script>
<style scoped>
.el-header{
  background-color: #ccc;
}
.el-aside{
  background-color: rgb(84, 92, 100);
}
.el-main{
  background-color: darkgray;
}
.home_container{
 height: 100%;
}

.logout{
  float: right;
  margin-top: 10px;

  
}
</style>
