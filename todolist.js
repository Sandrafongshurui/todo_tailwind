const form = document.getElementById('data-form')
const lists = document.getElementById('data-list')
const input = document.getElementById('data-input')

console.log(form)

let listArry = []

form.addEventListener('submit', (evnt) => {
  evnt.preventDefault()
  let id = Math.random() * 1000000
  const todo = new Todo(id, input.value)
  listArry = [todo, ...listArry]
  console.log(listArry)
  UI.displayListArry(listArry)
  UI.clearInput()
})



class Todo {
  constructor(id, todo) {
    this.id = id
    this.todo = todo
  }

}

//static classes only can be called by the class itself, not the object of the class 
class UI {
  static displayListArry(list) {
    let displayData = list.map((item) => {
      return(
        `<div class='border flex'>
        <p>${item.todo}</p>
        <button id="${item.id}"class='delete bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded my-2' onclick ="UI.removeTodo(this)">delete</button>
        </div>`)
    })
    console.log(displayData)
    lists.innerHTML = displayData.join(" ")
  }

  static clearInput(){
    input.value = ""
  }

  static removeTodo(element){
    element.parentElement.remove()
    UI.removeFromArry(element.id)
  }

  static removeFromArry(evntId){
    listArry=listArry.filter((item)=>
      item.id !== +evntId
    ) 
  }
}
