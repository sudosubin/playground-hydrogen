import {Money} from '@shopify/hydrogen/client';
import {MoneyV2} from '@shopify/hydrogen/dist/esnext/graphql/types/types';
import {UseMoneyValue} from '@shopify/hydrogen/dist/esnext/hooks/useMoney/hooks';
import {FC} from 'react';

interface MoneyPriceProps {
  money: MoneyV2;
}

const MoneyPrice: FC<MoneyPriceProps> = ({money}) => {
  return (
    <Money className="text-black text-md" money={money}>
      {({amount, currencyNarrowSymbol, currencyCode}: UseMoneyValue) => (
        <>
          {currencyCode}
          {currencyNarrowSymbol}
          {amount}
        </>
      )}
    </Money>
  );
};

export default MoneyPrice;
