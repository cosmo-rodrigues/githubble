// @ts-nocheck
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchUsers } from '../../store/actions/userActions';

export function Home() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  console.log(user);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <>
      <div>Home</div>;
      <ul>
        {user.map((user) => (
          <li key={user.login}>{user.login}</li>
        ))}
      </ul>
    </>
  );
}
