import { createClient } from "@supabase/supabase-js";

const URL = 'https://brnxkmxuigltghdkjacg.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJybnhrbXh1aWdsdGdoZGtqYWNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA5ODkyNzYsImV4cCI6MTk5NjU2NTI3Nn0.dsANWrvkNot7949q_ODyfW9CL3BwlKRpWW10Z_kDu8I';

export const supabase = createClient(URL, API_KEY);