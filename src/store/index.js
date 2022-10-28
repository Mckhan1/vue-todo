export let todos = [
    {
        id: Math.random().toString().substr(2, 6),
        title: 'Название вашей заметки',
        desc: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Страна проектах грамматики он то там, моей маленький всемогущая, даже переулка предупредила дороге маленькая грустный использовало речью, коварных океана родного.',
        tasks: [
            {
                inputValue: 'встать в 7 утра',
            },
            {
                inputValue: 'умыться',
            },
            {
                inputValue: 'позавтракать',
            },
            {
                inputValue: 'собрать вещи',
            }
        ],
        date: `${new Date().getDate()}.${new Date().getMonth() + 1}.${new Date().getFullYear()}`
    }
]

export default {todos}