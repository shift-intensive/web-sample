<script setup>
import { useQuery } from '@tanstack/vue-query';

import { getPokemons } from '@/utils/api/requests';

const getPokemonsQuery = useQuery({
  queryKey: ['pokemons'],
  queryFn: getPokemons
});
</script>

<template>
  <main>
    <h1>Pokemons</h1>
    <div v-if="getPokemonsQuery.isLoading.value">loading...</div>
    <div v-else class="pokemons_container">
      <div
        v-for="(pokemon, index) in getPokemonsQuery.data.value.data.results"
        :key="pokemon.name"
        class="pokemon"
      >
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
