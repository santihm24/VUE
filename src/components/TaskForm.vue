<template>
  <v-card class="mb-4">
    <v-card-title class="text-h6">Agregar Nueva Tarea</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-form @submit.prevent="submitTask">
        <v-text-field
          v-model="taskTitle"
          label="Título de la Tarea"
          placeholder="Escribe el título de la tarea"
          outlined
          dense
          required
        ></v-text-field>
        <v-btn type="submit" color="primary" block class="mt-3">
          Agregar Tarea
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      taskTitle: '',
    };
  },
  methods: {
    // Método para enviar la tarea al componente padre
    submitTask() {
      if (this.taskTitle.trim() === '') {
        alert('El título de la tarea no puede estar vacío.');
        return;
      }
      // Emitir un evento al componente padre
      this.$emit('add-task', this.taskTitle.trim());
      this.taskTitle = '';
    },
  },
};
</script>
