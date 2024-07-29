const apiKey = "6b59016ca3a54b408f0bd50b63be9920";

const blogContainer = document.getElementById("blog-container");

async function fetchRandomNews() {
    try {
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error("Error fetching random news", error);
        return [];
    }
}

function displayBlogs(articles) {
    blogContainer.innerHTML = "";
    articles.forEach((article) => {
        const blogCard = document.createElement
        ("div");
        blogCard.classList.add("blog-card");
        const img = document.createElement("img");
        img.src = article.urlToImage;
        img.alt = article.title;
        const title = document.createElement("h2");
        title.textContent = article.title
        const description = document.createElement("p")
        description.textContent = article.description;

        blogCard.appendChild(img);
        blogCard.appendChild(title);
        blogCard.appendChild(description);
        blogContainer.appendChild(blogCard);
    })
}

//         const truncatedTitle = 
//             article.title.length > 30
//                 ? article.title.slice(0, 30) + "...." 
//                 : article.title;
//         title.textContent = truncatedTitle;
//         const description = document.createElement("p");
//         const truncatedDes = 
//             article.description.length > 120
//                 ? article.description.slice(0, 120) + "...." 
//                 : article.description;
//         description.textContent = truncatedDes;

       
//         blogCard.addEventListener('click', () => {
//             window.open(article.url, "_blank");
//         });
//         blogContainer.appendChild(blogCard);
//     });
// }

(async () => {
    try {
        const articles = await fetchRandomNews();
        displayBlogs(articles);
    }   catch (error) {
        console.error("Error fetching random news", error);
    }
})();