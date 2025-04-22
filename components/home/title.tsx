import Image from 'next/image';

export default function Title({
  image,
  title,
}: {
  image: string;
  title: string;
}) {
  return (
    <div className='flex flex-col items-center gap-2 py-6'>
      <Image src={image} alt={title} width={120} height={120} />
      <p className='heading-sm md:heading-2xl'>{title}</p>
    </div>
  );
}
