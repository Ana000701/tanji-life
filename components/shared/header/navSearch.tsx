import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';

const NavSearch = () => {
  return (
    <div className='bg-gray-50 xl:max-w-xl max-w-xs hidden md:flex gap-2 w-full shadow-xs rounded-[1000px] border p-3'>
      <Label>
        <Image src='/icons/search.svg' alt='search' width={24} height={24} />
      </Label>
      <Input
        type='search'
        placeholder='搜尋課程...'
        className='w-full border-0 bg-none outline-0 shadow-none focus-visible:ring-0 p-0 placeholder:text-gray-500 h-6'
      />
    </div>
  );
};

export default NavSearch;
