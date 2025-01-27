<template>
  <v-card class="pa-4 mt-4" elevation="2" max-width="600">
    <v-card-title class="text-h6">Lista de Tareas</v-card-title>
    <v-divider></v-divider>

    <v-list>
      <!-- Iteramos sobre cada  tarea -->
      <v-list-item
        v-for="(task, index) in tasks"
        :key="task.id"
        class="align-center"
      >
        <!-- Checkbox para marcar como completada -->
        <v-checkbox v-model="task.done" class="mr-4"></v-checkbox>

        <!-- Información de cada tarea -->
        <div class="flex-grow-1">
          <span :class="{ 'text-decoration-line-through': task.done }">
            {{ task.title }}
          </span>
          <!-- Chip para indicar si la tarea está completada o pendiente -->
          <v-chip
            :color="task.done ? 'success' : 'warning'"
            class="ml-4"
            outlined
          >
            {{ task.done ? "Completada" : "Pendiente" }}
          </v-chip>
        </div>

        <!-- Botones de editar y eliminar -->
        <v-btn
          icon
          color="primary"
          @click="startEditing(index, task.title)"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon color="error" @click="deleteTask(index)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    tasks: Array,
  },
  data() {
    // Estado local para editar una tarea
    return {
      editingIndex: null,
      editingTitle: "",
    };
  },
  methods: {
    // Método para eliminar una tarea
    deleteTask(index) {
      this.$emit("delete-task", index);
    },
    // Método para editar una tarea
    startEditing(index, title) {
      this.editingIndex = index;
      this.editingTitle = title;
    },
    // Método para guardar los cambios de la tarea editada
    saveEdit(index) {
      if (this.editingTitle.trim()) {
        this.$emit("edit-task", { index, newTitle: this.editingTitle.trim() });
        this.editingIndex = null;
        this.editingTitle = "";
      }
    },
  },
};
</script>

<style scoped>
.text-decoration-line-through {
  text-decoration: line-through;
}
</style>

