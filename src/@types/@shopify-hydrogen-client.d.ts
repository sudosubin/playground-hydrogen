import * as client from '@shopify/hydrogen/client';
import type {LocalizationContextValue} from '@shopify/hydrogen/dist/esnext/components/LocalizationProvider/LocalizationContext.client';
import type {ProductPrice} from '@shopify/hydrogen/dist/esnext/components/ProductPrice';
import type {ProductMetafield} from '@shopify/hydrogen/dist/esnext/components/ProductMetafield';
import type {SelectedVariantUnitPrice} from '@shopify/hydrogen/dist/esnext/components/SelectedVariantUnitPrice';
import type {SelectedVariantMetafield} from '@shopify/hydrogen/dist/esnext/components/SelectedVariantMetafield';
import type {CartLineSelectedOptions} from '@shopify/hydrogen/dist/esnext/components/CartLineSelectedOptions';

declare module '@shopify/hydrogen/client' {
  declare function useCountry(): [
    LocalizationContextValue['country'],
    LocalizationContextValue['setCountry'],
  ];

  declare var Product: typeof client.ProductProvider & {
    Description: typeof client.ProductDescription;
    Price: typeof ProductPrice;
    Title: typeof client.ProductTitle;
    Metafield: typeof ProductMetafield;
    SelectedVariant: {
      AddToCartButton: typeof client.SelectedVariantAddToCartButton;
      BuyNowButton: typeof client.SelectedVariantBuyNowButton;
      ShopPayButton: typeof client.SelectedVariantShopPayButton;
      Price: typeof client.SelectedVariantPrice;
      Image: typeof client.SelectedVariantImage;
      UnitPrice: typeof SelectedVariantUnitPrice;
      Metafield: typeof SelectedVariantMetafield;
    };
  };

  declare var CartLine: typeof client.CartLineProvider & {
    Image: typeof client.CartLineImage;
    Price: typeof client.CartLinePrice;
    ProductTitle: typeof client.CartLineProductTitle;
    Quantity: typeof client.CartLineQuantity;
    QuantityAdjustButton: typeof client.CartLineQuantityAdjustButton;
    SelectedOptions: typeof CartLineSelectedOptions;
    Attributes: typeof client.CartLineAttributes;
  };
}
