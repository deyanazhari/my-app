import React,{useState} from 'react'


const StatusMessage = () => {
    const [status,setStatus] = useState<'loading'|'success'|'error'>('loading');
    const updateStatus = (newStatus :'loading'|'success'|'error') => {
        setStatus(status);
    }
  return (
    <div>
        <h1>Status Message</h1>
        <p>
            {
                status === 'loading'
                ? 'loading...'
                : status === 'success'
                ?'Data succesfully retrieved'
                :'There was an error loading data'
            }
        </p>
        <button onClick={() => updateStatus('loading')}>Set to Loading</button>
        <button onClick={() => updateStatus('success')}>Set to success</button>
        <button onClick={() => updateStatus('error')}>Set to error</button>

    </div>
  )
}

export default StatusMessage;