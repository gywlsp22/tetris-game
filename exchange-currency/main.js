let currencyRatio = {
  USD: {
    KRW: 1278.56,
    USD: 1,
    VND: 23087.50,
    unit: "달러"
  },
  KRW: {
    KRW: 1,
    USD: 0.00078,
    VND: 18.06,
    unit: "원"
  },
  VND: {
    USD: 0.000043,
    VND: 1,
    KRW: 0.055,
    unit: "동"
  }

}
// 1. console.log(currencyRatio.VND.unit);
// 2. console.log(currencyRatio["VND"]["unit"]);




let fromCurrency = 'USD';
let toCurrency = 'USD';

// 1. 버튼을 가져온다.
// 2. 버튼에 값을 바꾼다.
// 2. 선택된 currency값을 변수에 저장해준다.
document.querySelectorAll("#from-currency-list a")
  .forEach((menu) => menu.addEventListener("click", function () {
    document.getElementById("from-button").textContent = this.textContent;
    fromCurrency = this.textContent;
    let korean = currencyRatio[fromCurrency].unit;
    document.getElementById("korean").textContent = korean;
    convert()
    reConvert()

  })
  );
document.querySelectorAll("#to-currency-list a")
  .forEach((menu) => menu.addEventListener("click", function () {
    document.getElementById("to-button").textContent = this.textContent;
    toCurrency = this.textContent;
    let sekorean = currencyRatio[toCurrency].unit;
    document.getElementById("sekorean").textContent = sekorean;
    convert()
    reConvert()

  })
  );

// 1.키를 입력하는 순간
// 2.환전이 되어서
// 3. 환전된 값이 보인다.

function convert() {
  // 1.환전
  //얼마를 환전? 가지고 있는 돈이 뭔지, 바꾸고자 하는 돈이 뭔지
  //돈*환율 = 환전금액
  let amount = document.getElementById("from-input").value;
  let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];

  document.getElementById("to-input").value = convertedAmount;
}

function reConvert() {
  let seamount = document.getElementById("to-input").value;
  let seconvertedAmount = seamount * currencyRatio[toCurrency][fromCurrency];

  document.getElementById("from-input").value = seconvertedAmount;
}


// 1. 드랍다운 리스트에 값이 바뀔 때마다
//2. 환전을 다시한다.

