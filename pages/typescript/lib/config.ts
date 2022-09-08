const env_url = process.env.API_URL

export const url = env_url ? env_url : 'localhost:3002';
