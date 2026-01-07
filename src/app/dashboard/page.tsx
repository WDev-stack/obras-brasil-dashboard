import { Card } from "../../components/Card";
import { Users, BookOpen, TrendingUp } from "lucide-react";

async function getPosts() {
  const res = await fetch('https://dummyjson.com/posts?limit=5');
  if (!res.ok) throw new Error('Falha ao buscar dados');
  const data = await res.json();
  return data.posts;
}

export default async function DashboardPage() {
  const posts = await getPosts();

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-zinc-900">Painel de Controle</h1>
        <p className="text-zinc-500">Gestão em tempo real das obras e atualizações.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card title="Posts Totais" value="150" description="+12 novos hoje" icon={BookOpen} color="text-blue-500" />
        <Card title="Usuários Ativos" value="2.400" description="+18% este mês" icon={Users} color="text-indigo-500" />
        <Card title="Engajamento" value="89%" description="+5.2% vs ontem" icon={TrendingUp} color="text-emerald-500" />
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
        <div className="p-6 border-b border-zinc-100 bg-zinc-50/50">
          <h2 className="font-bold text-zinc-800 text-lg">Últimas Atividades da API</h2>
        </div>
        <div className="divide-y divide-zinc-100">
          {posts.map((post: any) => (
            <div key={post.id} className="p-5 hover:bg-zinc-50 flex items-center justify-between transition-colors">
              <div className="flex flex-col">
                <span className="text-zinc-800 font-semibold">{post.title}</span>
                <span className="text-sm text-zinc-500">Postagem ID: {post.id}</span>
              </div>
              <button className="text-indigo-600 text-sm font-medium hover:underline">Ver Detalhes</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}