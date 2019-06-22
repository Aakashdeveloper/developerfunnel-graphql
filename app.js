const express = require('express');
const expressGraphQl = require('express-graphql');
const port = 4800;
const app = express();
const schema = require('./schema/schema');

app.use('/graphql',expressGraphQl({
    schema,
    graphiql:true
}) )

app.listen(port, () => {
    console.log(`listing to port ${port}`)
})

Building Graphql In 10 minutes

Learn Building GraphQl API in just 10 min |
Rest vs graphQL part 2


<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>
  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-5599656999760138",
    enable_page_level_ads: true
  });
</script>