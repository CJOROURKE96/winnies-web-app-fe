import { useEffect, useState } from 'react';
import { getWinnie } from '../utils/api';

const WinnieCard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [winnieData, setWinnieData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getWinnie().then((winnie) => {
      setWinnieData(winnie);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading Winnie's Web App ... </p>;
  } else {
    return (
      <main>
          {winnieData.map((data) => {
            return (
                <div>
            <h3>{data.name}</h3>
            <p>{data.location}</p>
            <img className='winnie-image' alt='winnie the dog smiling' src={data.image}></img>
            </div>
            )
          })}
      </main>
    );
  }
};

export default WinnieCard;
