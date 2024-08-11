import fse from "fs-extra";

export async function getDB() {
  const data = await fse.readJSON("./index.json");
  return data.task_cli;
}

export async function addTask(descreption) {
  let datatopush = await getDB();
  datatopush.push({
    id: datatopush.length,
    descreption,
    todo: true,
    inprogress: false,
    isdone: false,
    createdAt: new Date(),
    updatedAt: "null",
  });
  await fse.writeJSON("./index.json", { task_cli: datatopush }, { spaces: 2 });
  console.log(`task added successfully! ID: ${datatopush.length - 1}`);
}

export async function removeTask(Id) {
  let datatopush = await getDB();
  const arr = datatopush.filter((v, i, arr) => {
    return v.id !== Id;
  });
  if (datatopush == arr) {
    console.log("task of that ID not found");
  } else {
    console.log("task removed successfully");
  }
  await fse.writeJSON("./index.json", { task_cli: arr }, { spaces: 2 });
}

export async function deleteAllTasks() {
  await fse.writeJSON("./index.json", { task_cli: [] }, { spaces: 2 });
  console.log("all tasks removed successfully!");
}

export async function deletetask(Id) {
  const data = await getDB();
  const arr = data.filter((v, i, arr) => {
    return v.id !== Id;
  });
  if (data == arr) {
    console.log("task of that ID not found");
  } else {
    console.log("task removed successfully");
  }
  await fse.writeJSON("./index.json", { task_cli: arr }, { spaces: 2 });
}

export async function updateTask(id, Data) {
  const data = await getDB();
  const index = data.findIndex((v, i, arr) => {
    return v.id === id;
  });
  if (index !== -1) {
    data[index].descreption = Data;
    data[index].updatedAt = new Date();
    console.log("task updated successfully");
  } else {
    console.log("task of that id do not exists");
  }
  await fse.writeJSON("./index.json", { task_cli: data }, { spaces: 2 });
}

export async function markTaskInProgress(id) {
  const data = await getDB();
  const index = data.findIndex((v, i, arr) => {
    return v.id === id;
  });
  if (index >= 0) {
    data[index].inprogress = true;
    data[index].isdone = false;
    data[index].todo = false;
    console.log("task marked as in progress");
  } else {
    console.log("Sorry task of that id do not exists");
  }

  await fse.writeJSON("./index.json", { task_cli: data }, { spaces: 2 });
}

export async function markTaskisDone(id) {
  const data = await getDB();
  const index = data.findIndex((v, i, arr) => {
    return v.id === id;
  });
  if (index >= 0) {
    console.log("task marked as done");
    data[index].inprogress = false;
    data[index].isdone = true;
    data[index].todo = false;
  } else {
    console.log("Sorry task of that id do not exists");
  }

  await fse.writeJSON("./index.json", { task_cli: data }, { spaces: 2 });
}

export async function tasksdone() {
  const data = await getDB();
  const arr = data.filter((v, i, arr) => {
    return v.isdone === true;
  });

  return arr;
}

export async function tasksPending() {
  const data = await getDB();
  const arr = data.filter((v, i, arr) => {
    return v.inprogress == true;
  });

  return arr;
}
export async function tasksTodo() {
  const data = await getDB();
  const arr = data.filter((v, i, arr) => {
    return v.todo === true;
  });

  return arr;
}


