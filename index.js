#!/usr/bin/env node
import {
  getDB,
  tasksPending,
  tasksdone,
  removeTask,
  addTask,
  deleteAllTasks,
  updateTask,
  markTaskInProgress,
  markTaskisDone,
  tasksTodo,
} from "./index2";

const arr = process.argv.splice(2);
switch (arr[2]) {
  case "add": {
    if(arr[3]){
    addTask(arr[3])
    console.log("Task added successfully!")
  }
  else {
    console.log("please tell what is task which is to be added")
  }
}

case "list":{
    if(!arr[3]){
console.log((await getDB()).join("  ,  "))
    }
    else if(arr[3]=="done"){
        console.log((await tasksdone()).join("  ,  "))
    }
    else if(arr[3]=="in-progress"){
        console.log((await tasksPending()).join("  ,  "))
    }
    else if(arr[3]=="todo"){
        console.log((await tasksTodo()).join("  ,  "))
    }
}

case "mark-in-progress" :{
if(Number.isInteger(arr[3])){
    markTaskInProgress(arr[3])
}
else {
    console.log("PLease tell the id of task to mark in progress which is number")
}
}
case "mark-done" :{
    if(Number.isInteger(arr[3])){
        markTaskisDone(arr[3])
    }
    else {
        console.log("PLease tell the id of task to mark is done which is number")
    }
}

}
