# Tasks-CLI

Tasks-CLI is a simple and efficient command-line tool for managing tasks directly from your terminal. Whether you need to add, update, mark as done, or delete tasks, Tasks-CLI provides a straightforward solution to keep your tasks organized.

## Features

- **Add tasks**: Easily add new tasks to your list.
- **List tasks**: View all tasks or filter by their status (e.g., 'done', 'in-progress', 'to-do').
- **Update tasks**: Update the description of an existing task.
- **Manage status**: Mark tasks as 'in-progress' or 'done'.
- **Delete tasks**: Remove specific tasks or delete all tasks at once.


After installation, you can use tasks-cli with the following commands:

tasks-cli add <task>
Adds a new task.

tasks-cli list [status]
Lists all tasks or filters them by status ('done', 'in-progress', 'todo').

tasks-cli mark-in-progress <id>
Marks a task as 'in-progress'.

tasks-cli mark-done <id>
Marks a task as 'done'.

tasks-cli update <id> <desc>
Updates the description of a task by ID.

tasks-cli delete <id>
tasks-cli delete all

Deletes a specific task by ID or deletes all tasks.
tasks-cli remove <id>
Removes a task by ID.

tasks-cli --help
Displays a list of available commands and their descriptions.

## Examples

Add a task:
tasks-cli add "Finish project documentation"


List all tasks:
tasks-cli list


Mark a task as done:
tasks-cli mark-done 1


Delete a task:
tasks-cli delete 2
