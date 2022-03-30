import type { PiniaPluginContext } from 'pinia';

export function localPlugin({ store }: PiniaPluginContext) {
    for (const key in store.$state) {
        const value = localStorage.getItem(key);
        if (value) {
            store.$state[key] = JSON.parse(value).data;
        }
    }
    store.$subscribe(() => {
        for (const key in store.$state) {
            localStorage.setItem(
                key,
                JSON.stringify({ data: store.$state[key] }),
            );
        }
    });
}
