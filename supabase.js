const SUPABASE_URL = "https://tvjnzsyguiofvjyurwgc.supabase.co";

const SUPABASE_KEY = "sb_publishable_6j-zhupXhZr0yHM_BQflHw_krb6By66";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

console.log("Supabase client ready");
async function testSupabaseConnection() {
  const { data, error } = await supabaseClient
    .from("dictionary")
    .select("id,myanmar_word,english_word,phonetic,category")
    .limit(5);

  if (error) {
    console.error("Supabase connection error:", error);
    return;
  }

  console.log("Supabase connection successful:", data);
}

testSupabaseConnection();
alert("Supabase connection test started");
