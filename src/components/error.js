import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
  //catches error
  const err=useRouteError();
  console.log(err);
  return (
    <div>something went wrong</div>
  )
}

export default Error