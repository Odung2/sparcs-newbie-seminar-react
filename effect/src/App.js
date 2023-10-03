import React, {useState, useEffect} from 'react';
import './App.css';
import Feed from './Feed';

// call `await api()` to get data
import api from './api';

const App = () => {
  var [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api();
        setData(response);
        console.log({data});
        setLoading(false); // 데이터가 도착하면 로딩 중 상태를 false로 업데이트

      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // 에러가 발생하더라도 로딩 상태를 false로 업데이트

      }

    }
    fetchData(); // fetchData 함수 호출
    // cleanup 함수 (컴포넌트 언마운트 시 실행)
    return () => {
      // 여기에 정리(clean up) 작업을 추가할 수 있습니다 (예: 타이머 해제 등)
    };
  }, []); // useEffect는 한 번만 실행하도록 빈 의존성 배열을 전달


  return (
    <div className="App">
      <h1>Feed</h1>
      {loading ? (
        <p>로딩 중...</p>
      ) : (
        <p>
        {data.map((item, index)=>(
          <div key={index}>
            <strong>{item.title}</strong>
            <p>{item.content}</p>
          </div>
        ))}
        </p>
        // <DisplayData data={data} />
      )}
    </div>
  );
};

function DisplayData({ data }) {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <strong>{item.title}</strong>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  );
}


export default App;
