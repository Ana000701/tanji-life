import Image from 'next/image';

export default function IntroCard({
  cardImage,
  title,
  description,
}: {
  cardImage: string;
  title: string;
  description: string;
}) {
  return (
    <div className='flex flex-col basis-1/3'>
      <div className='rounded-xl overflow-hidden'>
        <Image src={cardImage} alt={title} width={1344} height={896} />
      </div>
      <div className='py-3 space-y-3'>
        <p className='text-primary-600 heading-sm text-center'>{title}</p>
        <p className='text-neutral-700 p-lg text-center'>{description}</p>
      </div>
    </div>
  );
}
