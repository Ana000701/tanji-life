import { hashSync } from 'bcrypt-ts-edge';

export const comments = [
  {
    id: 1,
    createdAt: '2024.08.12',
    rating: 5,
    courseId: 1,
    useId: 1,
    userAvatar: '/icons/avatar-1.jpg',
    userName: 'Vivian',
    tag: '家庭主婦',
    comment:
      '這門課真的太實用了!老師將複雜的稅務問題講得淺顯易懂,搭配許多實務案例,讓我對網購店家的稅務有了更深入的了解。尤其是電子發票的部分,老師的解說讓我豁然開朗,省下不少時間...',
  },
  {
    id: 2,
    createdAt: '2024.08.10',
    rating: 5,
    courseId: 2,
    useId: 2,
    userAvatar: '/icons/avatar-2.jpg',
    userName: 'Denny',
    tag: '社會新鮮人',
    comment:
      '自從上了米粒阿姨的「家庭財務健檢:找出你的金錢漏洞」課程，我總算知道原來我的錢都花到哪裡去了！透過課程的指導,我學會了如何做預算、如何刪減不必要支出，省下一大筆錢，終於可以旅遊啦！',
  },
  {
    id: 3,
    createdAt: '2024.08.10',
    rating: 5,
    courseId: 1,
    useId: 3,
    userAvatar: '/icons/avatar-3.jpg',
    userName: 'Mandy',
    tag: '大學生',
    comment:
      '這門課真的太實用了!老師將複雜的稅務問題講得淺顯易懂,搭配許多實務案例,讓我對網購店家的稅務有了更深入的了解。尤其是電子發票的部分,老師的解說讓我豁然開朗,省下不少時間...',
  },
  {
    id: 4,
    createdAt: '2024.08.10',
    rating: 5,
    courseId: 1,
    useId: 4,
    userAvatar: '/icons/avatar-4.jpg',
    userName: 'Jack',
    tag: '創業家',
    comment:
      '這門課真的太實用了!老師將複雜的稅務問題講得淺顯易懂,搭配許多實務案例,讓我對網購店家的稅務有了更深入的了解。尤其是電子發票的部分,老師的解說讓我豁然開朗,省下不少時間...',
  },
];

export const sampleData = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      password: hashSync('123456', 10),
      role: 'admin',
    },
    {
      name: 'Jane',
      email: 'jane@example.com',
      password: hashSync('123456', 10),
      role: 'user',
    },
  ],
};
