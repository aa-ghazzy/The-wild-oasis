import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://qxtyhpugjfwoqofjpqaa.supabase.co";
const supabaseKey = "sb_publishable_gnpgbWgpCyzLuZAzn7J7gA__ArOyr09";

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
