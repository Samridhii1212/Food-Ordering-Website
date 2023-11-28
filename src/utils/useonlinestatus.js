import { useState ,useEffect} from "react";

function useOnlineStatus()
{
  const [online,setonline]=useState(true)
  useEffect(()=>
  {
    window.addEventListener("online", (event) => {setonline(true)});
    window.addEventListener("offline", (event) => {setonline(false) });
     
  },[])
  console.log(online)
  return online;
}

export default useOnlineStatus;