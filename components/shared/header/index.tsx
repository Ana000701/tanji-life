import Logo from './logo';
import Category from './category';
import NavSearch from './navSearch';
import Menu from './menu';

export default function Header() {
  return (
    <header className='border-b'>
      <div className='wrapper flex justify-between items-center px-4 xl:px-0 py-4'>
        <div className='flex space-x-2 items-center'>
          <Logo className='hidden lg:block' />
          <Category />
        </div>
        <NavSearch />

        <div className='flex items-center space-x-2'>
          <Menu />
        </div>
      </div>
    </header>
  );
}
