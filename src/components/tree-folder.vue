<template>
  <div class="tree-header">
    <h4>{{book.name}}</h4>
    <li-tag :child="book.list"></li-tag>
  </div>
</template>

<script>
  import liTag from './common/ulComponent'
  export default {
    name: "tree-folder",
    props:['list'],
    data(){
      return {
        book:{
          name:'本书',
          list:[
            {
              name:'第一章',
              list:[
                {
                  name:'序章',
                  list:[
                    {
                      name:'1.1',
                      list:[
                        {
                          name:'1.1.0'
                        },
                        {
                          name:'1.1.1'
                        },
                        {
                          name:'1.1.2'
                        },
                      ]
                    },
                    {
                      name:'1.2',
                      list:[
                        {
                          name:'1.2.0'
                        },
                        {
                          name:'1.2.1'
                        },
                        {
                          name:'1.2.2'
                        },
                      ]
                    },
                    {
                      name:'1.3',
                      list:[
                        {
                          name:'1.3.0'
                        },
                        {
                          name:'1.3.1'
                        },
                        {
                          name:'1.3.2'
                        },
                      ]
                    }
                  ]
                },
                {
                  name:'开始',
                  list:[
                    {
                      name:'1.4'
                    },
                    {
                      name:'1.5'
                    },
                    {
                      name:'1.6'
                    }
                  ]
                }
              ]
            },
            {
              name:'第二章',
              list:[
                {
                  name:'2.1',
                },
                {
                  name:'2.2'
                }
              ]
            },
          ]
        }
      }
    },
    components:{
      liTag
    },
    mounted(){
      this.$nextTick(()=>{

      })
    }
  }
</script>

<style scoped>

</style>
