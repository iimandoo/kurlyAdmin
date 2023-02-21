import React from 'react';

type Props = { message?: string };

const AdminErrorMessage = (props: Props) => {
  return <div className='text-red-500 text-sm mt-2'>{props.message}</div>;
};

export default AdminErrorMessage;
