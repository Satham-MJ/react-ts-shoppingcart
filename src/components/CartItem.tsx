type CartItemProps = {
  id: number;
  quantity: number;
};
export const CartItem = ({ id, quantity }: CartItemProps) => {
  return (
    <div>
      {id},{quantity}
    </div>
  );
};
