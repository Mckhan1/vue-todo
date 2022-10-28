<template>
  <div id="app">
    <Header :sendCounter="this.counter"  @plitka="plitka" @line="line" @popup="showPoup" />
    <TodoItem @checkPlus="counter++" :changest="changeStyle" />
    <transition name="fade">
      <PopUp @close='closePopup' v-if="show" />
    </transition>

  </div>
</template> 

<script>
import '../public/styles/style.css'
import Header from './components/Header.vue';
import TodoItem from './components/TodoItem.vue';
import PopUp from './components/PopUp.vue';

export default {
  name: "App",
  components: {
    Header,
    TodoItem,
    PopUp
  },
  data() {
    return {
      counter: 0,
      show: false,
      changeStyle: false,
    }
  },
  methods: {
    showPoup() {
      this.show = true
    },
    closePopup() {
      this.show = false
    },
    plitka() {
      this.changeStyle = false;
      console.log(('plitka'));
    },
    line() {
      this.changeStyle = true;
      console.log(('line'));
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
</style>
