<template>
  <div id="app">
    <b-row class="p-3">
      <b-col class="text-dark">
        <h1>Questão 10</h1>
        <p>{{ title }}</p>
        <div class="hr hr-blue"></div>
      </b-col>
    </b-row>
    <b-row class="p-3">
      <b-col class="d-flex flex">
        <div v-for="tarefa in tarefas" :key="tarefa.id" :id="tarefa.id">
          <div v-if="tarefa.estaCompleta">
            <b-card
              bg-variant="primary"
              text-variant="white"
              :header="tarefa.descricao"
              style="margin: 5px"
              class="text-center"
            >
              <b-card-text
                >Status: Completa</b-card-text
              >
            </b-card>
          </div>
          <div v-else>
            <b-card
              bg-variant="danger"
              text-variant="white"
              style="margin: 5px"
              :header="tarefa.descricao"
              class="text-center"
            >
              <b-card-text
                >Status: Incompleta</b-card-text
              >
            </b-card>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "App",
  components: {
    //HelloWorld
  },
  data() {
    return {
      title: "Lista de tarefas",
      tarefas: [
        {
          id: 1,
          descricao: "Alterar janela do Bot",
          estaCompleta: true,
        },
        {
          id: 2,
          descricao: "Planejar design da pagina inicial",
          estaCompleta: false,
        },
        {
          id: 3,
          descricao: "Fazer TP1",
          estaCompleta: true,
        },
        {
          id: 4,
          descricao: "Optimizar códigos do Bot",
          estaCompleta: true,
        },
        {
          id: 5,
          descricao: "Fazer bolo",
          estaCompleta: false,
        },
      ],
    };
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  /* background-color: #191b1e; */
}
.hr {
  height: 1px;
  margin-bottom: 10px;
}
.hr.hr-blue {
  border-top: 1px solid #03a9f4;
}
.flex {
  flex-wrap: wrap;
}
</style>
