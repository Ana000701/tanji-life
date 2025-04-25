export default function CoursesLayout({
  categories,
  latest,
}: {
  categories: React.ReactNode;
  latest: React.ReactNode;
}) {
  return (
    <>
      {/* <section className='bg-neutral-50'>{latest}</section> */}
      <section className='wrapper py-6 xl:py-12'>{categories}</section>
    </>
  );
}
