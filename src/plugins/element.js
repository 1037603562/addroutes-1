import Vue from 'vue';
import { Container,Header,Aside,Main,Menu,Submenu,MenuItem,MenuItemGroup,Form,FormItem,Input,Button,Message,MessageBox,Tag} from 'element-ui';


// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
/* 或写为
 * Vue.use(Button)
 * Vue.use(Select)
 */
//
// Vue.use(Select)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Tag)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$message = Message;

