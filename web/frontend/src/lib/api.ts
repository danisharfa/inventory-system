// Base api URL
export function apiUrl(path: string) {
  const base = process.env.NEXT_PUBLIC_API_URL; // http://localhost:8080/api
  if (!base) throw new Error('NEXT_PUBLIC_API_URL is not set in the environment variables');
  return `${base}${path}`;
}
