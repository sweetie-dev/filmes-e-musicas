# Configurar Supabase no Movies and Music

1. Crie um projeto em https://supabase.com/dashboard.
2. Abra **SQL Editor** e execute todo o conteúdo de `supabase/schema.sql` uma única vez.
3. Em **Authentication > Providers > Email**, mantenha o cadastro por e-mail habilitado e escolha se deseja exigir confirmação do e-mail (recomendado).
4. Em **Authentication > URL Configuration**, informe a URL do seu site em **Site URL** e adicione a URL local e de produção em **Redirect URLs** quando necessário.
5. Em **Project Settings > API** (ou **Connect**), copie a **Project URL** e a chave **publishable/anon**. Nunca use `service_role` ou secret key no front-end.
6. Crie um arquivo `.env.local` com base em `.env.example`. Para Netlify, cadastre as mesmas variáveis em **Site configuration > Environment variables** e faça novo deploy.
7. Rode `npm install` e `npm run dev`. Para publicar, rode `npm run build`.
8. Se o site usa Netlify, o arquivo `public/_redirects` permite atualizar rotas como `/perfil` sem erro 404.

## Solicitações de filmes
Os pedidos são gravados em `public.movie_requests` e podem ser consultados no **Table Editor** do Supabase. **Não enviam e-mail automaticamente**. Para notificar `3mysilva@gmail.com`, configure depois uma Edge Function com provedor de e-mail (por exemplo Resend) e segredo guardado no servidor; nunca exponha uma chave de envio no React.

## Segurança
O banco usa RLS para proteger contas e favoritos. A leitura pública de pedidos está desabilitada. Antes de lançar publicamente, adicione CAPTCHA e limitação de requisições ao formulário público para reduzir spam. Imagens de avatar são públicas; não envie imagens privadas.
