import React, { useState, useEffect } from 'react';
import withLoadingSpinner from './withLoadingSpinner ';

const DataComponent = ({ data }) => {
  return (
    <div>
      <h2>Fetched Data:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

const DataComponentWithSpinner = withLoadingSpinner(DataComponent);

const Task5 = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData({ name: 'John Doe', age: 30 });
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
        <h6>Task7</h6>
      <h3>Loading HOC....</h3>
      <h6>Task8</h6>
      <DataComponentWithSpinner data={data} isLoading={isLoading} />
    </div>
  );
};

export default Task5;
