const mealsEl = document.getElementById('meals');

function SummaryAPI() {
  fetch(
    'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary?region=US&lang=en',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        'x-rapidapi-key': 'd4d0d1bf3dmsh4b1ca4e22ee4800p1694e9jsn7362d785cf0f',
      },
    }
  )
    .then((data) => data.json())
    .then((response) => {
      console.log(response);

      if (response.result === null) {
        resultHeading.result = '<p>The are no search results. Try again!</p>';
      } else {
        mealsEl.innerHTML = `              
          <div class="container">                                              
            <h3> exchangeTimezoneName = ${response.marketSummaryResponse.result[0].exchangeTimezoneName} </h3></br>       
            <h3> fullExchangeName = ${response.marketSummaryResponse.result[0].fullExchangeName} </h3></br>
            <h3> symbol = ${response.marketSummaryResponse.result[0].symbol} </h3></br>                         
          </div>            
              `;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function MoversAPI() {
  fetch(
    'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-movers?region=US&lang=en',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        'x-rapidapi-key': 'd4d0d1bf3dmsh4b1ca4e22ee4800p1694e9jsn7362d785cf0f',
      },
    }
  )
    .then((data) => data.json())
    .then((response) => {
      console.log(response);

      if (response.result === null) {
        resultHeading.result = '<p>The are no search results. Try again!</p>';
      } else {
        mealsEl.innerHTML = `              
          <div class="container">                                              
            <h3> id = ${response.finance.result[0].id} </h3></br>       
            <h3> title = ${response.finance.result[0].title} </h3></br>
            <h3> description = ${response.finance.result[0].description} </h3></br>                         
          </div>            
              `;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function QuotesAPI() {
  fetch(
    'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes?region=US&lang=en&symbols=BAC%252CKC%253DF%252C002210.KS%252CIWM%252CAMECX',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        'x-rapidapi-key': 'd4d0d1bf3dmsh4b1ca4e22ee4800p1694e9jsn7362d785cf0f',
      },
    }
  )
    .then((data) => data.json())
    .then((response) => {
      console.log(response);

      if (response.result === null) {
        resultHeading.result = '<p>The are no search results. Try again!</p>';
      } else {
        mealsEl.innerHTML = `              
          <div class="container">                                              
            <h3> language = ${response.quoteResponse.result[0].language} </h3></br>       
            <h3> region = ${response.quoteResponse.result[0].region} </h3></br>
            <h3> quoteType = ${response.quoteResponse.result[0].quoteType} </h3></br>                         
          </div>            
              `;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function ChartsAPI() {
  fetch(
    'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-charts?comparisons=%255EGDAXI%252C%255EFCHI&region=US&lang=en&symbol=HYDR.ME&interval=5m&range=1d',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        'x-rapidapi-key': 'd4d0d1bf3dmsh4b1ca4e22ee4800p1694e9jsn7362d785cf0f',
      },
    }
  )
    .then((data) => data.json())
    .then((response) => {
      console.log(response);

      if (response.result === null) {
        resultHeading.result = '<p>The are no search results. Try again!</p>';
      } else {
        mealsEl.innerHTML = `              
          <div class="container">                                              
            <h3> language = ${response.chart.result[0].comparisons[0].symbol} </h3></br>       
            <h3> region = ${response.chart.result[0].comparisons[0].previousClose} </h3></br>
            <h3> quoteType = ${response.chart.result[0].comparisons[0].gmtoffset} </h3></br>                         
          </div>            
              `;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function CompleteAPI() {
  fetch(
    'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/auto-complete?lang=en&region=US&query=nbe',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        'x-rapidapi-key': 'd4d0d1bf3dmsh4b1ca4e22ee4800p1694e9jsn7362d785cf0f',
      },
    }
  )
    .then((data) => data.json())
    .then((response) => {
      console.log(response);

      if (response.result === null) {
        resultHeading.result = '<p>The are no search results. Try again!</p>';
      } else {
        mealsEl.innerHTML = `              
          <div class="container">                                              
            <h3> language = ${response.ResultSet.Result[0].symbol} </h3></br>       
            <h3> region = ${response.ResultSet.Result[0].name} </h3></br>
            <h3> quoteType = ${response.ResultSet.Result[0].exch} </h3></br>                         
          </div>            
              `;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

function SparkAPI() {
  fetch(
    'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-spark?interval=1m&range=1d&symbols=AMZN%252CAAPL%252CWDC%252CREYN%252CAZN%252CYM%253DF',
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        'x-rapidapi-key': 'd4d0d1bf3dmsh4b1ca4e22ee4800p1694e9jsn7362d785cf0f',
      },
    }
  )
    .then((data) => data.json())
    .then((response) => {
      console.log(response);

      if (response.result === null) {
        resultHeading.result = '<p>The are no search results. Try again!</p>';
      } else {
        mealsEl.innerHTML = `              
          <div class="container">                                              
            <h3> language = ${response.AAPL.symbol} </h3></br>       
            <h3> region = ${response.AAPL.end} </h3></br>
            <h3> quoteType = ${response.AAPL.star} </h3></br>                         
          </div>            
              `;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
