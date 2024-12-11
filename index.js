//change main content depnding on what sidebar content is clicked
const sidebar = document.getElementById("sidebar")
if (sidebar) {
  sidebar.addEventListener("click", (event) => {
    const postTitle = document.querySelector(".post-title h5")
    const postMetaSubText = document.querySelector(".post-meta p")
    const postImg = document.querySelector(".post-content img")
    const postImgDescription = document.querySelector(".post-content p")

    if (event.target.closest("article").id === "japan-card") {
      postTitle.textContent = "Japan, home to the famous Mt Fuji"
      postMetaSubText.textContent = "Fujigoko, Japan"
      postImg.src = "images/sakura.jfif"
      postImg.alt = "japan sakura"
      postImgDescription.textContent = "Home to the uniquely pink Sakura trees, the famous Mt Fuji and many more attractions, it is one of the must go places in Asia. Book your all-inclusive, all-planned, fuss free trip today. your all-inclusive, all-planned, fuss free trip today."
    } else if (event.target.closest("article").id === "korea-card") {
      postTitle.textContent = "Vibrant city of Seoul"
      postMetaSubText.textContent = "Seoul, South Korea"
      postImg.src = "images/seoul.png"
      postImg.alt = "seoul korea"
      postImgDescription.textContent = "Vibrant, non-stop action with crazy fun, South Korea is a place everyone must visit. Here are 3 top reasons why you must visit South Korea. Shop till you drop, eat till you drop, dance till you drop, that's it! Book your all-inclusive, all-planned, fuss free trip today."
    } else {
      postTitle.textContent = "The Great Wall of China"
      postMetaSubText.textContent = "Beijing, China"
      postImg.src = "images/beijing.jfif"
      postImg.alt = "beijing china"
      postImgDescription.textContent = "History, the Great Wall of China, the forbidden kingdom and the lovely buns, fill your eyes and mouth with unforgettable treats from Beijing China. Book your all-inclusive, all-planned, fuss free trip today."
    }
  })
}

// shift sidebar-title in mobile
const sideBarTitle = document.getElementById("sidebar-title")
const mainContent = document.getElementById("home-main-content")

function handleBreakPointChange() {
  const screenWidth = window.innerWidth
  if (sidebar && mainContent && sideBarTitle) {
    if (screenWidth <= 600) {
      mainContent.prepend(sideBarTitle)
    } else {
      sidebar.prepend(sideBarTitle)
    }
  }
}

window.addEventListener("resize", handleBreakPointChange)
window.addEventListener("load", handleBreakPointChange)

// carousel
const carouselImgContainer = document.querySelector(".carousel-images")
const carouselImages = document.querySelectorAll(".carousel-images img")
const prevBtn = document.getElementById("c-prev")
const nextBtn = document.getElementById("c-next")

let currentIndex = 0

function updateCarousel() {
  const offset = -currentIndex * 100
  carouselImgContainer.style.transform = `translateX(${offset}%)`
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1
    updateCarousel()
  })
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    currentIndex = currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1
    updateCarousel()
  })
}
