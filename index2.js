import fs from "fs/promises";
import fse from "fs-extra";

export async function getDB() {
  const data = await fse.readJSON("./index.json");
  return data.task_cli;
}

export async function addTask(descreption) {
  let datatopush = await getDB();
  datatopush.push({ id: datatopush.length, descreption ,todo:true,inprogess:false,isdone:false,createdAt:new Date(),updatedAt:"null"});
  console.log(datatopush);
  await fse.writeJSON("./index.json", { task_cli: datatopush }, { spaces: 2 });
}

export async function removeTask(Id) {
  let datatopush = await getDB();
  const arr = datatopush.filter((v, i, arr) => {
    return v.id !== Id;
  });
  await fse.writeJSON("./index.json", { task_cli: arr }, { spaces: 2 });
}

export async function deleteAllTasks() {
  await fse.writeJSON("./index.json", { task_cli: [] }, { spaces: 2 });
}

export async function deletetask(Id) {
const data =await getDB()





    await fse.writeJSON("./index.json", { task_cli: [] }, { spaces: 2 });
  }

export async function updateTask(id, Data) {
  const data = await getDB();
  const index = data.findIndex((v, i, arr) => {
    return v.id === id;
  });
  if (index !== -1) {
    data[index].descreption = Data
    data[index].updatedAt = new Date();
  } else {
    console.log("task of that id do not exists");
  }
  await fse.writeJSON("./index.json", { task_cli: data },{spaces:2});
}


export async function markTaskInProgress(id){
const data = await getDB();
const index = data.findIndex((v, i, arr) => {
return v.id ===id;
});
data[index].inprogess=true;
data[index].isdone=false;
data[index].todo=false;
await fse.writeJSON("./index.json",{task_cli:data},{spaces:2})
}

export async function markTaskisDone(id){
    const data = await getDB();
    const index = data.findIndex((v, i, arr) => {
    return v.id ===id;
    });
    data[index].inprogess=false;
    data[index].isdone=true;
    data[index].todo=false;
    await fse.writeJSON("./index.json",{task_cli:data},{spaces:2})
}



export async function tasksdone(){
    const data = await getDB();
    const arr = data.filter((v, i, arr) => {
    return v.isdone === true;
    })

    return arr;
}


export async function tasksPending(){
    const data = await getDB();
    const arr = data.filter((v, i, arr) => {
    return v.isdone === false;
    })

    return arr;
}
export async function tasksTodo(){
    const data = await getDB();
    const arr = data.filter((v, i, arr) => {
    return v.todo === true;
    })

    return arr;
}


// addTask("hello");
// removeTask(1);
// console.log(await getDB());
// console.log(await tasksPending());
// console.log(await tasksdone());
// deleteAllTasks()
// updateTask(1,"updated task");
// markTaskisDone(1)
// markTaskInProgress(1);

