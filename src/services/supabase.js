import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://qxtyhpugjfwoqofjpqaa.supabase.co",
  "sb_publishable_gnpgbWgpCyzLuZAzn7J7gA__ArOyr09"
);

export default supabase;
