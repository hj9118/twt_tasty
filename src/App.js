import { Button, Input, Wrapper } from './style';
import { BsTwitter } from 'react-icons/bs';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState('');
  const thread = () => {
    window.open(
      `https://twitter.com/search?q=min_faves%3A50%20min_retweets%3A100%20${value}%20타래`
    );
  };
  const keyword = () => {
    window.open(
      `https://twitter.com/search?q=min_faves%3A50%20min_retweets%3A100%20${value}%20맛집`
    );
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Wrapper>
      <BsTwitter fontSize='2rem' />
      <h1>맛집 검색</h1>
      <Input
        type='text'
        onChange={handleChange}
        placeholder='지역명 혹은 키워드로 검색'
      />
      <br />
      <Button onClick={keyword}>키워드 검색</Button>
      <Button onClick={thread}>타래 검색</Button>
    </Wrapper>
  );
}
export default App;
