<template>
    <div id="header">
        <div>
            <input list="search" placeholder="search todo " class="search" type="text">
            <datalist id="search">
                <option v-for="item of todos" :key="item.id" :value="item.title">{{item.desc}}</option>
            </datalist>
        </div>
        <h1 >Checked: {{this.sendCounter}}</h1>
        <div class="icons">
            <button @click="plitka" :class="{white: buttons == true}">
                <svg class="ionicon" viewBox="0 0 512 512">
                    <title>Checkbox</title>
                    <path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                        d="M352 176L217.6 336 160 272" />
                    <rect x="64" y="64" width="384" height="384" rx="48" ry="48" fill="none" stroke="white"
                        stroke-linejoin="round" stroke-width="32" />
                </svg>
            </button>
            
            <button @click="line" :class="{white: buttons == false}">
                <svg class="ionicon" viewBox="0 0 512 512">
                    <title>Copy</title>
                    <rect x="128" y="128" width="336" height="336" rx="57" ry="57" fill="none" stroke="white"
                        stroke-linejoin="round" stroke-width="32" />
                    <path
                        d="M383.5 128l.5-24a56.16 56.16 0 00-56-56H112a64.19 64.19 0 00-64 64v216a56.16 56.16 0 0056 56h24"
                        fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                </svg>
            </button>
        </div>
        <button @click="$emit('popup')" class="addTodo">добавить заметку</button>
    </div>
</template>

<script>
import { todos } from '../store/index.js'
export default {
    props: ['sendCounter'],
    name: 'Header',
    data() {
        return {
            checked: 0,
            todos: todos,
            buttons: true,
        }
    },
    methods: {
        plitka() {
            this.buttons = true
            this.$emit('plitka')
        },
        line() {
            this.buttons = false
            this.$emit('line')
        }
    }

}

</script>

<style>
/*  */

.white {
    background: rgb(138, 138, 138) !important;
}
</style>