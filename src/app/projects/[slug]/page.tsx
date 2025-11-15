import { notFound } from 'next/navigation';
import { PROJECTS_DATA } from '@/utilities/data';
import ProjectDetail from '@/components/projects/project-details';
import { Metadata } from 'next';

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return PROJECTS_DATA.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS_DATA.find(p => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const project = PROJECTS_DATA.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="w-[90%] flex flex-col justify-center items-center mx-auto">
      <ProjectDetail project={project} />
    </div>
  );
}
