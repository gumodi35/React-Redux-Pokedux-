import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import './PokemonList.css';

const PokemonCard = ({ name, image, abilities }) => {
  return (
    <Card
      title={name}
      cover={
        <img
          src={image}
          alt={name}
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description={abilities.filter(ability => 
      (!ability.is_hidden)).map(ability => 
      (ability.ability.name)).join(', ')} 

      />
    </Card>
  );
};

export default PokemonCard;