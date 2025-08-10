export async function loadHTML(containerId, url) {
  const container = document.getElementById(containerId);
  const resp = await fetch(url);
  const html = await resp.text();
  container.innerHTML = html;
}
