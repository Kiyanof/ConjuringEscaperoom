export const fetchInitialState = async (model: string) => {    
  try {
    const response = await fetch(`http://localhost:8000/${model}/getAll`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error('Error fetching initial state:', error);
    return null;
  }
};
