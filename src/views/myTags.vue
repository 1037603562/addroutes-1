<template>
    <div>
        <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        :effect="$route.authName ===tag ? 'dark' : 'plain'"
        :closable="tag!=='首页'"
        :disable-transitions="false"
        @close="handleClose(tag)"
        @click="changTag(tag)">
        
        {{tag}}
        </el-tag>

    </div>
</template>
<script>
export default {
   data() {
      return {
        dynamicTags: [],
        inputVisible: false,
        inputValue: ''
      };
    },
    created(){
        this.getTagName()
        
    },
    methods: {
        getTagName(){
        // var a=this.$store.state.tagName
        // console.log(a+'csssssss')
       
        this.dynamicTags = this.$store.state.tagName
            console.log(this.dynamicTags)
        },
      handleClose(tag) {
        console.log(this.$store.state.tagList,tag)
        var taglist=this.$store.state.tagList
         this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
         var toName
         for(var i=0;i<taglist.length;i++){
           if(tag === taglist[i].authName){
             if(typeof(taglist[i-1])==="undefined"){
                toName = 'Welcome'
             }else if(tag !== taglist[taglist.length-1].authName){
               toName = taglist[i+1].name
             }else{
               toName = taglist[i-1].name
             }
               
             
           }
         }
         this.$router.push({name:toName})
        // if(tag !== this.dynamicTags[this.dynamicTags.length-1]){
        //   this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        //   this.$router.push(this.dynamicTags)
        // }
        // this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      changTag(tag){
        var tagList = this.$store.state.tagList
        for(var i=0;i<tagList.length;i++){
         
          if(tagList[i].authName === tag){
            this.$router.push({name:tagList[i].name})
          }
        }
      }
    

      
    }
  }

</script>

<style scoped>
.el-tag{
  cursor: pointer;
}
  .el-tag + .el-tag {
    margin-left: 10px;
    
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
