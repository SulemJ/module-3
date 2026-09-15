export async function loadDishes(signal) {
  const res = await fetch("/dishes.json", { signal });
  
  if (!res.ok) {
    throw new Error("Failed to load dishes from the server.");
  }
  
  return res.json();
}