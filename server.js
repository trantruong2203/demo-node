
const express = require('express')
const cors = require('cors');
const app = express();

// Cấu hình CORS cho phép tất cả origins và headers
app.use(cors());

app.use(express.json());
const dongxeRouter = require('./routers/dongxeRouter');
const nhaCungCapRouter = require('./routers/nhaCungCapRouter');
const accountRouter = require('./routers/AccountRouter');
const mucphiRouter = require('./routers/mucphiRouter');
const loaidvRouter = require('./routers/loaidvRouter')
const dkccRouter = require('./routers/DkccRouters')
const port = 3000;

app.use('/dongxe', dongxeRouter);
app.use('/nhacungcap', nhaCungCapRouter);
app.use('/account', accountRouter);
app.use('/mucphi', mucphiRouter);
app.use('/loaidv', loaidvRouter);
app.use('/dkcc', dkccRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


