const SUPABASE_URL = "https://tvjnzsyguiofvjyurwgc.supabase.co";

const SUPABASE_KEY = "sb_publishable_6j-zhupXhZr0yHM_BQflHw_krb6By66";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

console.log("Supabase client ready");
