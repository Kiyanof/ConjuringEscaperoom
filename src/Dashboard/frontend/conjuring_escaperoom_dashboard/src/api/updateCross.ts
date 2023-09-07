export const updateCross = async (id: string, val: any) => {    
    try {
      const header = {
        'Content-Type': 'application/json'
      }
      const options = {
        method: 'POST',
        headers: header,
        body: JSON.stringify(val)
      }
      const response = await fetch(`http://localhost:8000/cross/set/${id}`, options);
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
  