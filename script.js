 document.addEventListener("DOMContentLoaded", () => {
const likeBtn = document.querySelector(".like-btn");
const postMedia = document.querySelector(".post-media");
if (!likeBtn) return;

const likesCountSpan = likeBtn.querySelector(".likes-count");
const bookmarkBtn = document.querySelector(".bookmark-btn");

let isLiked = false;
let baseLikes = 0; // Inicializa o contador zerado

// Atualiza o texto visual inicial para 0[cite: 1]
if (likesCountSpan) {
likesCountSpan.textContent = "0";
}

// Formata números grandes (ex: 1000 -> 1.0K)[cite: 1]
function formatLikes(num) {
if (num >= 1000) {
return (num / 1000).toFixed(1) + "K";
}
return num.toString();
}

// Função para Incrementar a Curtida
function addLike() {
baseLikes++;
isLiked = true;
likeBtn.classList.add("liked");

if (likesCountSpan) {
likesCountSpan.textContent = formatLikes(baseLikes);
}

// Efeito visual de animação (bounce) no coração[cite: 1]
const svg = likeBtn.querySelector("svg");
if (svg) {
svg.style.transform = "scale(1.4)";
setTimeout(() => {
svg.style.transform = "scale(1)";
}, 150);
}
}

// Evento de clique no BOTÃO DE CORAÇÃO (Curte ou Descurte)
likeBtn.addEventListener("click", (e) => {
e.stopPropagation();

if (isLiked) {
// Se já estava curtido, descurte (-1)
isLiked = false;
baseLikes = Math.max(0, baseLikes - 1);
likeBtn.classList.remove("liked");
if (likesCountSpan) {
likesCountSpan.textContent = formatLikes(baseLikes);
}
} else {
// Se não estava curtido, adiciona curtida
addLike();
}
});

// Evento de clique na IMAGEM PRINCIPAL (Sempre aumenta likes)
if (postMedia) {
postMedia.addEventListener("click", (e) => {
e.stopPropagation();
addLike();
});
}

// Evento no botão de SALVAR (Bookmark)[cite: 1]
if (bookmarkBtn) {
let isBookmarked = false;
bookmarkBtn.addEventListener("click", (e) => {
e.stopPropagation();
isBookmarked = !isBookmarked;
bookmarkBtn.classList.toggle("bookmarked", isBookmarked);

const svg = bookmarkBtn.querySelector("svg");
if (svg) {
svg.style.transform = "scale(1.2)";
setTimeout(() => {
svg.style.transform = "scale(1)";
}, 150);
}
});
}
});
