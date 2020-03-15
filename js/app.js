Vue.component('task-list', {
    template: `
    <div>
        <h1>Lista de pendientes</h1>
        <div class="flex">
            <label class="label" for="task">Nueva tarea: </label>
            <input type="text" id="task" v-model="newTodoText" placeholder="Escribe una tarea">
            <button v-on:click.stop="addItem">Agregar Tarea </button>
        </div>
        <div class="flex">
            <ol>
            <todo-item
                v-for="item in todos"
                v-bind:todo="item"
                v-bind:key="item"
            ></todo-item>
            </ol>
        </div>
    </div>
    
    `,
    data() {
        return {
            newTodoText: '',
            todos: []
        }
    },
    methods: {
        addItem: function() {
            this.todos.push(this.newTodoText);
            console.log(this.todos);
        }
    },
    components: {
        'todo-item': listItem,
    },
});