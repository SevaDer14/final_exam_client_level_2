const app = document.getElementById('app')

// creates array of values of specific key of object (used to save all categories from courses)
const pluck = (array, key) => {
  var pluckedArray = [];
  array.forEach(item => {
    if (item.hasOwnProperty(key)) {
      pluckedArray.push(item[key])
    }
  })
  return pluckedArray;
}

//assigns container class to app
const addContainer = () => {
  app.classList.add('container')
}

//creates page header h1, style through h1
const displayHeadline = () => {
  const headline = document.createElement('h1')
  headline.classList.add('center')
  headline.innerText = "Course list"
  app.appendChild(headline)
}

// creates div with info about ciertain course
const displayCourses = () => {
  courses.forEach(course => {
    const courseDiv = document.createElement('div')
    courseDiv.dataset.cat = course.category
    let html = `<h2>${course.title}</h2>`
    html += `<p> ${course.description}</p>`
    html += `<p class="capitalized"><span class="bold">Category:</span> ${course.category}</p>`
    html += `<p><span class="bold">Instructors:</span> ${course.instructors}</p>`
    html += `<p>${course.info}</p>`
    html += `<p><span class="bold">Price:</span> ${course.price}</p>`
    courseDiv.innerHTML = html
    app.appendChild(courseDiv)
  })
}

// creates navigation/filter menu of different categories
const displayUniqueCategories = () => {
  let uniqueCategories = pluck(courses, 'category')
    .filter((value, index, array) => array.indexOf(value) === index);
  const categoryList = document.createElement('ul')
  categoryList.classList.add('center')
  uniqueCategories.forEach(category => {
    const categoryListItem = document.createElement('li')
    categoryListItem.dataset.filter = category
    categoryListItem.classList.add('capitalized', 'bold')
    categoryListItem.innerText = category
    categoryList.appendChild(categoryListItem)
  })
  app.insertAdjacentElement("beforeend", categoryList)
}

// hides cources not in category
const hideCourses = (elements, category) => {
  elements.forEach(course => {
    course.style.display = "";
    if (course.dataset.cat !== category) { course.style.display = "none"; }
  })
  return null
}


document.addEventListener('DOMContentLoaded', () => {
  addContainer()
  displayHeadline()
  displayUniqueCategories()
  displayCourses()
  const courseDivs = document.querySelectorAll('[data-cat]');
  const categoryFilters = document.querySelectorAll('[data-filter]');
  categoryFilters.forEach(filter => {
    filter.addEventListener('click', event => {
      const category = event.target.dataset.filter
      hideCourses(courseDivs, category)
    })
  })
})
