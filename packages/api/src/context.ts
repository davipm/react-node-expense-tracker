export async function createContext(opts: any) {
  console.log(opts);
  return {
    session: null,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
