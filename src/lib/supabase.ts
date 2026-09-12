import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/database.types';

const envUrl = import.meta.env.VITE_SUPABASE_URL;
const envAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Verified KIVENTA Supabase production configuration
export const SUPABASE_URL = envUrl || 'https://ubvwnxjcmuqvncyvildb.supabase.co';
export const SUPABASE_ANON_KEY = envAnonKey || 'sb_publishable_dpCGizBHcjRhmW67wBWh0w_xc5Qu64g';

export const isSupabaseConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});
