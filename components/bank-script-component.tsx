import Script from 'next/script'

 
export default function TinkoffPaymentComponent(){
  return<>
    <div className='pt-10 flex flex-col'>
      
        TINKOFF FORM 
        

        <Script src="https://securepay.tinkoff.ru/html/payForm/js/tinkoff_v2.js"></Script>
        <form className="flex flex-col p-10" name="payform-tbank" onsubmit="pay(this); return false;">
            <input  type="hidden" name="terminalkey" value="TBankTest"/>
            <input  type="hidden" name="frame" value="false"/>
            <input  type="hidden" name="language" value="ru"/>
            <input  type="text" placeholder="Сумма заказа" name="amount" required/>
            <input  type="hidden" placeholder="Номер заказа" name="order"/>
            <input  type="text" placeholder="Описание заказа" name="description"/>
            <input  type="text" placeholder="ФИО плательщика" name="name"/>
            <input  type="email" placeholder="E-mail" name="email"/>
            <input  type="tel" placeholder="Контактный телефон" name="phone"/>
            <input  type="submit" value="Оплатить"/>
        </form>  


    </div>
    </>
  
}