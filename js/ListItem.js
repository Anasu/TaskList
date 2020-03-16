let listItem = {
    props: ['todo'],
    template: `
        <li>
            {{ todo }}
            <button class="delete-me" @click="$emit('deleteMe', todo)">eliminar</button> 
        </li>
    `,
};