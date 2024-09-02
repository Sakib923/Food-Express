import { assets } from '../../assets/assets';
import './FoodItem.css';

export default function FoodItem({id, name, price, description, image}){
    return (
        <div className='food-item'>
            <div className='food-item-container'>
                <img className='food-item-image' src={image} alt={name} />
            </div>
            <div className='food-item-info'>
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="ratings" />
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">{price}</p>
            </div>
        </div>
    )
}