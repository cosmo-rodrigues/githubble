import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchUsers } from '../../store/actions/userActions';
import { UserCard } from '../../components/UserCard';
import { Container, LoadButton, Main } from './style';

export function Home() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.users);
  const currentPage = useAppSelector((state) => state.user.currentPage);
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadMoreButton] = useState(true);

  const queryString = `since=${currentPage}&per_page=10`;

  useEffect(() => {
    if (currentPage === 1) dispatch(fetchUsers(queryString));
  }, []);

  async function handleLoadMoreClick() {
    setIsLoading(true);
    await dispatch(fetchUsers(queryString));
    setIsLoading(false);
  }

  useEffect(() => {
    if (currentPage === 1) return;
    handleLoadMoreClick();
  }, []);

  return (
    <Main>
      <Container>
        {user.map((user) => (
          <UserCard key={`${user.id}-${user.login}`} user={user} />
        ))}
      </Container>
      {showLoadMoreButton && (
        <LoadButton onClick={handleLoadMoreClick} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Load more...'}
        </LoadButton>
      )}
    </Main>
  );
}
