export const deleteModel = async (_id: any, model: string) => {    
    try {
      const header = {
        'Content-Type': 'application/json'
      }
      const options = {
        'method': 'POST'
      }
      const response = await fetch(`http://localhost:8000/${model}/delete/${_id}`, options);
      if (!response.ok) {
        console.log('Network response was not ok');
      }
    } catch (error) {
      console.error('Error fetching initial state:', error);
      return null;
    }
  };
  