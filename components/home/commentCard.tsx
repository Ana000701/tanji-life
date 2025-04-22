import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export default function CommentCard({
  createdAt,
  comment,
  userAvatar,
  userName,
  tag,
}: {
  createdAt: string;
  comment: string;
  userAvatar: string;
  userName: string;
  tag: string;
}) {
  const stars = [1, 2, 3, 4, 5].map((item) => (
    <Image
      key={item}
      src='/icons/star.svg'
      alt='rating-star'
      width={20}
      height={20}
    />
  ));
  return (
    <Card className='p-6 border-0 rounded-[8px] drop-shadow-[0_7px_29px_rgba(100,100,111,0.2)] min-h-[308px] gap-4'>
      <CardHeader className='p-0 gap-0'>
        <CardTitle>
          <div className='flex justify-between items-center gap-0'>
            <div className='flex gap-0.5'>{stars}</div>
            <time className='text-neutral-700 p-sm'>{createdAt}</time>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className='p-0'>
        <p className='text-neutral-950 p-md'>{comment}</p>
      </CardContent>
      <CardFooter className='px-0 mt-auto'>
        <div className='flex gap-2'>
          <Avatar className='size-10'>
            <AvatarImage src={userAvatar} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className='flex flex-col gap-0.5'>
            <p className='text-neutral-950 label-sm h-[17px]'>{userName}</p>
            <p className='text-neutral-700 p-sm'>{tag}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
