import { serve } from "@hono/node-server";
import { Hono } from "hono";

import data from "./data/data.json";
import { Commune } from "./types";

const app = new Hono();

app.get("/", async (c) => {
  try {
    return c.json(data);
  } catch (error: any) {
    return c.text("Error", error.text);
  }
});

app.get("/wilayas", async (c) => {
  try {
    const cities = data.map((city) => {
      return {
        id: city.id,
        name_latin: city.name_latin,
        name_arabic: city.name_arabic,
      };
    });

    return c.json(cities);
  } catch (error: any) {
    return c.json({ message: error.message });
  }
});

app.get("/wilayas/:id", async (c) => {
  const id = c.req.param("id");

  try {
    const city = data.filter((city) => city.id === Number(id));
    const response = city.length
      ? c.json(city[0])
      : c.json({ message: "No wilaya Found" });

    return response;
  } catch (error: any) {
    return c.json({ message: error.message });
  }
});

//
app.get("/communes", async (c) => {
  try {
    const communes = data.map((city) => {
      return {
        ...city.municipalities,
      };
    });
    return c.json({ ...communes });
  } catch (error: any) {
    return c.json({ message: error.message });
  }
});

//
app.get("/communes/:communeName", async (c) => {
  const name = c.req.param("communeName").toLowerCase();

  try {
    const allCommunes = data.reduce(
      (acc: any, current: any) => [...acc, ...current.municipalities],
      []
    );

    const find = allCommunes.find(
      (comm: Commune) =>
        comm.name_latin.toLowerCase() === name ||
        comm.name_arabic.toLowerCase() === name
    );
    if (!find) {
      return c.json({ message: "Not Found" });
    }
    return c.json(find);
  } catch (error: any) {
    return c.json({ message: error.message });
  }
});

//  Start server on port 3000

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
