const item = document.querySelector("#item")
const toDoBox = document.querySelector("#to-do-box")
 item.addEventListener(       //gives the parametar to the callback which we provide which contain the information about the event
    "keyup",
    function(event)
    {
         if(event.key=="Enter")
         {
             addToDo(this.value) 
             this.value =""   //here this refer as the item
         }
    }
 ) 
   
  const addToDo =(item)=>{
    const listItem = document.createElement("li");
    listItem.innerHTML=`${item}
    <i class="fas fa-times"></i>`;

     listItem.addEventListener(
        "click",
        function() {
            this.classList.toggle("done");                //toggle is use to add and remove the class
        }
     )
        listItem.querySelector("i").addEventListener(
            "click",
            function () {
                listItem.remove()
            }
        
     )

    toDoBox.appendChild(listItem)

  }