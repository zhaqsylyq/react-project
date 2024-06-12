import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mfvnwhjwdmhkmryprvzx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mdm53aGp3ZG1oa21yeXBydnp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxMDkxNjksImV4cCI6MjAzMzY4NTE2OX0.jhF2gwAFv1JwaM7fiDEV5IpFmngl_48mKnhwD1sXmfM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
