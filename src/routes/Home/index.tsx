// @ts-nocheck
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchUsers } from '../../store/actions/userActions';

export function Home() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <>
      <div>Home</div>;
      <ul>
        {user.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}
