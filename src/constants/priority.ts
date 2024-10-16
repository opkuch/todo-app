import { Priority } from "../types/Todo";

export type PriorityOptions = Record<Priority, string>

export const PRIORITY_OPTIONS: PriorityOptions = {
    Low: 'Low',
    Medium: 'Medium',
    High: 'High',
  }
