<!--
 * @message: 描述
 * @Author: Roy
 * @Email: @163.com
 * @Github: @163.com
 * @Date: 2021-02-03 11:28:36
 * @LastEditors: Roy
 * @LastEditTime: 2021-02-03 17:48:05
 * @Deprecated: 否
 * @FilePath: /roy-vuex/src/components/HelloWorld.vue
-->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p @click="$store.dispatch('add')">Roy-Vuex的数据:{{$store.state.couter}}</p>
    <p>Roy-Vuex通过getter获取的数据:{{$store.getters.doubleCounter}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
