
export default {
  async fetch(request, env, ctx) {
    const url = 'https://raw.githubusercontent.com/allrounder745/Mcq/refs/heads/main/data.json';

    try {
      const res = await fetch(url);
      const data = await res.json();

      return new Response(JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Failed to fetch quiz data' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      });
    }
  }
}
