import { Scalar } from "@scalar/hono-api-reference";
import packageJSON from "../../package.json";
import type { AppOpenAPI } from "./types";

export default function configureOpenAPI(app: AppOpenAPI) {
  const baseOpenAPIDoc = {
    openapi: "3.0.2",
    info: {
      version: packageJSON.version,
      title: "Better Auth API",
    },
  };

  app.doc("/doc", baseOpenAPIDoc);

  app.get(
    "/reference",
    Scalar({
      url: "/doc",
      theme: "kepler",
      layout: "classic",
      defaultHttpClient: {
        targetKey: "js",
        clientKey: "fetch",
      },
    })
  );
}
