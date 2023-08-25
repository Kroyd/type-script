import {ref,Ref} from 'vue'
import { useFetch } from "./fech";

interface User {
    id: number,
    name: string,
    email: string,
}

type FetchApi = Promise<{users: Ref<User[] | undefined>}>


 export async function useUsers(): FetchApi {
    const loading = ref(false);
    const {response: users, request} = useFetch<User[]>('https://jsonplaceholder.typicode.com/users',)

    if(!loading.value) {
        await request()
        loading.value = true
    }

    return {users}
 }