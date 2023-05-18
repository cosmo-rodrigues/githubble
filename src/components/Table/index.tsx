import { useEffect } from 'react';
import { Table, TableCell, TableHeader, TableRow } from './style';
import { stat } from 'fs';
import { IRepository } from '../../dtos';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { fetchUserRepos } from '../../store/actions/userActions';

interface IProps {
  user: string;
}

export function RepositoryTable({ user }: IProps) {
  const dispatch = useAppDispatch();
  const repositories: IRepository[] = useAppSelector(
    (state) => state.user.currentUserRepos
  );

  useEffect(() => {
    dispatch(fetchUserRepos(user));
  }, []);

  return (
    <>
      {repositories.length === 0 ? (
        <h1>This user has no public repositories</h1>
      ) : (
        <>
          <h1>Public repositories</h1>
          <Table>
            <thead>
              <tr>
                <TableHeader>ID</TableHeader>
                <TableHeader>Name</TableHeader>
                <TableHeader>URL</TableHeader>
              </tr>
            </thead>
            <tbody>
              {repositories.map((repository) => (
                <TableRow key={repository.id}>
                  <TableCell>{repository.id}</TableCell>
                  <TableCell>{repository.name}</TableCell>
                  <TableCell>
                    <a href={repository.url}>{repository.url}</a>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </>
  );
}
