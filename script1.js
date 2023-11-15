CKEDITOR.replace('textarea');
let blog = document.getElementById("blog")
let btn = document.getElementById("btn")

//  let container = document.getElementById("container")


btn.addEventListener("click", () => {

   //  let text = document.createElement("p")
    let texterea = CKEDITOR.instances.textarea.getData();
    console.log("texterea");
   //  btn.insertAdjacentHTML("beforebegin", texterea)

   let newItem = document.createElement('p');
   newItem.className = "newAdd";
   newItem.innerHTML = texterea;

let deleteBtn = document.createElement("button");
deleteBtn.className = "btn";
deleteBtn.innerHTML = 'Delete';


deleteBtn.addEventListener("click", function() {
   newItem.innerHTML = "";
   CKEDITOR.instances.textarea.setData('');
   deleteBtn.remove();
});
blog.appendChild(newItem);
blog.appendChild(deleteBtn);
});