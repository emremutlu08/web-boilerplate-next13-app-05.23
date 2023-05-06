NextAuth and postgres settings! https://codevoweb.com/setup-and-use-nextauth-in-nextjs-13-app-directory/

Run the NextAuth Project Locally
To view a demo of the application, you can follow the steps below:

Navigate to the project’s repository located at https://github.com/wpcodevo/nextauth-nextjs13-prisma and clone or download it. Afterwards, open the source code in your preferred code editor.
Within the .env file, add your client IDs and secrets for both GitHub and Google OAuth. If you need assistance obtaining these, follow the instructions outlined in the last two sections at the bottom of this article.
Launch a PostgreSQL server in a Docker container by running the command docker-compose up -d.
Install all the required dependencies with yarn or yarn install.
Apply the Prisma migrations to the Postgres database by executing yarn prisma db push. This command will also generate the Prisma Client within the node modules folder.
Start the Next.js development server with the command yarn dev. Wait for the project to build, then open the URL provided in your preferred browser.
Play around with the app’s functionalities by signing in using Google and GitHub OAuth. You can also create an account with your email and password and use them to access the app.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[http://127.0.0.1:3000/api/hello](http://127.0.0.1:3000/api/hello) is an endpoint that uses [Route Handlers](https://beta.nextjs.org/docs/routing/route-handlers). This endpoint can be edited in `app/api/hello/route.ts`.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
