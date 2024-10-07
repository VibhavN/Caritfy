import React, { useState } from 'react';
import ShoppingCart from '../Components/Cart/ShoppingCart';
import PaymentMethods from '../Components/Cart/PaymentMethods';
import OrderConfirmation from '../Components/Cart/OrderConfirmation';

export const CheckOutPage = () => {
  const [step, setStep] = useState(1); 

  const proceedToCheckout = () => {
    setStep(2); 
  };

  const confirmOrder = () => {
    setStep(3); 
  };

  return (
    <div>
      {step === 1 && (
        <ShoppingCart proceedToCheckout={proceedToCheckout} />
      )}
      {step === 2 && (
        <PaymentMethods confirmOrder={confirmOrder} />
      )}
      {step === 3 && <OrderConfirmation />}
    </div>
  );
};

export default CheckOutPage;
