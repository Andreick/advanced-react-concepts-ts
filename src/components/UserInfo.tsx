import { useEffect, useState } from 'react';

interface User {
  name: string;
  email: string;
}

export default function UserInfo() {
  const [user, setUser] = useState<User>();
  const [userId, setUserId] = useState(1);

  useEffect(() => {
    console.log('useEffect runs');
    fetch('https://jsonplaceholder.typicode.com/users/' + userId)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
    return () => {
      console.log('clean up');
    };
  }, [userId]);

  const userChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setUserId(Number(event.target.value));
  };

  return (
    <div className="user">
      User Id:
      <input type="tex" value={userId} onChange={userChange} />
      <br />
      Name: {user?.name}
      <br />
      Email: {user?.email}
    </div>
  );
}
