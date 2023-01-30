import { Card } from "antd";
import { StarOutlined } from '@ant-design/icons';
import Meta from 'antd/lib/card/Meta';

const PokemonCard = () => {
  return (
    <Card 
        title="Pikachu"
        cover={<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png" alt="Pikachu"/>}
        extra={<StarOutlined />}
        >
      <Meta description='fire, magic' />
    </Card>
  );
};

export default PokemonCard;
