import React from "react";
import CartItem from "./CartItem";

function CartSummary({ items, addToCart, onDecrease, isShowing, onRemove }) {
  const subtotal = items.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0);
  const vat = subtotal * 0.07;
  const shipping = 0;
  const total = subtotal + vat + shipping;
  return (
    <>
      {isShowing && (
          <div className="w-1/3 sticky top-0">
            <h2 className="text-2xl rounded py-2 text-slate-600">Cart Items</h2>
            {items.length > 0 ? (
              <div className="flex flex-col gap-2">
                {items.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onDecrease={onDecrease}
                    addToCart={addToCart}
                    onRemove={onRemove}
                  />
                ))}
                <div className="divider"></div>
                <div className="space-y-2 px-1.5">
                  <div className="flex items-center justify-between">
                    <p className='flex-1 min-w-3/5'>Items Price</p>
                    <p>฿{subtotal.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className='flex-1 min-w-3/5'>Tax</p>
                    <p>฿{vat.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className='flex-1 min-w-3/5'>Shipping</p>
                    <p>฿{shipping.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className='flex-1 min-w-3/5'>Total</p>
                    <p className="underline">฿{total.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ) : (
              <p>Your cart is empty</p>
            )}
          </div>
      )}
    </>
  );
}

export default CartSummary;
