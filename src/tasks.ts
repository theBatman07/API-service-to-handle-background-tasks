// tasks.ts
import db from './database';

interface Task {
  id: number;
  endpoint: string;
  data: object;
  delay: number;
  method: string;
  status: string;
}

export const createTask = async (task: Omit<Task, 'id'>) => {
  try {
    if (!task.endpoint) {
      throw new Error("The 'endpoint' property is required.");
    }

    const result = await db.one(
      'INSERT INTO tasks(endpoint, data, delay, method, status) VALUES($1, $2, $3, $4, $5) RETURNING *',
      [task.endpoint, task.data, task.delay, task.method, task.status]
    );

    return result;
  } catch (error : any) {
    console.error('Error creating task:', error.message);
    throw new Error('Failed to create task. Please check the provided data and try again.');
  }
};


export const updateTaskStatus = async (taskId: number, newStatus: string) => {
  try {
    const result = await db.one(
      'UPDATE tasks SET status = $1 WHERE id = $2 RETURNING *',
      [newStatus, taskId]
    );

    return result;
  } catch (error : any) {
    console.error('Error updating task status:', error.message);
    throw new Error('Failed to update task status. Please try again.');
  }
};
