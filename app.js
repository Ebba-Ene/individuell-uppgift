//Hämta id
const titleInput = document.getElementById('titleInput')
const author = document.getElementById('author')
const textInput = document.getElementById('textInput')

const btnCreate = document.getElementById('btnCreate')
const blogPosts = document.getElementById('blogPosts')

//Knapp för att spara information
btnCreate.addEventListener('click', (e) => {
  e.preventDefault(); //Gör så att sidan inte startas om
  blogPost(titleInput.value, author.value, textInput.value)

  textInput.value = ''
  titleInput.value = ''

  // postsContainer.scrollTop = postsContainer.scrollHeight;
})


//Skapa den nya blog posten
function blogPost (title, author, post) {
  const newPostLi = document.createElement('li')

  const blogInfo = document.createElement('p')
  const titleP = document.createElement('h2')
  const postP = document.createElement('p')

  const date = new Date()
  blogInfo.textContent = `Av ${author} - ${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
  
  titleP.textContent = title
  postP.textContent = post

  blogPosts.appendChild(newPostLi)
  newPostLi.appendChild(titleP)
  newPostLi.appendChild(blogInfo)
  newPostLi.appendChild(postP)
  newPostLi.appendChild(btnDelete)


  const btnDelete = document.createElement('button')
  btnDelete.textContent = "Ta bort"
  // btnDelete.addEventListener('click', (e) => {
  //   const target = e.target
  //   const parent = target.parentElement
  //   const todo
  // })

}
