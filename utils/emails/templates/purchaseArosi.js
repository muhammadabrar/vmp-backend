const PurchaseArosi = (website, data) => {
      return `
       

          <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Coins added to Wallet</title>
 <style>
      html{
        font-family: Arial, Helvetica, sans-serif;
      }
      .page{
            padding: 3rem;
            width: 8in;
            margin: 6rem 0;
            border: rgba(27, 31, 35, 0.15) solid 1px;
            
      }
      .companyName {
            display: inline-block;
      }
      .logo {
           display: inline-block;
           float: right;
      }
     
      .logo .logoImg{
            width: 60px;
            height: 60px;
            object-fit: cover;
            object-position: center;
            border-radius: 50%;
      }
      .pageTitle{
            background-color: #000;
            color: #fff;
            padding: 12px;
            text-align: center;
            font-weight: bold;
            border-radius: 8px;
      }
      .companyDetail{
            width: 50%;
            display: inline-block;
      }
      .customerInfo{
            display: inline-block;
      }

      .receipt .ReceiptTitle{
            width: 50%;
            display: inline-block;
      }
      .receipt .date{
            display: inline-block;
      }
      /* .billInfo, .receipt {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
      } */
      .receipt{
            margin: 2rem 0;
      }
      table {
        border-collapse: collapse;
        width: 100%;
      }

      table td,
      table th {
        padding: 8px;
        text-align: center;
      }

      table .first,
      .first {
        text-align: left;
      }
      table .last,
     .last{
        text-align: end;
      }
      table th {
        padding-top: 12px;
        padding-bottom: 12px;
        border-bottom: 1px solid #6d6d6d;
      }
      .totalInfo {
        width: 40%;
        margin-left: auto;
        margin-top: 4rem;
        color: #7a7979;
      }
      .totalInfo table tr th {
        border-bottom: none;
      }
      .totalInfo table tr {
        border-bottom: 1px solid #6d6d6d;
      }
      .Paid {
        color: #000;
        border-bottom: none !important;
      }
      .footer{
            margin-top: 8rem;
            border-top: 1px solid #6d6d6d;
            padding-top: 2rem;
      }
      .footer p{
            margin: 0;
            line-height: 1.5rem;

      }
    </style>
  </head>

  <body>
  <p>Hi ${data.name},</p>

  <p>Here is the summary of your purchase.</p>





    <div class="page">
      <div class="container">
        <div class="pageTitle">Receipt</div>
        <div class="header">
          <div class="branding">
            <h1 class="companyName">Speedy Brilliant</h1>
            <div class="logo">
              <img src="${website}/logo.png" alt="" class="logoImg" />
            </div>
          </div>
          <div class="billInfo">
            <div class="companyDetail">
              <h3>Bill from</h3>
              <p>Ar-4U</p>
              <p>billing@ar-4u.com</p>
            </div>
            <div class="customerInfo">
              <h3>bill to</h3>
              <p>${data.name}</p>
              <p>${data.email}</p>
            </div>
          </div>
          <div class="receipt">
            <h2 class="ReceiptTitle">Receipt</h2>
            <h2 class="date">${data.date}</h2>
          </div>
        </div>
        <div class="itemDetail">
          <table>
            <tr>
              <th class="first">Description</th>
              <th>Qty.</th>
              <th>Price</th>
              <th class="last">Amount</th>
            </tr>
            <tbody>
              <tr>
                <td class="first">AROSI</td>
                <td>${data.Coins}</td>
                <td>${data.price} ${data.currency}</td>
                <td class="last">${(data.price * data.Coins).toFixed(2)} ${data.currency}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="totalInfo">
          <table>
            <tr>
              <th class="first">Subtotal</th>
              <td class="last">${(data.price * data.Coins).toFixed(2)} ${data.currency}</td>
            </tr>
            <tr>
              <th class="first">Total</th>
              <td class="last">${(data.price * data.Coins).toFixed(2)} ${data.currency}</td>
            </tr>
            <tr class="Paid">
              <th class="first">Amount paid</th>
              <td class="last">${(data.price * data.Coins).toFixed(2)} ${data.currency}</td>
            </tr>
          </table>
        </div>
        <div class="footer">
            <p>Bank Account No: 491732657838</p>
            <p>HSBC Hong Kong</p>
            <p>Speedy brilliant Ltd</p>
            <p>300 Lockhert road, Hong Kong</p>
            <p>Reg. No: 1081441</p>
        </div>
      </div>
    </div>
    <p>If you have any complaints regarding billing, please reach us at complaints@ar-4u.com</p>

    <p>Best Regards<br/>
    AR-4 team</br>
  </body>
</html>

          `;
    };
    
    module.exports = PurchaseArosi;
    