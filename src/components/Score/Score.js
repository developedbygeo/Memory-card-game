import Card from '../shared/UI/Card.styled';

const Score = ({ type, score }) => {
  return (
    <Card>
      <h2>
        {type} Score: <span>0</span>
      </h2>
    </Card>
  );
};

export default Score;
