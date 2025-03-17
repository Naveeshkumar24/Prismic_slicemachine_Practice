import { createClient } from '$lib/prismicio';


export const prerender = 'auto';

export async function load({ params, fetch, cookies }) {
    const client = createClient({ fetch, cookies });

    const settings = await client.getSingle('settings');

    return {
        settings:settings,
        
    };
} 
