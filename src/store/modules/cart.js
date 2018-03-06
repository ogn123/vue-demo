//初始化数据
const state = {
    shop_list: [{
        id: 11,
        name: '鱼香肉丝',
        price: 12,
        numb: 10
    }, {
        id: 22,
        name: '宫保鸡丁',
        price: 14,
        numb: 4
    }, {
        id: 34,
        name: '土豆丝',
        price: 10,
        numb: 2
    }, {
        id: 47,
        name: '米饭',
        price: 2,
        numb: 5
    }],
    added: []
};

//getter 抛出去的数据
const getters = {
    // shoplist:function (state){
    //     return state.shoplist
    // }
    // 商品展示
    shoplist:state => state.shop_list,
    //购物车的列表
    cartProducts:state=>{
        return state.added.map(({id,num})=>{
            let product = state.shop_list.find(n=>n.id == id)
            // console.log('product',product)
            return {
                ...product,
                num
            }
            
        })
        
    },
    // 总价
    totalPrice:(state,getters) =>{
        console.log(getters)
        let total = 0
        getters.cartProducts.forEach((n,i,v) =>{
            total += n.price * n.num
        })
        return total
    },
    // 数量
    totalNum:(state,getters) =>{
        // console.log(getters)
        let numbers = 0
        getters.cartProducts.forEach(n =>{
            numbers += n.num
        })
        return numbers
    }
};

//action 异步的操作
const actions = {
    //添加到购物车操作
    addToCart({commit},product){
        commit('add',{  //传递一个add的方法，携带参数id
            id:product.id
        })
    },
    // 清除购物车
    clearAllCart({commit}){
        commit('clearAll')
    },
    // 删除某个商品
    delProduct({commit},product){
        commit('delect',{
            id:product.id
        })
    }
};

//mutation
const mutations = {
    //添加到购物车操作
    add(state,{id}){  //解构id 你可以 测试id 和 {id}的区别        
        let record = state.added.find(n=>n.id == id); 
        if(!record){
            state.added.push({
                id,
                num:1
            })
        }else {
            record.num++
        }
        // console.log(id,record,state.added)
    },
    // 清除购物车
    clearAll(state){
        state.added=[]
        console.log('清除购物车')
    },
    // 删除某个商品
    delect(state,product){
        // console.log(state.added)
        // console.log(product)
        state.added.forEach((n,i)=>{
            if(n.id == product.id){
                //找到index的下标值
                state.added.splice(i,1)
            }
        })
    }
};

export default {
  state,
  mutations,
  actions,
  getters,
};