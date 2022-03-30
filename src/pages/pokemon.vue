<template>
    <section>
        <o-field variant="danger">
            <o-input
                v-model="valor"
                placeholder="Nombre o id"
                type="search"
                icon="search"
                @keyup.enter="search"
            >
            </o-input>
            <div>
                <o-button variant="primary" @click="search">Buscar</o-button>
            </div>
        </o-field>
    </section>

    <div class="content">
        <p v-if="pokemon.name" class="title">
            El pokemon es: {{ pokemon.name }}
        </p>
        <p v-else class="title">No se ha encontrado pokemon</p>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useData } from '../store/main';
import type { Pokemon } from '../store/main';

const store = useData();
const router = useRouter();

const valor = ref('');
const pokemon = ref<Pokemon>({ name: '', abilities: [] });

const search = async () => {
    if (valor.value) {
        const re = new RegExp('^[0-9]*$');
        if (re.test(valor.value) && parseInt(valor.value) <= 898) {
            pokemon.value = await store.getPokemon(valor.value);
        } else {
            pokemon.value = { name: '', abilities: [] };
        }
    }
};
</script>
