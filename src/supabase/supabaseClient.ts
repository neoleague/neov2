import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anon = import.meta.env.VITE_SUPABASE_ANON;

// If env vars are present, create a real Supabase client.
// If not, export a lightweight stub so the app can run in dev without crashing.
let supabaseClient: any;
if (url && anon) {
  supabaseClient = createClient(`https://${url}.supabase.co`, anon);
} else {
  // Minimal stub implementing the methods used in this project.
  // Returns null/empty results so UI can run without a configured Supabase instance.
  // This is intended as a developer convenience only.
  // If you want real auth or DB access, set VITE_SUPABASE_URL and VITE_SUPABASE_ANON.
  // eslint-disable-next-line no-console
  console.warn(
    "VITE_SUPABASE_URL or VITE_SUPABASE_ANON not set — using stub supabaseClient."
  );

  supabaseClient = {
    auth: {
      signUp: async (..._args: any[]) => ({ data: null, error: null }),
      signInWithPassword: async (..._args: any[]) => ({
        data: null,
        error: null,
      }),
      signInWithIdToken: async (..._args: any[]) => ({
        data: null,
        error: null,
      }),
      signOut: async () => ({ error: null }),
      updateUser: async (..._args: any[]) => ({ data: null, error: null }),
      getSession: async () => ({ data: { session: null }, error: null }),
      getUser: async () => ({ data: { user: null }, error: null }),
      onAuthStateChange: (_cb: any) => {
        // Return a subscription-like object enough for callers to ignore.
        return {
          data: { subscription: { unsubscribe: () => {} } },
          error: null,
        };
      },
    },
    from: (_table: string) => ({
      select: () => ({
        eq: (_col: string, _val: any) => ({
          single: async () => ({ data: null, error: null }),
        }),
      }),
      insert: async (_payload: any) => ({ data: null, error: null }),
    }),
  };
}

export { supabaseClient };
