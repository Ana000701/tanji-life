import Image from 'next/image';

const SocialList = () => {
  return (
    <ul className='flex space-x-2 mt-6'>
      <li>
        <Image src='/icons/fb.svg' alt='facebook' width={24} height={25} />
      </li>
      <li>
        <Image src='/icons/line.svg' alt='line' width={24} height={25} />
      </li>
      <li>
        <Image src='/icons/ig.svg' alt='instagram' width={24} height={25} />
      </li>
      <li>
        <Image src='/icons/x.svg' alt='x' width={24} height={25} />
      </li>
    </ul>
  );
};

export default SocialList;
