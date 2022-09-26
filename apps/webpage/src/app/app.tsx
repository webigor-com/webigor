import { useEffect, useState } from 'react';
import { Message } from '@webigor/api-interfaces';
import { Button } from '@webigor/ui';
import { greeter } from '@webigor/utils';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });
  const [greating, setGreating] = useState('');

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to webpage!</h1>
      </div>
      <Button onClick={() => setGreating(greeter('Igor'))} />
      <div>{m.message}</div>
      <div>{greating}</div>
    </>
  );
};

export default App;
