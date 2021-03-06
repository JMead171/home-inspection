let generatePage  = (name, address, citystate, zip, kit, bath, fam, type) => {
    return `
      <!DOCTYPE html>
      <html lang="en">
  
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link rel="stylesheet" href="style.css" />
          <title>Home Inspection Report</title>
      </head>
  
      <body>
          <h1 class="title">Home Inspection Report</h1>
          <h2>${name}</h2>
          <h2>${address}</h2>
          <h2>${citystate} ${zip}</h2>
          <br>
          <h1 class="title">Items Reviewed</h1>
          <h2>Kitchen:</h2>
          <h3>${kit}</h3>
          <h2>Bathroom:</h2>
          <h3>${bath}</h3>
          <h2>Family Room:</h2>
          <h3>${fam}</h3>
          <h2>Type of House:</h2>
          <h3>${type}</h3>
      </body>
  
      </html>
    `;
  }
  
  module.exports = generatePage;