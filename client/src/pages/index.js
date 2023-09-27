import { useRouter } from 'next/router';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import AlbumIcon from '@mui/icons-material/Album';
import { useEffect } from 'react';


export default function Home() {
  const router = useRouter()
  useEffect(()=>{
    const timeout = setTimeout(() => {
      router.push('/Enjoy');
    }, 5000);

    return () => clearTimeout(timeout);
  },[])
 
  return (
    <>
    <div className="bg-pink-700 flex justify-center items-center h-screen">
      <AlbumIcon style={{fontSize:"7rem"}} className='text-white text-6xl absolute top-1/3 left-0'/>
     <div className="grid grid-cols-1 text-center py-2  items-center justify-center">
      <h1 className="font-bold text-6xl text-white">Verto</h1>
      <p className="text-white text-4xl">A global cross-border payments app that has no limit</p>
     </div>
      <ChangeHistoryIcon style={{fontSize:"7rem"}} className='text-white text-6xl absolute top-2/3 right-0'/>
    </div>
    </>
  )
}
