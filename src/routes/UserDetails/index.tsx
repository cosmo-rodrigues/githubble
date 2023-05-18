import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { MdLocationPin } from 'react-icons/md';
import { fetchUser } from '../../store/actions/userActions';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { IUserInfo } from '../../dtos';
import { Avatar, Card, Container, Location, Stats } from './style';
import { RepositoryTable } from '../../components/Table';

export function UserDetails() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const currentUser: IUserInfo = useAppSelector(
    (state) => state.user.currentUser
  );

  useEffect(() => {
    dispatch(fetchUser(id!));
  }, []);

  function getUserLocation(location: string) {
    if (location) return location;
    return 'No location provided';
  }

  return (
    <Container>
      <Card>
        <Avatar src={currentUser.avatar_url} alt={currentUser.login} />
        <h1>{currentUser.name}</h1>
        <h2>{currentUser.login}</h2>
        <Location>
          <MdLocationPin />{' '}
          <span> {getUserLocation(currentUser.location)}</span>
        </Location>
        <Stats>
          <div>
            <p>Followers:</p>
            <p>{currentUser.followers}</p>
          </div>
          <div>
            <p>Following:</p>
            <p>{currentUser.following}</p>
          </div>
        </Stats>
      </Card>
      <Card>
        <RepositoryTable user={id}/>
      </Card>
    </Container>
  );
}
