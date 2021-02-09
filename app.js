const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-box");
const searchButton = document.querySelector(".search-btn");

const auth = "563492ad6f91700001000001c4ef8cd13d0846d29feb7ff9ec957194";

async function getPhotos() {
  const dataFetch = await fetch(
    "https://api.pexels.com/v1/curated?per_page=15",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    }
  );
  const result = await dataFetch.json((data) => {
    console.log(data);
  });
  return result;
}

async function renderGallery() {
  const result = await getPhotos();
  console.log(result);
  result.photos.forEach((photo) => {
    const photoItem = document.createElement("ARTICLE");
    photoItem.classList.add("gallery-item");
    photoItem.innerHTML = `
      <header>
        <h3 class="photo-author">${photo.photographer}</h3>
        <a href=${photo.src.original} class="download-link" target="_blank">Download</a>
      </header>
      <section>
        <img
            src=${photo.src.large}
            alt="photo info"
        />
      </section>`;
    gallery.appendChild(photoItem);
  });
}

renderGallery();
