import {Money} from '@shopify/hydrogen/client';
import {MoneyV2} from '@shopify/hydrogen/dist/esnext/graphql/types/types';
import {UseMoneyValue} from '@shopify/hydrogen/dist/esnext/hooks/useMoney/hooks';
import {FC} from 'react';

interface MoneyCompareAtPriceProps {
  money: MoneyV2;
}

const MoneyCompareAtPrice: FC<MoneyCompareAtPriceProps> = ({money}) => {
  return (
    <Money money={money}>
      {({amount, currencyNarrowSymbol}: UseMoneyValue) => (
        <span className="line-through text-lg mr-2.5 text-gray-500">
          {currencyNarrowSymbol}
          {amount}
        </span>
      )}
    </Money>
  );
};

export default MoneyCompareAtPrice;
