import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchUsers } from '../../store/actions/userActions';
import { UserCard } from '../../components/UserCard';
import { Container } from './style';

export function Home() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <Container>
      {user.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </Container>
  );
}
