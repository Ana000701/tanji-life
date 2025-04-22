import { Button } from '@/components/ui/button';
import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';

const Category = () => {
  return (
    <div className='hidden md:block'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost'>課程分類</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            <Link href='/courses'>所有領域</Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem>個人理財</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>家族財富</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>投資規劃</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>財務分析</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem>風險管理</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Category;
