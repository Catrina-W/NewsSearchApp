const apikey = '6b59016ca3a54b408f0bd50b63be9920'

const blogContainer = document.getElementById('blog-container');

function fetchRandomNews(){
    try{
        const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=`
    } catch(error){
        console.error("Error fetching random news", error)
        return []
    }
}