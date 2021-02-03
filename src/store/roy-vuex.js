/*
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-02-03 11:54:52
 * @LastEditors: Roy
 * @LastEditTime: 2021-02-03 17:46:44
 * @Deprecated: 否
 * @FilePath: /roy-vuex/src/store/roy-vuex.js
 */
let Vue;
class Store {
    constructor(options){
        const {
            state,
            mutations,
            actions,
            getters
        } = options;
        this._mutations = mutations;
        this._actions = actions;
        this._vm = new Vue({
            data:{
                state
            }
        });
        if (getters) {
            this.handleGetters(getters);
        }
        this.commit = this.commit.bind(this);
        this.dispatch = this.dispatch.bind(this);
    }
    get state() {
        return this._vm.state;
    }
    commit(type,payload){
        const entry = this._mutations[type];
        if (entry) {
            entry(this.state,payload);
        }
    }
    dispatch(type,payload) {
        const entry = this._actions[type];
        if (entry) {
            entry(this,payload);
        }
    }
    handleGetters(getters){
        this.getters = {};
        Object.keys(getters).forEach((key)=>{
            Object.defineProperty(this.getters,key,{
                get:()=>getters[key](this.state)
            });
        });
    }
}

function install(_Vue) {
    Vue = _Vue;
    Vue.mixin({
        beforeCreate(){
            if(this.$options&&this.$options.store){//如果是根组件
                this.$store = this.$options.store
            }else{//如果是子组件
                this.$store = this.$parent && this.$parent.$store
            }
        }
    })
}

export default {
    Store,
    install
}


