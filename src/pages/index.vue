<template>
    <section>
        <o-field variant="danger">
            <o-input
                v-model="valor"
                placeholder="Agregar"
                type="search"
                icon="search"
                @keyup.enter="add"
            >
            </o-input>
            <div>
                <o-button variant="primary" @click="add">Agregar</o-button>
            </div>
            <div>
                <o-button variant="primary" @click="Del">Eliminar</o-button>
            </div>
        </o-field>
    </section>

    <div class="content">
        <ul>
            <li v-for="l in store.comments" :key="l">{{ l }}</li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useData } from '../store/main';

const store = useData();
const router = useRouter();

const valor = ref('');

const add = () => {
    if (valor.value) {
        store.addcoment(valor.value);
        valor.value = '';
    }
};

const Del = () => {
    store.delete();
    valor.value = '';
};
</script>
