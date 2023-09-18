import prismadb from '@/lib/prismadb';

type DashboardProps = {
  params: {
    storeId: string;
  };
};

export default async function DashboardPage({ params }: DashboardProps) {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return <div>Active Store: {store?.name}</div>;
}
