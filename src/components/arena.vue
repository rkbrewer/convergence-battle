<template>
  <div class="arena">

  </div>
</template>
<script type="text/babel">
  import * as arena from '@/lib/arena';
  import io from '@/lib/io';

  export default {
    data() {
      return {

      };
    },
    mounted() {
      io.socket.get('/start', function serverResponded(body, JWR) { // JWR ==> "JSON WebSocket Response"
        console.log('Sails responded with: ', body);
        console.log('with headers: ', JWR.headers);
        console.log('and with status code: ', JWR.statusCode);

        arena.createAndStart(body);
      });
    }
  };
</script>
