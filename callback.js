function fetchData(callback) {
    console.log('Fetching data...');
  
    setTimeout(() => {
      const data = { name: 'Paritosh Thakur', age: 21 };
      callback(data);
    }, 2000);
  }
  
  fetchData((data) => {
    console.log('Data received:', data);
  });
  