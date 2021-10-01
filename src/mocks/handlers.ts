import { rest } from "msw";

export const handlers = [
  rest.get("https://backend.dev/users", (req, res, ctx) => {
    return res(ctx.json([]));
  }),

  rest.get("/users/:id/messages", (req, res, ctx) => {
    return res(ctx.json([]));
  }),
];
