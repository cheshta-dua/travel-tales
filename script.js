const name = document.getElementById('name')
const Email = document.getElementById('Email')
const message = document.getElementById('message')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []

  if (name.value === '' || name.value == null) {
    messages.push('Name is required')

  }
  if (Email.value === '' || Email.value == null) {
    messages.push('Email is required')

  }

  else {
    e.preventDefault()
    form.remove();
    abc.remove();
    error.remove();
    ty.classList.remove("hidden");



  }
})