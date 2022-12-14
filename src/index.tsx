import React, { useEffect } from 'react';

/**
 * Main Component Props
 */
export interface Props {
  message?: string;
}
/**
 * Main Component
 */
function Greeting(props: Props) {
  useEffect(() => {
    console.log('Incoming message: ', props.message);
  }, [props.message]);

  return (
    <div>{props.message ?? 'No Message'}</div>
  );
}

export default Greeting;
