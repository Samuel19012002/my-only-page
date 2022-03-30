import { defineStore } from 'pinia';
import axios from 'axios';

export interface Pokemon {
    name: string;
    abilities: any[];
}

export const useData = defineStore('data', {
    state: () => ({
        user: '',
        paralells: ['A', 'B', 'C', 'D'],
        edad: '',
        comments: [] as string[],
    }),
    actions: {
        login(username: string, password: string) {
            console.log(username, password);
            this.user = username;
        },
        addParalell() {
            const last = this.paralells[this.paralells.length - 1];
            this.paralells.push(String.fromCharCode(last.charCodeAt(0) + 1));
        },
        Age(edad: string) {
            this.edad = edad;
        },
        addcoment(comment: string) {
            this.comments.push(comment);
        },
        delete() {
            this.comments = [];
        },
        async getPokemon(valor: string) {
            const res = await axios
                .get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${valor}`)
                .catch(() => ({ data: { name: '', abilities: [] } }));
            return res.data;
        },
    },
    getters: {
        onlynumbers() {
            const re = new RegExp('^[0-9]*$');
            if (re.test('')) {
                return parseInt('');
            }
            return '';
        },
    },
});
