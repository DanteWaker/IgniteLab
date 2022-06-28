import { gql, useQuery } from '@apollo/client';

import { Lesson } from './Lesson';

const GET_LESSONS_QUERY = gql`
  query MyQuery {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      title
      slug
      availableAt
      lessonType
    }
  }
`;

interface IGetLessonsQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: Date;
    lessonType: 'live' | 'class';
  }[];
}

export function Sidebar() {
  const { data } = useQuery<IGetLessonsQueryResponse>(GET_LESSONS_QUERY);

  return (
    <aside className="w-[348px] border-l border-gray-600 bg-gray-700 p-6 ">
      <span className="mb-6 block border-b border-gray-500 pb-6 text-2xl font-bold">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            slug={lesson.slug}
            availableAt={new Date(lesson.availableAt)}
            lessonType={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
}
