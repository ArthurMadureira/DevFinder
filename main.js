const input = document.getElementById('search')

function getUser() {
  axios.get(`https://api.github.com/users/${input.value}`)
  .then(res => {
    console.log(res.data)

    let avatarURL = res.data.avatar_url
    if(avatarURL === null) {
      return
    } else {
      avatar.src = avatarURL
    }

    let nameUser = res.data.name
    if(nameUser == null) {
      return
    } else {
      nome.textContent = nameUser
    }

    let githubUsername = res.data.login
    if(githubUsername === null) {
      return
    } else {
      username.textContent = '@'+githubUsername
    }

    let bioUser = res.data.bio
    if(bioUser == null){
      bio.textContent = 'Not Available'
    } else {
      bio.textContent = bioUser
    }

    let publicRepos = res.data.public_repos
    if(publicRepos === null) {
      repos.textContent = 0
    } else {
      repos.textContent = publicRepos
    }

    let followersUser = res.data.followers

    followers.textContent = followersUser

    let followingTotal = res.data.following
    following.textContent = followingTotal

    let locationUser = res.data.location
    const location = document.getElementById('location')
    if(locationUser === null) {
      location.textContent = 'Not Available'
    } else {
      location.textContent = locationUser
    }

    let twitter = res.data.twitter_username
    let twitterId = document.getElementById('twitter')
    if(twitter === null) {
      twitterId.textContent = 'Not Available'
    } else {
      twitterId.textContent = twitter
    }

    let blog = res.data.blog
    let blogId = document.getElementById('blog')

    if(blog === null) {
      blogId.textContent = 'Not Available'
    } else {
      blogId.href = blog
      blogId.textContent = blog
    }

    let company = res.data.company
    let companyId = document.getElementById('company')

    if(company === null) {
      companyId.textContent = 'Not Available'
    } else {
      companyId.textContent = company
    }

    let date = res.data.created_at
    let joinDateRaw = res.data.created_at;
    let joinDateObj = new Date(joinDateRaw);
    let joinDate = joinDateObj.toDateString().slice(4, 15);

    created_at.textContent = `Joined: ${joinDate}`
  })
  .catch(error => console.error(error))
}

const form = document.querySelector('form')

const searchBtn = document.getElementById('search-btn')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  getUser()
})