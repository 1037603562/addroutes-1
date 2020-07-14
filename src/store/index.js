import Vue from 'vue'
import Vuex from 'vuex'
import Cookie from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
   menu:[],
   tagName:["首页"],
  //   {
  //     // "id": 100,
  //     // "authName": "首页",
  //   //   "path": "welcome",
  //   //   "name":"Welcome",
  //   // },
  //  ],
   tagList:[],
   tagTest:[]
  },
  mutations: {
    getTagmenu(state,val){
      state.tagTest=val
    },
    getTagList(state,val){
      state.tagList.push(val)
      console.log(state.tagList)
    },
    getTagNames(state,val){
      if(state.tagName.findIndex(item =>item === val)===-1){
        state.tagName.push(val)
      }

    },
    getMenuList(state,val){
      Cookie.set('menu',JSON.stringify(val))
      state.menu = val
      console.log(val)
    },
    addMenu(state,router){
      var menu = JSON.parse(Cookie.get('menu'))
      if(!menu) return
      state.menu = menu
      var currentMenu =[
        {
          path: '/home',
          name: 'Home',
          component: () => import(`@/views/Home.vue`),
          children:[
          ]
        },
      ]

      menu.forEach(item =>{
        if(item.children){
            item.children = item.children.map(item =>{
              item.component = () => import(`@/components/${item.name}.vue`)
              return item
            })
            currentMenu[0].children.push(...item.children)
        }else{
          item.component = () => import(`@/components/${item.name}.vue`)
          currentMenu[0].children.push(item)
        }
      })
      console.log(currentMenu)
     
router.addRoutes(currentMenu)
          // var rt = [
          //   {
          //     path: '/user',
          //     name: 'user',
          //     component: () => import(`@/components/Users.vue`),
          //     children:[
          //     ]
          //   },
          // ]
          // router.addRoutes(rt)
    }
  },
  getters: {
  
  }
})
