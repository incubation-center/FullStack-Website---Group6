const server_url = process.env.API_URL


export const url = server_url ? server_url : 'http://localhost:3002';
