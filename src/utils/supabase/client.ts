import { Database } from "@/types/database";
import { createBrowserClient } from "@supabase/ssr";
import { supabaseKey, supabaseUrl } from "./config";

export function createClient() {
  return createBrowserClient<Database>(
    supabaseUrl!,
    supabaseKey!
  );
}
