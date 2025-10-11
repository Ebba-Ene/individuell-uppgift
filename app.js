//Hämta id
const titleInput = document.getElementById('titleInput')
const author = document.getElementById('author')
const textInput = document.getElementById('textInput')

const btnCreate = document.getElementById('btnCreate')
const blogPosts = document.getElementById('blogPosts')
const postsContainer = document.getElementById('postsContainer')

//Knapp för att spara information
btnCreate.addEventListener('click', (e) => {
  e.preventDefault(); //Gör så att sidan inte startas om
  blogPost(titleInput.value, author.value, textInput.value)

  
  // textInput.value = ''
  // titleInput.value = ''
  // postsContainer.scrollTop = postsContainer.scrollHeight

})


//Skapa den nya blog posten
function blogPost (title, author, post) {
  const newPostLi = document.createElement('li')
  newPostLi.id = post.id
  newPostLi.className = 'post-container'

  const blogInfo = document.createElement('p')
  const titleP = document.createElement('h2')
  const postP = document.createElement('p')

  const date = new Date()
  blogInfo.textContent = `Av ${author} - ${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
  
  titleP.textContent = title
  postP.textContent = post

  blogPosts.appendChild(newPostLi)
  newPostLi.appendChild(titleP)
  newPostLi.appendChild(blogInfo)
  newPostLi.appendChild(postP)


  //Skapa delete knapp
  const btnDelete = document.createElement('button')
  btnDelete.textContent = "Ta bort"
  btnDelete.addEventListener('click', (e) => {
    const target = e.target
    const parent = target.parentElement
    const postId = Number(parent.id)
    parent.remove()
  })

  newPostLi.appendChild(btnDelete)
  //Skapa like och dislike knappar
  const likeDislikeGroup = document.createElement('div')
  likeDislikeGroup.id = "likeDislikeGroup"
  newPostLi.appendChild(likeDislikeGroup)

  const likeBtn = document.createElement('button')
  let likeScore = 0
  likeBtn.innerHTML = `Like: ${likeScore}`
  likeDislikeGroup.appendChild(likeBtn)

  likeBtn.addEventListener('click', () => {
    likeScore++
    likeBtn.innerHTML = `Like: ${likeScore}`
  })


  const dislikeBtn = document.createElement('button')
  let dislikeScore = 0

  likeDislikeGroup.appendChild(dislikeBtn)

  dislikeBtn.innerHTML = `Dislike ${dislikeScore}`
    dislikeBtn.addEventListener('click', () => {
    dislikeScore++
    dislikeBtn.innerHTML = `Dislike ${dislikeScore}`
  })

  //Kommentarer
  const kommentarSection = document.createElement('div')
  newPostLi.appendChild(kommentarSection)

  let antalKommentarer = 0

  const kommentarHeader = document.createElement('h2')
  kommentarHeader.innerHTML = `Kommentarer (${antalKommentarer})`
  kommentarSection.appendChild(kommentarHeader)


  const kommentarForm = document.createElement('div')
  kommentarSection.appendChild(kommentarForm)

  const kommentarUser = document.createElement('input')
  kommentarUser.setAttribute = ('type', 'text');
  kommentarUser.placeholder = "Ditt namn..."

  kommentarForm.appendChild(kommentarUser)

  const kommentarInput = document.createElement('textarea')
  kommentarInput.placeholder = "Din kommentar"
  kommentarForm.appendChild(kommentarInput)
  kommentarInput.cols = 50
  kommentarInput.rows = 4

}
