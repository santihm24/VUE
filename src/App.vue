<template>
  <v-container class="d-flex flex-column align-center justify-center">
    <v-card class="pa-4" elevation="2" max-width="600">
      <v-card-title class="text-h5">Gestor de Tareas</v-card-title>
      <v-divider></v-divider>

      <!-- Formulario para agregar nuevas tareas -->
      <v-form @submit.prevent="addTask" class="mt-4">
        <v-text-field
          v-model="newTaskTitle"
          label="Escribe el título de la tarea"
          placeholder="Nueva tarea"
          outlined
          dense
          required
        ></v-text-field>
        <v-btn type="submit" color="primary" block>Agregar</v-btn>
      </v-form>
    </v-card>

    <!-- Lista de tareas -->
    <task-list
      :tasks="tasks" 
      @delete-task="deleteTask" 
      @edit-task="editTask"
    ></task-list>
  </v-container>
</template>

<script>
import TaskList from "./components/TaskList.vue";

export default {
  components: {
    TaskList,
  },
  data() {
    return {
      tasks: [
        { id: 1, title: "Tarea 1", done: false },
        { id: 2, title: "Tarea 2", done: false },
      ],
      newTaskTitle: "",
    };
  },
  methods: {

    // Método para agregar una nueva tarea
    addTask() {
      if (!this.newTaskTitle.trim()) return;

      this.tasks.push({
        id: Date.now(),
        title: this.newTaskTitle.trim(),
        done: false,
      });

      this.newTaskTitle = "";
    },// Método para eliminar una tarea
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },// Método para editar una tarea
    editTask(payload) {
      const { index, newTitle } = payload;
      this.tasks[index].title = newTitle;
    },
  },
};
</script>

<!-- Estilos globales -->
<style scoped>
.v-container {
  height: 100vh;
}
</style>


