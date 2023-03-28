import {defineStore} from "pinia";
import { useCounterStore } from "./counter";
import { useServerStore } from "./server";

/**
 * 루트스토어에서 스토어 합성을 할 수 있는지 테스트를 하였으나 컴파일이 되지 않았음.
 * 
 * @deprecated
 */
export const useRootStore = defineStore("root", () => {
    const serverStore = useServerStore();
    const counterStore = useCounterStore();
    
    return {
        server: serverStore,
        counter: counterStore,
    }
});