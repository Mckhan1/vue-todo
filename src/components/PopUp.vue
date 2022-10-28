<template>
    <div class="popup">
        <h1>Добавьте заметку</h1>
        <span @click="$emit('close')" class="popup-close">&times;</span>
        <input class="inpModal" v-model="title" placeholder="Название" type="text"> <br>
        <!-- <input  type="text"> <br> <br> -->
        <textarea v-model="desc" placeholder="Описание" cols="30" rows="10"></textarea>
        <div id="input-wrapper">
            <input v-for="item of this.inputs" :key="item.id" class="inpPlus" v-model="item.inputValue"
                placeholder="Название" type="text">
            <svg @click="addTask" class="plus" viewBox="0 0 512 512">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                    d="M256 112v288M400 256H112" />
            </svg>
        </div>


        <br><br>
        <button class="Btn" @click="addTodo">click</button>
    </div>
</template>

<script>
import { todos } from '../store/index.js'
export default {
    name: 'PopUp',
    data() {
        return {
            inputs: [
                {
                    inputValue: '',
                },
            ],
            todos: todos,
            obj: new Object,
            id: Math.random().toString().substr(2, 6),
            title: '',
            desc: '',
            tasks: this.inputs,
            date: `${new Date().getDate()}.
            ${new Date().getMonth() + 1}.${new Date().getFullYear()}`
        }
    },
    methods: {
        addTodo() {
            this.obj.id = Math.random().toString().substr(2, 6),
                this.obj.title = this.title
            this.obj.desc = this.desc
            this.obj.tasks = this.inputs
            this.obj.date = this.date
            todos.push(this.obj)
            this.obj = {}
            this.$emit('close')
        },
        addTask() {
            this.inputs.push({
                inputValue: ''
            })
        }
    }
}
</script>

<style>

</style>