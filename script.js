const tasks = [
    {done: false, text: "Crear HTML" },
    {done: true, text: "Linkear CSS" },
    {done: false, text: "Linkear JS" },
    {done: false, text: "Maquetar" },
    {done: false, text: "Crear array de elementos en JS" },
    {done: false, text: "Definir clases" },
    {done: false, text: "añadir ONCLICK" },
    {done: false, text: "Mandar array a lista de AllList" },
    {done: false, text: "enviar elementos chequeados a finList" },
    {done: true, text: "enviar elementos no chequeados a pendList" }
];

const allTaskList = document.getElementById("all-task");
const pendTaskList = document.getElementById("pend-task");
const finTaskList = document.getElementById("fin-task");


function createTasks(){
    allTaskList.innerHTML="";
    pendTaskList.innerHTML="";
    finTaskList.innerHTML="";

    tasks.forEach((taskItem) => {
        const elem = document.createElement("li");
        elem.textContent = taskItem.text;
        elem.className = taskItem.done ? "checked":"unchecked";
        elem.classList.add ("list--style");
        //console.log(taskItem.done);
        elem.addEventListener("click",() =>toggleTask(taskItem));
        
        const cloneElem = elem.cloneNode(true);
        cloneElem.addEventListener("click",()=>toggleTask(taskItem));

        allTaskList.append(elem);
        
        if(taskItem.done){
            finTaskList.append(cloneElem);
            //console.log(taskItem)
        }else{
            pendTaskList.append(cloneElem);
        }
    });
}
createTasks();

function toggleTask(taskItem){
    taskItem.done=!taskItem.done;
    createTasks();
}


//como putas uso git?