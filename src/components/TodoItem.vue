<template>
    <div :class="{linewrp: changest == true}" class="TodoWrapper">
        <div v-for="item of this.todos" :key="item.id" class="Todo" :id="item.id" :class="{line: changest == true}">
            <sup>{{item.date}}</sup>
            <h2>{{item.title}}</h2>
            <p>{{item.desc}}</p>
            <ul>
                <li v-for="i of item.tasks" :key="i.id"><label for="#">{{i.inputValue}}</label>
                    <input class="inp" type="checkbox">
                </li>
            </ul>
            <div class="button-wrp">

                <button :id="item.id" @click="checkItem()">checks</button>
                <button>deleteItem</button>
                <button>edit</button>
                <button>{{changest}}</button>
            </div>
        </div>

    </div>
</template>


<script>
import { todos } from '../store/index.js';

export default {
    props: ['changest'],
    name: 'TodoItem',
    data() {
        return {
            todos: todos,
        }
    },
    methods: {
        checkItem() {
            this.todos = this.todos.filter(item => item.id != event.target.id) 
            this.$emit('checkPlus')
        }
    }
}
</script>

<style>

</style>