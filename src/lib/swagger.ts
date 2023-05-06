import { createSwaggerSpec } from "next-swagger-doc";
// import "server-only";

export const getApiDocs = async () => {
  const spec: Record<string, any> = createSwaggerSpec({
    apiFolder: "/src/app/api",
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Hunt A Game Swagger Documentation",
        version: "1.0",
      },
      components: {
        securitySchemes: {
          BearerAuth: {
            type: "http",
            scheme: "bearer",
            bearerFormat: "JWT",
          },
          OAuth2: {
            type: "oauth2",
            flows: {
              authorizationCode: {
                authorizationUrl: "https://example.com/oauth/authorize",
                tokenUrl: "https://example.com/oauth/token",
                scopes: {
                  read: "Grants read access",
                  write: "Grants write access",
                },
              },
            },
          },
        },
      },
      security: [],
    },
  });
  return spec;
};
