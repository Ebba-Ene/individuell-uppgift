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

  
  textInput.value = ''
  titleInput.value = ''
  // postsContainer.scrollTop = postsContainer.scrollHeight

})


//Skapa den nya blog posten
function blogPost (title, author, post) {
  const newPostLi = document.createElement('li')
  newPostLi.id = post.id
  newPostLi.className = 'post-container'

  const titleP = document.createElement('h2')
  const blogInfo = document.createElement('p')
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

  const breakLine = document.createElement('hr')
  newPostLi.appendChild(breakLine)
  
  //Kommentarer --------------------------------------------------------------------------------------------------------------------------------------------
  const kommentarSection = document.createElement('div')
  kommentarSection.id = "kommentarSection"
  newPostLi.appendChild(kommentarSection)
  
  
  let antalKommentarer = 0
  
  // Update the comment header to show the current number of comments
  function updateAntalKommentarer() {
    kommentarHeader.innerHTML = `Kommentarer (${antalKommentarer})`
  }
  
  const kommentarHeader = document.createElement('h3')
  kommentarHeader.innerHTML = `Kommentarer (${antalKommentarer})`
  kommentarSection.appendChild(kommentarHeader)
  
  //Alla kommentarer skapas i denna lista
  const kommentarUl = document.createElement('ul')
  kommentarSection.appendChild(kommentarUl)
  
  //Skapar formen
  const kommentarForm = document.createElement('form')
  kommentarForm.id = "kommentarForm"
  kommentarSection.appendChild(kommentarForm)

  const kommentarFormHeader = document.createElement('h4')
  kommentarFormHeader.innerHTML = "Lägg till kommentar"
  kommentarForm.appendChild(kommentarFormHeader)

  const kommentarUser = document.createElement('input')
  kommentarUser.setAttribute('type', 'text');
  kommentarUser.placeholder = "Ditt namn"

  kommentarForm.appendChild(kommentarUser)

  const kommentarInput = document.createElement('textarea')
  kommentarInput.placeholder = "Din kommentar..."
  kommentarForm.appendChild(kommentarInput)
  kommentarInput.cols = 50
  kommentarInput.rows = 4

  const kommentarSubmitBtn = document.createElement('button')
  kommentarSubmitBtn.innerHTML = "Skicka kommentar"
  kommentarForm.appendChild(kommentarSubmitBtn)

  //----------------------------------------------------------------------------------------------------------------
  kommentarSubmitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    // Create the new comment
    newKommentar(kommentarUser.value, kommentarInput.value)

    antalKommentarer++
    updateAntalKommentarer()

    kommentarUser.value = ''
    kommentarInput.value = ''
  })

  function newKommentar (kommentarUser, kommentarInput) {
    const newKommentarList = document.createElement('li')
    newKommentarList.className = 'newKommentarList'

    const kommentarName = document.createElement('h4')
    kommentarName.textContent = kommentarUser

    const kommentarText = document.createElement('p')
    kommentarText.textContent = kommentarInput

    const kommentarDate = document.createElement('p')
    kommentarDate.style.color = "grey"
    const date = new Date()
    kommentarDate.textContent = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`

    const kommentarTaBortBtn = document.createElement('button')
    kommentarTaBortBtn.id = "kommentarTaBortBtn"
    kommentarTaBortBtn.innerHTML = "Ta bort"

    newKommentarList.appendChild(kommentarTaBortBtn)
    

    kommentarUl.appendChild(newKommentarList)
    newKommentarList.appendChild(kommentarName)
    newKommentarList.appendChild(kommentarText)
    newKommentarList.appendChild(kommentarDate)
  }
}
