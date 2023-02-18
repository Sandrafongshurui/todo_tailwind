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
        `<div class='tw-border tw-p-2'>
        <p class="tw-self-center">${item.todo}</p>
        <button id="${item.id}-edit"class='tw-bg-green-500 hover:tw-bg-green-700 tw-text-white tw-py-2 tw-px-4 tw-rounded tw-my-2' onclick ="UI.editTodo(this)">Edit</button>
        <button id="${item.id}-delete"class='tw-bg-red-500 hover:tw-bg-red-700 tw-text-white tw-py-2 tw-px-4 tw-rounded tw-my-2' onclick ="UI.removeTodo(this)">Delete</button>
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

  static editTodo(element){
    console.log("edit")
  }
}
