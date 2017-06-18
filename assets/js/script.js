var owner = $('#owner');
var cvv = $('#cvv');
var cardNumber = $('#cardNumber');
var cardNumberField = $('#card-number-field');
var visa = $('#visa');
var mastercard = $('#mastercard');
var amex = $('#amex');

cardNumber.on('keyup',function(event){
  amex.removeClass('transparent');
  visa.removeClass('transparent');
  mastercard.removeClass('transparent');
  if($.payform.validateCardNumber(cardNumber.val()) == false){
    cardNumberField.removeClass('has-success');
    cardNumberField.addClass('has-error');
  }else{
    cardNumberField.removeClass('has-error');
    cardNumber.addClass('has-success');
  }

  if($.payform.parseCardType(cardNumber.val()) === 'visa'){
    amex.addClass('transparent');
    mastercard.addClass('transparent');
  }else if($.payform.parseCardType(cardNumber.val()) === 'mastercard'){
    visa.addClass('transparent');
    amex.addClass('transparent');
  }else if($.payform.parseCardType(cardNumber.val()) === 'amex'){
    visa.addClass('transparent');
    masterCard.addClass('transparent');
  }
});

var confirm = $('#confirm-purchase');
confirm.on('click',function(event){
  event.preventDefault();
  var isNumber = $.payform.validateCardNumber(cardNumber.val());
  var isCvv = $.payform.validateCardCVC(cvv.val());
  if(owner.val().length < 5){
    alert('Wrong Owner');
  }else if(!isNumber){
    alert('Card Number Invalid');
  }else if(!isCvv){
    alert('Wrong CVV Number');
  }else{
    alert('Correct');
  }
});
