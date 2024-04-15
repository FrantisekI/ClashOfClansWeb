import { html } from 'cheerio';
import React from 'react';

const Page: React.FC = () => {
  return (

    <html lang="en">
    <head>
      
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Omega CZ</title>
    </head>
    <body>
    <div>
      <h1>Welcome to My Page</h1>
      <p>This is a basic page created with React.</p>
      <br/>

      <p>
        Příliš žluťoučký kůň úpěl ďábelské ódy.
        </p><p>
        PŘÍLIŠ ŽLUŤOUČKÝ KŮŇ ÚPĚL ĎÁBELSKÉ ÓDY.

      </p>
    </div>
      
    </body>
    </html>
    
  );
};

export default Page;