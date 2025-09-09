import configureOpenAPI from "@/lib/configure-open-api";
import createApp from "@/lib/create-app";
// import auth from "@/routes/auth/auth.index";
import index from "@/routes/index.route";
import tasks from "@/routes/tasks/tasks.index";
import auth from "./lib/auth-cli";

const app = createApp();


async function gettingSpec() {
  const betterAuthSpec = await auth.api.generateOpenAPISchema();
  
  console.log("betterAuthSpec", betterAuthSpec)
}

// gettingSpec()


configureOpenAPI(app);

const routes = [index, tasks] as const;

routes.forEach((route) => {
  app.route("/api", route);
});

export type AppType = (typeof routes)[number];

export default app;
