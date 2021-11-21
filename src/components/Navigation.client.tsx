import {Link} from '@shopify/hydrogen/client';
import {FC} from 'react';
import {ICollection} from '../interfaces/Collection';

interface NavigationProps {
  collections: ICollection[];
}

const Navigation: FC<NavigationProps> = ({collections}) => {
  return (
    <nav className="hidden lg:block text-center">
      <ul className="md:flex items-center justify-center">
        {collections.map((collection) => (
          <li key={collection.id}>
            <Link
              to={`/collections/${collection.handle}`}
              className="block p-4 hover:opacity-80"
            >
              {collection.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
