import { Button } from '@/components/ui/button';
import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { getAllCategories } from '@/lib/actions/courses.actions';
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu';
import Link from 'next/link';

export default async function Category() {
  const categories = await getAllCategories();

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
          {categories?.map((link) => (
            <DropdownMenuCheckboxItem key={link.id}>
              <Link href={`/courses/${link.name}`}>{link.name}</Link>
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
