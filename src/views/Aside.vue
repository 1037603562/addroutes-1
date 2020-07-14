<template>
  <div>
      <el-menu
    
      unique-opened
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">

      <el-menu-item :index="item1.id+''" v-for="item1 in noChildren" :key="item1.id" @click="clickMenu(item1)" >
        <i class="el-icon-location"></i>
          <span>{{item1.authName}}</span>
      </el-menu-item>


      <!-- 一级菜单 -->
      <el-submenu :index="item.id+''" v-for="item in hasChildren" :key="item.id">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.authName}}</span>
        </template>
        <!-- 二级菜单 -->
         <!-- <router-link :to="item4.path" v-for="(item4,i) in dynRouterList" :key="i">
         </router-link> -->
         <el-menu-item-group>
            <el-menu-item :index="item2.id+''" v-for="item2 in item.children" :key="item2.id" @click="clickMenu(item2)">{{item2.authName}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
    </el-menu>
    
  </div>
</template>
<script>

export default {
  data(){
    return {
      menuList:[
     
      ],
      roleCode:[]
    }
  },
  created(){
   this.getMenuList()
  
  },
  methods:{
     getMenuList(){
       this.menuList = this.$store.state.menu
        console.log(this.menuList)
     },
     clickMenu(item){
       this.$router.push({name:item.name})
       this.$store.commit('getTagNames',item.authName)//
       this.$store.commit('getTagList',item)
    
     },

      handleOpen(){},
      handleClose(){},
  },
  computed:{
        noChildren() {
                    return this.menu.filter(item =>!item.children) 
                },
        hasChildren() {
                return this.menu.filter(item =>item.children) 
            },
           menu(){
            return this.$store.state.menu
            
          },     
  }
  
}
</script>
<style scoped>
.el-menu{
  border-right: 0;
}
</style>
