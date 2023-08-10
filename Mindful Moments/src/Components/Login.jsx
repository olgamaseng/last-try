
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tozgenmblmshwnykmcsm.supabase.co'
const supabaseKey =     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvemdlbm1ibG1zaHdueWttY3NtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4MDMxMDIsImV4cCI6MjAwNjM3OTEwMn0.gu9hxjSLuH9XsmHdSWa8oWUJdCyb4uNbZoIkccbzALc"
const supabase = createClient(supabaseUrl, supabaseKey)

async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'example@email.com',
      password: 'example-password',
    })
  };

function loginWithGoogle(){
    const { user,session,error } = await supabase.auth.signIn({provider: 'google'})
};

function logOut(){
 const { error } = await supabase.auth.signOut()   
};



const supabaseUrl = 'https://tozgenmblmshwnykmcsm.supabase.co'
const supabaseKey =     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRvemdlbm1ibG1zaHdueWttY3NtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4MDMxMDIsImV4cCI6MjAwNjM3OTEwMn0.gu9hxjSLuH9XsmHdSWa8oWUJdCyb4uNbZoIkccbzALc"