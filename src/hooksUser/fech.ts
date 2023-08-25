import { ref,Ref } from 'vue'

type FetchRequest = () => Promise<void>

interface FetchApi<T> {
    request: FetchRequest
    response: Ref<T | undefined>
}

export function useFetch<T>(url: RequestInfo, options?: RequestInit): FetchApi<T> {
    const response = ref<T>();

    const request: FetchRequest = async () => {
    const res = await fetch(url,options);
    response.value = await res.json()
    };

    return {response, request}
}