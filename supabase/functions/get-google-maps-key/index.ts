
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Get the API key from environment variables
    const key = Deno.env.get('GOOGLE_MAPS_API_KEY')
    
    if (!key) {
      console.error('Google Maps API key not found in environment variables')
      throw new Error('Google Maps API key not found')
    }

    console.log('Successfully retrieved Google Maps API key')
    
    // Return the API key
    return new Response(
      JSON.stringify({ key }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error retrieving Google Maps API key:', error.message)
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        status: 500,
      },
    )
  }
})
