import { useEffect } from 'react';
import logoboard from '../assets/img/portfolioboeard-removebg-preview.png';
import { useNavigate } from 'react-router-dom';
function OnBoarding (){
    const navigate = useNavigate();

    useEffect (()=>{
        const timer = setTimeout(()=>{
            navigate('/home');
        },3000);
        return ()=>clearTimeout(timer);
    },[navigate])

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
           
           <img  src={logoboard} alt='logopic' style={{height:'23rem',width:'23rem'}}  />
           <div className="relative ">
               
                <p className="font-bold italic text-xl bg-gradient-to-r from-purple-400 to-pink-500
                bg-clip-text text-transparent ">Riad-Medghar</p>
   
                <h4 className="-ml-3 mt-2 bg-gradient-to-t from-green-400 via-blue-500
                to-purple-500 bg-clip-text text-transparent">Ambituios Programer</h4>
            </div> 
        </div>
    )
}
export default OnBoarding;