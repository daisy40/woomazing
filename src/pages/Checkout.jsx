import Wrapper from "components/Wrapper.jsx";
import BaseButton from "components/BaseButton.jsx";

function Checkout() {
    return (
      <>
        <Wrapper>
          <div className="h-[464px] relative">
            <div className="top-[269px] absolute flex flex-col justify-between h-[111px] ml-[3px]">
              <h1>О бренде</h1>
              <div className="flex">
                <span>Главная</span>
                <span>&nbsp;—&nbsp;</span>
                <span>О бренде</span>
              </div>
            </div>
          </div>
        </Wrapper>
        <article className="mt-[130px]">
          <Wrapper>
            <div className="h-[1422px] flex flex-col gap-[130px] items-center">
              <section className="w-[1078px] h-[547px] flex justify-between items-center">
                <img />
                <div className="w-[542px] h-[321px] flex flex-col justify-between">
                  <h3>Идея и женщина</h3>
                  <div className="h-[240px] flex flex-col justify-between">
                    <p>Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером.</p>
                    <p>Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний.</p>
                  </div>
                </div>
              </section>
              <section className="w-full h-[547px] flex justify-between items-center">
                <div className="w-[542px] h-[393px] flex flex-col justify-between">
                  <h3>Магия в деталях</h3>
                  <div className="h-[312px] flex flex-col justify-between">
                    <p>Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.</p>
                    <p>Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало.</p>
                  </div>
                </div>
                <img />
              </section>
              <a href="/shop">
                <BaseButton>Перейти в магазин</BaseButton>
              </a>
            </div>
          </Wrapper>
        </article>
      </>
    )
  }
  
  export {Checkout}