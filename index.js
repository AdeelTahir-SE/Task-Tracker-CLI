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
  deletetask,
} from "./index2.js";

const arr = process.argv;
switch (arr[2]) {
  case "add":
    {
      if (arr[3]) {
        addTask(arr[3]);
      } else {
        console.log("please tell what is task which is to be added");
      }
    }
    break;
  case "list":
    {
      if (!arr[3]) {
        console.log(await getDB());
      } else if (arr[3] == "done") {
        console.log(await tasksdone());
      } else if (arr[3] == "in-progress") {
        console.log(await tasksPending());
      } else if (arr[3] == "todo") {
        console.log(await tasksTodo());
      }
    }
    break;
  case "mark-in-progress":
    {
      if (Number.isInteger(parseInt(arr[3]))) {
        markTaskInProgress(parseInt(arr[3]));
      } else {
        console.log(
          "PLease tell the id of task to mark in progress which is number"
        );
      }
    }

    break;
  case "mark-done":
    {
      if (Number.isInteger(parseInt(arr[3]))) {
        markTaskisDone(parseInt(arr[3]));
      } else {
        console.log(
          "PLease tell the id of task to mark is done which is number"
        );
      }
    }
    break;
  case "delete":
    {
      if (Number.isInteger(parseInt(arr[3]))) {
        deletetask(parseInt(arr[3]));
      } else if (arr[3] === "all") {
        await deleteAllTasks();
      }
    }
    break;

  case "update":
    {
      if (Number.isInteger(parseInt(arr[3])) && arr[4]) {
        updateTask(parseInt(arr[3]), arr[4]);
      } else {
        console.log(
          "PLease tell the id of task to update and the new descreption"
        );
      }
    }
    break;

  case "remove":
    {
      if (Number.isInteger(parseInt(arr[3]))) {
        removeTask(parseInt(arr[3]));
      } else {
        console.log("Please tell the id of task to remove which is number");
      }
    }

    break;

  case "--help":
    {
      console.log(`
      Task CLI - Available Commands:
      
      add <task>             - Add a new task
      list [status]          - List all tasks or filter by status ('done', 'in-progress', 'todo')
      mark-in-progress <id>  - Mark a task as in progress
      mark-done <id>         - Mark a task as done
      delete <id>            - Delete a task by ID
      delete all             - Delete all tasks
      update <id> <desc>     - Update the description of a task by ID
      remove <id>            - Remove a task by ID
      --help                 - Show this help message
    `);
    }
    break;

  default: {
    console.log(
      "Sorry but that command do not exists To check all commands check tasck-cli --help"
    );
  }
}
