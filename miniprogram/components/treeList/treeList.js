// components/treeList/treeList.js
Component({ properties: { listData:{ type:Array|Object, value:{} }, step:{ type:Number, value:1 }, }, data: { isShowChildren:true, }, methods: {  toggleShowChildren(){ this.setData({ isShowChildren:!this.data.isShowChildren }) }, } })
