import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
export default function Contact({listing}) {
    const [landlord, setLandlord] = useState(null);
    const [message, setMessage] = useState('');
    const onChange = (e) => {
        setMessage(e.target.value);
    }

    useEffect(()=> {
        const fetchLandlord = async() => {
            try {
                const res = await fetch(`/api/user/${listing.userRef}`);
                const data = await res.json();
                setLandlord(data);
            } catch (error) {
                next(error);
            }
        }
        fetchLandlord();
    }, [listing.userRef] );
  return (
    <>
    {landlord && (
        <div className='flex flex-col gap-2'>
            <p>Contact <span className='font-semibold'>{landlord.username}</span> for <span className='font-semibold'>{listing.name}</span></p>
            <textarea  className='w-full border p-3 rounded-lg' name="message" id="message" rows='2' value={message} onChange={onChange} placeholder='Enter your message'></textarea>
            <Link className='bg-slate-700 text-white text-center p-3 uppercase rounded-lg'
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
            >
                Send message
            </Link>
        </div>
    )}
    </>
  )
};
