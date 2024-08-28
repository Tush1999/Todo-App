export const PENDING_STATE = "pending";
export const IN_PROGRESS_STATE = "in_progress";
export const COMPLETED_STATE = "complete";

export const STATUS_MAPPING = {
  [PENDING_STATE]: {
    label: "Pending",
    iconClass: "pendingStatus",
  },
  [IN_PROGRESS_STATE]: {
    label: "In Progress",
    iconClass: "inProgressStatus",
  },
  [COMPLETED_STATE]: {
    label: "Completed",
    iconClass: "completedStatus",
  },
};

export const STATUS_LIST = [PENDING_STATE, IN_PROGRESS_STATE, COMPLETED_STATE];

export const ADD_TODO = "add-todo";
export const REMOVE_TODO = "remove-todo";
export const UPDATE_TODO = "update-todo";

export const TODOS = [
  {
    id: 1,
    title: "Take Bath",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    status: "pending",
  },
  {
    id: 2,
    title: "Going to market",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    status: "in_progress",
  },
  {
    id: 3,
    title: "Going office",
    description:
      "Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsu",
    status: "complete",
  },
];
