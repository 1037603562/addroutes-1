<template>
    <div class="login_container">
           <el-form ref="form" :model="loginForm" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="loginForm.username"></el-input>
          </el-form-item>

          <el-form-item label="密码">
            <el-input v-model="loginForm.password"></el-input>
          </el-form-item>

            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="primary">重置</el-button>
          </el-form>

     </div>
</template>
<script>
//import Home from '../views/Home' 
//const _import = require('../router/_import_' + process.env.NODE_ENV)//获取组件的方法
//import Layout from '@/views/Layout' //Layout 是架构组件，不在后台返回，在文件里单独引入
//import filterAsyncRouter from '../permission.js'
export default {
  data(){
    return {
      loginForm:{
        username:'admin',
        password:'123456',
      },
      menuList:[],//菜单
    
    }
  },

created() {
  this.getTagFirst()
    let that = this;
    document.onkeypress = function(e) {
      var keycode = document.all ? event.keyCode : e.which;
      if (keycode == 13) {
        that.login();// 登录方法名
         return false;
      }}
    },
  methods:{
      getTagFirst(){
        var first={
          authName:'首页',
          name: 'Welcome',
          path: 'welcome',
        }
    
         this.$store.commit('getTagList',first)
      },
       async login(){
        if(this.loginForm.username === 'admin' && this.loginForm.password === '123456'){
          //获取token
          var {data:res} = await this.$http.get('https://www.fastmock.site/mock/b55db5872fc0b35c17c70f2adfc78ef4/testGetMeniList/adminToken')
         
            window.sessionStorage.setItem('token',res.data[0].adminToken)
          //获取菜单及路由
          var {data:res1} = await this.$http.get('https://www.fastmock.site/mock/b55db5872fc0b35c17c70f2adfc78ef4/testGetMeniList/adminMenu')
          console.log(res1.data)
          this.$store.commit('getMenuList',res1.data)
          this.$store.commit('addMenu',this.$router)
          this.$router.push('/home/welcome')
        }else if(this.loginForm.username === 'user' && this.loginForm.password === '123456'){
            var {data:res2} = await this.$http.get('https://www.fastmock.site/mock/b55db5872fc0b35c17c70f2adfc78ef4/testGetMeniList/userToken')
         
            window.sessionStorage.setItem('token',res2.data[0].userToken)
             //获取菜单及路由
          var {data:res3} = await this.$http.get('https://www.fastmock.site/mock/b55db5872fc0b35c17c70f2adfc78ef4/testGetMeniList/userMenu')
           this.$store.commit('getMenuList',res3.data)
          this.$store.commit('addMenu',this.$router)
          this.$router.push('/home/welcome')
        }else{
          this.$message.error('用户名密码错误')
        }
        
      },
     
     
   
  }
}
</script>
<style scoped>
.el-form{
  border: 1px solid #fff;
  /* margin:50px auto; */
  width: 500px;
  height: 250px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -300px;
  margin-top: -150px;
  background-color: #fff;
  border-radius: 4px;
  padding-top: 80px;
  padding-left: 30px;

}
.login_container{
  background-color: lightblue;
  height: 100%;
  position: relative;
}
.el-input{
  width: 400px;
}
.el-button{
  margin-left: 300px;
  margin-top: 30px;
}
</style>

