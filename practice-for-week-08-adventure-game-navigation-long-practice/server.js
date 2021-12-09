const http = require('http');
const fs = require('fs');

const { Player } = require('./game/class/player');
const { World } = require('./game/class/world');

const worldData = require('./game/data/basic-world-data');

let player;
let world = new World();
world.loadWorld(worldData);

const server = http.createServer((req, res) => {

  /* ============== ASSEMBLE THE REQUEST BODY AS A STRING =============== */
  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => { // After the assembly of the request body is finished
    /* ==================== PARSE THE REQUEST BODY ====================== */
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    }

    function redirect(urlPath) {
      res.statusCode = 302;
      res.setHeader('location', urlPath);
      return res.end();
    }
    /* ======================== ROUTE HANDLERS ========================== */
    if (req.method === 'GET' && req.url === '/') {
      const htmlTemplate = fs.readFileSync('./views/new-player.html', 'utf-8');
      const htmlPage = htmlTemplate.replace(/#{availableRooms}/g, world.availableRoomsToString());
      res.statusCode = 200;
      res.setHeader('content-type', 'text/html');
      return res.end(htmlPage);
    }

    if (req.method === 'POST' && req.url === '/player') {
      const { name, roomId } = req.body;
      player = new Player(name, world.rooms[roomId]);
      return redirect(`/rooms/${player.currentRoom.id}`);
    }

    if (!player) return redirect('/');

    if (req.method === 'GET' && req.url.startsWith('/rooms/') && req.url.split('/').length === '/rooms/:roomId'.split('/').length) {
      const reqUrlArr = req.url.split('/');
      let roomId = reqUrlArr[2];
      if (roomId === player.currentRoom.id) {
        const room = player.currentRoom;
        const htmlTemplate = fs.readFileSync(`./views/room.html`);
        let htmlPage = htmlTemplate
          .replace()
          .replace()
          .replace()
          .replace()
          .replace()
      }
    }

    // if (req.method === 'GET' && req.url.startsWith('/rooms/') && req.url.split('/').length === '/rooms/:roomId/:direction'.split('/').length) {
    //   const reqUrlArr = req.url.split('/');
    //   let roomId = reqUrlArr[2];
    //   let direction = reqUrlArr[3];
    //   player.currentRoom = roomId;
    //   const htmlPage = fs.readFileSync(`/rooms/${roomId}/${direction}`);
    //   res.statusCode = 200;
    //   res.setHeader('content-type', 'text/html');
    //   return res.end(htmlPage);
    // }

    // if (req.method === 'POST' && req.url.startsWith('/items/') && req.url.split('/').length === '/rooms/:itemId/action'.split('/').length) {
    //   const reqUrlArr = req.split('/');
    //   let itemId = reqUrlArr[2];
    //   let action = reqUrlArr[3];

    // }
  })
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
