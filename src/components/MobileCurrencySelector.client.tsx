import {FC, useCallback} from 'react';
import {useAvailableCountries, useCountry} from '@shopify/hydrogen/client';
import {Listbox} from '@headlessui/react';

import {ArrowIcon, CheckIcon} from './CurrencySelector.client';

const MobileCurrencySelector: FC = () => {
  const countries = useAvailableCountries();
  const [selectedCountry, setSelectedCountry] = useCountry();

  const setCountry = useCallback(
    (isoCode) => {
      setSelectedCountry(
        countries.find((country) => country.isoCode === isoCode)!,
      );
    },
    [countries, setSelectedCountry],
  );

  return (
    <div className="mt-8 rounded border border-gray-200 w-full">
      <Listbox value={selectedCountry} onChange={setCountry}>
        {({open}) => (
          <>
            <Listbox.Button className="w-full flex justify-between text-sm items-center py-5 px-7">
              {selectedCountry?.currency.isoCode}
              <ArrowIcon isOpen={open} />
            </Listbox.Button>
            <Listbox.Options className="w-full px-3 pb-2 text-lg">
              <Listbox.Option
                className="font-medium px-4 pb-4 w-full text-left uppercase"
                value={false}
                disabled
              >
                Currency
              </Listbox.Option>
              {countries.map((country) => {
                const isSelected = country.isoCode === selectedCountry?.isoCode;
                return (
                  <Listbox.Option key={country.isoCode} value={country.isoCode}>
                    {({active}) => (
                      <div
                        className={`py-2 px-4 rounded flex justify-between items-center text-left w-full cursor-pointer ${
                          active ? 'bg-gray-100' : null
                        }`}
                      >
                        {country.currency.isoCode}
                        {isSelected ? <CheckIcon /> : null}
                      </div>
                    )}
                  </Listbox.Option>
                );
              })}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default MobileCurrencySelector;
