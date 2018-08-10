import React from 'react';
import { Progress } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Progress animated color="info" value={50} />
    </div>
  );
};

export default Example;
