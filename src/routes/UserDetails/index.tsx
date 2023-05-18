import React from 'react';
import { useParams } from 'react-router-dom';

export function UserDetails() {
  const { id } = useParams();
  return <div>Details from {id}</div>;
}
