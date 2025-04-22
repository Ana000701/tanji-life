import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Links = [
  {
    title: '認識碳吉學院',
    linkItem: [
      { id: 1, path: 'about', name: '關於我們' },
      { id: 2, path: 'news', name: '最新消息' },
      { id: 3, path: 'contact', name: '聯絡我們' },
      { id: 4, path: 'qa', name: '常見問題' },
    ],
  },
  {
    title: '碳吉學員',
    linkItem: [
      { id: 1, path: 'courses', name: '所有課程' },
      { id: 2, path: 'teachers', name: '熱門講師' },
      { id: 3, path: 'comments', name: '學生好評' },
    ],
  },
  {
    title: '碳吉老師',
    linkItem: [
      { id: 1, path: 'apply', name: '申請成為老師' },
      { id: 2, path: 'dashboard', name: '老師儀表板' },
    ],
  },
];
const LinkList = () => {
  return (
    <div className='flex justify-between flex-col md:flex-row gap-y-6'>
      {Links.map((item) => {
        return (
          <div key={item.title}>
            <h2 className='font-bold text-[20px] text-primary-600 mb-3'>
              {item.title}
            </h2>
            <ul>
              {item.linkItem.map((link) => {
                return (
                  <li key={link.id}>
                    <Button
                      asChild
                      variant='link'
                      className='px-0 py-1 text-base leading-6'
                    >
                      <Link href={`/${link.path}`}>{link.name}</Link>
                    </Button>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default LinkList;
