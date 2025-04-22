import IntroCard from './introCard';
import Title from './title';

export default function Intro() {
  return (
    <section className='bg-neutral-50 dark:bg-background'>
      <div className='wrapper py-6 md:py-12'>
        <Title image='/home/title-icon-2.svg' title='碳吉學院好在哪 !?' />
        <div className='flex flex-col lg:flex-row items-center gap-6 p-4 lg:p-0 '>
          <IntroCard
            cardImage='/home/intro-card-1.jpg'
            title='全方位財務知識'
            description='涵蓋上班族、創業家、退休族各個人生階段、各行業財務知識'
          />
          <IntroCard
            cardImage='/home/intro-card-2.jpg'
            title='實力派碳吉講師'
            description='每位講師都具備實戰績效、授課經驗，真的可以帶你碳大吉的講師！'
          />
          <IntroCard
            cardImage='/home/intro-card-3.jpg'
            title='豐富的學習資源'
            description='除了課程內容以外，碳吉學院還提供額外的學習資源下載，龍吼你碳！'
          />
        </div>
      </div>
    </section>
  );
}
