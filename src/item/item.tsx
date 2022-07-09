import Button from '@material-ui/core/Button';

//Types 
import { CartItemType } from '../App';

//Styles
import { Wrapper } from './item.styles';


type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
        <div className='container'>
            <div className='picture'>
                <img src={item.image} alt={item.title} />
            </div>
            <div className="description">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                
            </div>
        </div>
        <h3 className='price'>{item.price}</h3>
        <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
    </Wrapper>
);

export default Item;








