export const addModel = async (value: any, model: string) => {    
    try {
      console.log(value)
      const header = {
        'Content-Type': 'application/json'
      }
      const options = {
        method: 'POST',
        headers: header,
        body: JSON.stringify(value)
      }
      const response = await fetch(`http://localhost:8000/${model}/add`, options);
      if (!response.ok) {
        console.log('Network response was not ok');
      }
      const data = await response.json();
      return data._id;
    } catch (error) {
      console.error('Error fetching initial state:', error);
      return null;
    }
  };
  