/* eslint-disable import/no-duplicates */
import { isPast, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { CheckCircle, Lock } from 'phosphor-react';
import { Link } from 'react-router-dom';

interface ILessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  lessonType: 'live' | 'class';
}
export function Lesson(props: ILessonProps) {
  const { title, slug, availableAt, lessonType } = props;

  const avaliableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'K'h'mm",
    { locale: ptBR }
  );

  const isLessonAvaliable = isPast(availableAt);

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{avaliableDateFormatted}</span>

      <div className="mt-2 rounded border border-gray-500 p-4 transition-colors group-hover:border-green-500">
        <header className="flex items-center justify-between">
          {isLessonAvaliable ? (
            <span className="flex items-center gap-2 text-sm font-medium text-blue-500">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm font-medium text-orange-500">
              <Lock size={20} />
              Em breve
            </span>
          )}
          <span
            className="rounded border border-green-300 px-2 py-[0.125rem] 
          text-xs font-bold text-white"
          >
            {lessonType === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className="mt-5 block text-gray-200">{title}</strong>
      </div>
    </Link>
  );
}
