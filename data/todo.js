export const todos = [
 
  {
    id: 2,
    name: "kamal",
    status: "Processing",
  },
  {
    id: 3,
    name: "Rakib",
    status: "Active",
  },
];


export const generateId =() => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  };
