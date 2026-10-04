const API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function obtenerPosts(page = 1, limit = 10) {
  const respuesta = await fetch(`${API_URL}?_page=${page}&_limit=${limit}`);
  if (!respuesta.ok) {
    throw new Error("No se pudieron cargar los posts");
  }
  const total = Number(respuesta.headers.get("x-total-count")) || 100;
  const posts = await respuesta.json();
  return { posts, total };
}