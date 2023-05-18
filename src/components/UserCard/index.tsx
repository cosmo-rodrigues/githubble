import {
  Card,
  CardInner,
  CardFace,
  CardFaceBack,
  CardContent,
  CardHeader,
  Profile,
  CardHeaderH2,
  CardBody,
  CardBodyH3,
} from './style';
import { IUserInfo } from '../../dtos';
import { useNavigate } from 'react-router-dom';

interface IUserCardProps {
  user: IUserInfo;
}

export function UserCard({ user }: IUserCardProps) {
  const navigate = useNavigate()
  return (
    <Card onClick={() => navigate(`/user/${user.login}`)}>
      <CardInner>
        <CardFace>
          <CardFaceBack>
            <CardContent>
              <CardHeader>
                <Profile src={user.avatar_url} alt='' />
                <CardHeaderH2>{user.login}</CardHeaderH2>
              </CardHeader>
              <CardBody>
                <CardBodyH3>User ID - {user.id}</CardBodyH3>
              </CardBody>
            </CardContent>
          </CardFaceBack>
        </CardFace>
      </CardInner>
    </Card>
  );
}
