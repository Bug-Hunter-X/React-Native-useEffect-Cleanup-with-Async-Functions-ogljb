```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const response = await fetch('some-url', { signal });
        const data = await response.json();
        setData(data);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Render data */}
    </div>
  );
};

export default MyComponent;
```