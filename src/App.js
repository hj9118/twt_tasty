import { Button, Input, Wrapper } from './style';
import { BsTwitter } from 'react-icons/bs';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Wrapper>
      <BsTwitter fontSize='2rem' />
      <h1>맛집 검색</h1>

      <form>
        <Input
          type='text'
          onChange={handleChange}
          placeholder='지역명 혹은 다른 키워드로 검색이 가능합니다.'
        />
        <br />
        <Button onClick={() => alert(value)}>키워드 검색</Button>
        <Button>타래 검색</Button>
      </form>
    </Wrapper>
  );
}
export default App;
