import { formatPrice } from '../utils';
import { removeItem, editItem } from '../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
const CartItem = ({ cartItem }) => {
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;

  const dispatch = useDispatch();
  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };
  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };
  return (
    <article
      key={cartID}
      className='mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0'
    >
      <img
        src={image}
        alt={title}
        className='h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover '
      />
      <div className=' sm:ml-16'>
        <h3 className='capitalize font-medium '>{title}</h3>
        <h4 className='capitalize text-sm text-neutral-content'>{company}</h4>


        <p className='mt-2 text-sm capitalize flex items-center gap-x-2'>
          color :
          <span
            className='badge badge-sm'
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className='sm:ml-24'>
        {/* AMOUNT */}
        <div className='form-control w-full '>
          <label className='label p-0'>
            <span className='label-text'>Amount</span>
          </label>
          <select
            className='mt-2 select select-base select-bordered select-xs'
            value={amount}
            onChange={handleAmount}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <button
          className='mt-2 link link-primary link-hover  text-sm'
          onClick={removeItemFromTheCart}
        >
          Remove
        </button>
      </div>

      <p className='font-medium sm:ml-auto'>{formatPrice(price)}</p>
    </article>
  );
};
export default CartItem;
