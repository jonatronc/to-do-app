  function onReady() {
    const toDos = [];
    const addToDoForm = document.getElementsById('addToDoForm');



    function renderTheUI(){
      const toDoList = document.getElementsById('toDoList');

      toDoList.textContent = '';

      toDos.forEach(function(toDo){
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";

        newLi.textContent = toDo.title;

        toDoList.appendChild(newLi);
        newLi.appendChild(checkbox);
      })
    }

    function createNewToDo() {
      const newToDoText = document.getElementsById('newToDoText');
      if (!newToDoText.value){ return; }

      toDos.push({
        title: newToDoText.value,
        complete: false
      });
      newToDoText.value = '';

      renderTheUI(); //calls on the renderTheUI function above
    }



    addToDoForm.addEventListener('submit', event => {
      event.preventDefault(); //prevents reload
      createNewToDo(); //calls on the createNewToDo function from above
    });

    renderTheUI();
  };

  window.onload = function() {
    onReady();
};
