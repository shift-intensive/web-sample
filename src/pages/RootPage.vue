<script setup>
import { getPokemons } from '@/utils/api/requests';

import { onMounted, ref } from 'vue';

const isLoading = ref(true);
const list = ref([]);

onMounted(() => {
  getPokemons().then((response) => {
    list.value = response.data.results;
    isLoading.value = false;
  });
});
</script>

<template>
  <main>
    <h1>Pokemons</h1>
    <div v-if="isLoading">loading...</div>
    <div v-else className="pokemons_container">
      <div v-for="(pokemon, index) in list" :key="pokemon.name" class="pokemon">
        <img
          :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`"
          :alt="pokemon.name"
        />
        <div>{{ pokemon.name }}</div>
      </div>
    </div>
  </main>
</template>

<style>
.pokemons_container {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.pokemon {
  font-size: 20px;
  text-align: center;
}

.pokemon img {
  width: 170px;
  height: 170px;
}
</style>
