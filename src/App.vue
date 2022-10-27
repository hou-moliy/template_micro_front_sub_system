<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import actions from './actions';
export default {
  name: "App",
  mounted () {
    // actions.setGlobalState({ name: '111111' });//通过setGlobalState改变全局状态
  },
};
</script>
