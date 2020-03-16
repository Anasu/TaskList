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
                v-bind:todo="item.text"
                v-bind:key="item.id"
                @deleteMe="deleteItem(item.id)"
            ></todo-item>
            </ol>
        </div>
    </div>
    
    `,
    data() {
        return {
            newTodoText: '',
            newID: 0,
            todos: []
        }
    },
    methods: {
        addItem: function() {
            this.todos.push({
                id: this.newID, 
                text: this.newTodoText
            });
            this.newID ++;
        },
        deleteItem: function(aux) {
            for(it in this.todos){
                if(this.todos[it].id == aux){
                    this.todos.splice(it, 1);
                    break;
                }
            }
        }
    },
    components: {
        'todo-item': listItem,
    },
});