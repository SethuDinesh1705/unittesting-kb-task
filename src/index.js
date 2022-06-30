var obj = [];
var eachpagecontent = 10;

async function getResponse(searchQuery) {
  const apiKey = "AIzaSyCFEUIg3VBmKgMOsXrJc6sDZo_q9oLKIgQ";
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=50&q=${searchQuery}`
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  obj = data.items;
  return obj;
}
function prevPage(currentPage) {
  if (currentPage > 1) {
    currentPage--;
    return currentPage;
  }
}
function currentpage(objLength) {
  return Math.ceil(objLength / eachpagecontent);
}
function nextPage(currentPage) {
  if (currentPage < currentpage(100)) {
    currentPage++;
    return currentPage;
  }
}
