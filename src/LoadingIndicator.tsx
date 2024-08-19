import react,{useState} from 'react';
const LoadingIndicatior:React.FC = () =>  {
    const [isLoading,setIsLoading] = useState<boolean>(true)
    const toogleLoading = () => setIsLoading(!isLoading);
    return(
        <div>
            <h1>Loading Indicator Example</h1>
            {isLoading && <p>Loading...</p>}
            {!isLoading && <p>Data Loaded</p>}
            <button onClick={toogleLoading}>
                {
                    isLoading?
                    'Stop Loading'
                    :
                    'Start Loading'
                }
            </button>
        </div>
    );
}
export default LoadingIndicatior;